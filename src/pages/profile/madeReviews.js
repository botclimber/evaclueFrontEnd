function toggleModalReviews(modalID, reviewData = undefined){

    if(reviewData){
        // TODO: update modal data
    }

    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
        
}

aggrData()
.then(response => {

    console.log(response)
    console.log("asjdkhas dbask jd")
    
    const ownedRevs = []
    Object.values(response.revs).forEach(element => {
        element.map(row => {
            if(row.rev.userId === userId) ownedRevs.push(row) 
        })
    })

    console.log("Owned Reviews: ")
    console.log(ownedRevs)

    // TODO: list reviews

})