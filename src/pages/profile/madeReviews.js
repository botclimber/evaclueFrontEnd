/*<div class="flex w-1/3 flex-wrap">
                          <div class="w-full p-1 md:p-2">
                            <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center"
                              src="https://m.economictimes.com/thumb/msid-102650347,width-1200,height-900,resizemode-4,imgsize-85186/jujutsu-kaisen-season-2-is-the-popular-manga-available-on-netflix.jpg" />
                          </div>
                        </div>*/
const totalReviews = document.getElementById("totalReviews")
const modalReview = document.getElementById("modal-review")
const modalRating = document.getElementById("modal-rating")
const modalCreatedOn = document.getElementById("modal-createdOn")
const modalImgs= document.getElementById("modal-imgs")

function toggleModalReviews(modalID, reviewData = undefined){

    if(reviewData){
        modalReview.innerHTML = reviewData.rev.review
        modalRating.innerHTML = reviewData.rev.rating
        modalCreatedOn.innerHTML = reviewData.rev.createdOn
        modalImgs.innerHTML = ""

        for(let x = 0; x < reviewData.rev.imgs; x++){
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

aggrData()
.then(response => {
  
    console.log("response")
    console.log(response)

    const ownedRevs = []
    Object.values(response.revs).forEach(element => {
        element.map(row => {
            if(row.rev.userId === userId) ownedRevs.push(row) 
        })
    })

    totalReviews.innerHTML = ownedRevs.length

    console.log("Owned Reviews: ")
    console.log(ownedRevs)

    ownedRevs.map(
        // {rev, location}
        r => {

       const row = [ //html 
        `${r.location.addr.city}, ${r.location.addr.street} ${r.location.addr.nr}. ${r.location.res.floor} ${r.location.res.direction}`,
         `${takeLeft(r.rev.review, 15)} ...<a href="#" onclick="toggleModalReviews('reviewDetails', ${serialize(r)})"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> more</a>`,
         r.rev.createdOn,
         `<button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" disabled>
         Delete
       </button>`]

        revDataTable.row.add(row)
        .draw(false);
    });

})