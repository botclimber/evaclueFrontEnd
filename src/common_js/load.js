// Load of all necessary data on init (ex: fetches)

// get all reviews
async function getAllReviews () {
    console.log("Fetching ReviewsService API and getting all reviews ... ")
    const reviews = await fetch(`${apis.reviews}/reviews`)
    const response = await reviews.json()

    console.log(response)

    return response
}