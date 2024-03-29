function getImgs(reviewId, nrImgs) {

    const imgs = []
    for (let x = 0; x < nrImgs; x++) {
        imgs.push(`../../../assets/images/reviewImgs/review-${reviewId}/rImg-${x}.gif`)
    }

    return imgs
}

const buildReviewsData = async (data) => {
    const allReviews = await getAllReviews()
    const userContributions = (id) => {
        return allReviews.filter(review => review.userId === id).length
    }

    const reviewsData = data.map(row => {
        const residence = (!isEmpty(row.location.res.floor)) ? `${row.location.res.floor} - ${row.location.res.direction}` : ""
        const residenceForModal = (residence) ? `| ${residence}` : ""

        return {
            reviewTitle: `${row.location.addr.city}, ${row.location.addr.street}, ${row.location.addr.nr} ${residenceForModal}`,
            reviewRes: residence,
            reviewUserName: row.rev.userName,
            reviewUserImage: row.rev.userImg,
            //reviewBadge: "Badge",
            reviewContributions: userContributions(row.rev.userId),
            reviewCreatedAt: row.rev.createdOn,
            reviewRating: row.rev.rating,
            reviewContent: row.rev.review,
            reviewImages: (row.rev.imgs > 0) ? getImgs(row.rev.id, row.rev.imgs) : []
        }
    })

    console.log(reviewsData)

    return reviewsData
}

const buildArticle = (element) => {
    const eleAsParameter = serialize([element])
    const bgImg = (element.reviewImages.length > 0) ? element.reviewImages[0] : ""
    console.log(eleAsParameter)

    const article = /*html*/
        `
    <article class="relative bg-[#374152] mb-1 border rounded-md">
        <div class="absolute bg-cover w-full h-[88px] bg-[url('${bgImg}')] rounded-t-md"></div>
        <div class="absolute w-full h-[88px] backdrop-brightness-50 rounded-t-md"></div>

        <div class="relative p-2">
        <div class="flex items-center mb-4 space-x-4">
            <img class="w-10 h-10 rounded-full" src="../../../assets/images/userImages/${element.reviewUserImage}" alt="">
            <div class="space-y-1 font-medium dark:text-white">
                <p>${element.reviewUserName} <span class="block text-sm text-gray-500 dark:text-gray-200">${element.reviewRes}</span></p>
            </div>
        </div>
        <div class="flex items-center mb-1">
            ${buildStars(element.reviewRating)}
        </div>
        <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in ${element.reviewTitle.split(',')[0]} on <time datetime="${element.reviewCreatedAt}">${element.reviewCreatedAt}</time></p></footer>
        <p class="mb-2 text-white">${takeLeft(element.reviewContent, 15)} ...</p>
        <a href="#" onclick="toggleModal('defaultModal', ${eleAsParameter})" class="mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" >Read more</a>
        </div>
    </article>
    `

    return article

}

async function buildHtml(data) {
    const reviewsData = await buildReviewsData(data)

    var html = `<div id = "initRevsDash" class="grid grid-cols-2">`
    await reviewsData.forEach(element => html += buildArticle(element));
    html += `</div>`

    return html
}

const reviewsSearch =/*html*/
    `
<div>
    <label class="mb-5 relative bg-white  flex flex-col md:flex-row items-center justify-center border py-2 px-2 " for="search-bar">
        <input type="text" id="search-bar" onchange="reviewFilter(this.value)" placeholder="floor | direction"
            class="px-4 w-full rounded-md flex-1 outline-none bg-white">
            <i class="fa fa-search mr-2 text-blue-900"></i>
    </label>
</div>
`

async function reviewFilter(val) {
    const reviewsToShow = async (reviews) => {
        const reviewsData = await buildReviewsData(reviews)

        var html = ""
        await reviewsData.forEach(element => html += buildArticle(element));

        reviewsSection.innerHTML = html

    }
    console.log("Review Filter Input")

    const reviewsSection = document.getElementById("initRevsDash")

    const splittedVal = val.split("|")
    const floor = splittedVal[0]
    const dir = splittedVal[1]

    console.log("value for [floor,dir]")
    console.log(floor)
    console.log(dir)

    console.log(currentSelectedReviews)

    if (!isEmpty(floor) && !isEmpty(dir)) {
        const filteredReviews = currentSelectedReviews.filter(r => (r.location.res.floor == floor.trim() && r.location.res.direction == dir.trim()))

        if (!isEmpty(filteredReviews)) {
            await reviewsToShow(filteredReviews)
            return
        }else{
            dialog.info("No Reviews found for that specific residence!")
            return
        }
    }

    dialog.info("No Reviews found for that specific residence!")
    reviewsToShow(currentSelectedReviews)
}

function updateModalContent(revInput) {

    const reviewData = revInput[0]
    console.log(reviewData)
    const imgLimit = 3
    const exceptions = ["reviewImages", "reviewUserImage", "reviewRes"]

    for (data in reviewData) {
        console.log(data)
        if (!exceptions.includes(data)) {
            document.getElementById(data).innerHTML = reviewData[data]

        } else {
            if (data == "reviewUserImage") document.getElementById(data).src = `../../../assets/images/userImages/${reviewData[data]}`
            else if (data == "reviewImages") {

                const reviewImagesDiv = document.getElementById("reviewImagesContent")
                const imgsLen = reviewData[data].length
                if (imgsLen === 0) reviewImagesDiv.style.display = "none"
                else {
                    reviewImagesDiv.style.display = ""
                    for (const index of Array(imgLimit).keys()) {
                        const imgDiv = document.getElementById(`img${index}`)
                        const img = imgDiv.getElementsByTagName("img")[0]

                        if (index < reviewData[data].length) img.src = reviewData[data][index]
                        else img.src = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                    }
                }
            }
        }
    }

}

function toggleModal(modalID, reviewData) {
    updateModalContent(reviewData)

    const modal = document.getElementById(modalID)

    modal.style.width = "100%"
    modal.style.height = "100%"

    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)"

    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
}