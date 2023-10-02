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
    /* {address, residences, residenceData} */
    /* const rows = residences.map(r => {

        return[ //html 
        `${r.address.city}, ${r.address.street} ${r.address.nr} ${r.residence.floor} ${r.residence.direction}`,
         `<input type="number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="${r.residenceData.rentPrice}" onchange="updateResidence('rentPrice', ${r.residenceData.id}, this.value)">`,
         `<div id="resStatus${r.residenceData.id}">${free(r.residenceData.free, "resStatus"+r.residenceData.id)}</div>`,
         `<button onclick="toggleModal('modal-id', ${serialize(r.residenceData)})" class="bg-transparent hover:bg-orange-700 float-right font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
         Details
       </button>`]
     });
 
     resDataTable.row.add(rows.flat())
     .draw(false); */

})