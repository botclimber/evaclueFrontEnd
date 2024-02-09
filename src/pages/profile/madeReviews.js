const totalReviews = document.getElementById("totalReviews")
const modalReview = document.getElementById("modal-review")
const modalRating = document.getElementById("modal-rating")
const modalCreatedOn = document.getElementById("modal-createdOn")
const modalImgs = document.getElementById("modal-imgs")

function toggleModalReviews(modalID, reviewData = undefined) {

  if (reviewData) {
    modalReview.innerHTML = reviewData.rev.review
    modalRating.innerHTML = reviewData.rev.rating
    modalCreatedOn.innerHTML = reviewData.rev.createdOn
    modalImgs.innerHTML = ""

    for (let x = 0; x < reviewData.rev.imgs; x++) {
      modalImgs.innerHTML += /*html */
        `<div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="../../../assets/images/reviewImgs/review-${reviewData.rev.id}/rImg-${x}.gif" />
            </div>
          </div>`
    }
  }

  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");

}

async function delReview(revId) {
  try{
      if(confirm("Are you sure ?")){
          const response = await fetch(`${apis.reviews}delete`, {
              method: "DELETE",
              headers: {
                  'authorization': 'baer ' + token,
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({revId: revId})
          })
          const data = await response.json()

          console.log(data)
          window.location.reload()
      }
  }catch(e){
      console.log(e)
      dialog.err(e.msg)
  }
}

aggrData()
  .then(response => {

    console.log("response")
    console.log(response)

    const ownedRevs = []
    Object.values(response.revs).forEach(element => {
      element.map(row => {
        console.log(userInfo.userId)
        if (row.rev.userId == userInfo.userId) ownedRevs.push(row);
      })
    })

    totalReviews.innerHTML = ownedRevs.length

    console.log("Owned Reviews: ")
    console.log(ownedRevs)

    ownedRevs.map(
      // {rev, location}
      r => {
        const status = (r.rev.approved)? "<span style='color:green'>approved</span>" : "<span style='color:orange'>pending</span>"

        const row = [ //html 
          `${r.location.addr.city}, ${r.location.addr.street} ${r.location.addr.nr}. ${r.location.res.floor} ${r.location.res.direction}`,
          `${takeLeft(r.rev.review, 15)} ...<a href="#" onclick="toggleModalReviews('reviewDetails', ${serialize(r)})"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> more</a>`,
          status,
          r.rev.createdOn,
          `<button type="button" onclick="delReview(${r.rev.id})" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
         Delete
       </button>`]

        revDataTable.row.add(row)
          .draw(false);
      });

  })