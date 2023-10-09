// Load of all necessary data on init (ex: fetches)

/**
 * 
 * @returns [reviews]
 */
async function getAllReviews () {
    console.log("Fetching ReviewsService API and getting all reviews ... ")
    const reviews = await fetch(`${apis.reviews}/reviews`)
    const response = await reviews.json()

    console.log(response)

    return response.reviews
}

/**
 * 
 * @returns [addresses]
 */
async function getAllAddresses () {
    console.log("Fetching GeoLocation API and getting all addresses ... ")
    const addresses = await fetch(`${apis.geoLocation}/addresses`)
    const response = await addresses.json()

    console.log(response)

    return response.addresses
}

/**
 * 
 * @returns [residences]
 */
async function getAllResidences () {
    console.log("Fetching GeoLocation API and getting all residences ... ")
    const residences = await fetch(`${apis.geoLocation}/residences`)
    const response = await residences.json()

    console.log(response)

    return response.residences
}

async function aggrAddrRes(){
    const residences = await getAllResidences()
    const addresses = await getAllAddresses()
    const grouppedResidences = groupBy(residences, v => v.addressId)

    const resPerAddress = addresses.map( e => {     
        return {res: grouppedResidences[e.id], addr: e} 
    })

    const grouppedAddresses = groupBy(resPerAddress, v => v.addr.id)

    // from array to object
    for(y in grouppedAddresses) grouppedAddresses[y] = Object.assign({}, grouppedAddresses[y][0]);

    return grouppedAddresses
}

/**
 * Reviews per residence composition
 * 
 * @param {*} addrId 
 * @param {*} resId 
 * @returns [{rev, location}] // location is a bit rendundant 
 */
async function revsPerResidenceComp(res){
    const allData = await aggrData()
  
    const revsPerAddress = allData.revs[res.addressId]
    return revsPerAddress.filter(_ => {return _.location.res.id == res.id})
  }

/**
 * return reviews and detailed info about each review and same for addresses
 * 
 * @returns {addrs, revs}
 */
async function aggrData(){
    const reviews = await getAllReviews()
    const groupRes = await aggrAddrRes()

    console.log(reviews)

    const revs = reviews.map( e => {
        for(let x in groupRes){
            const revResidence = getOrElse(undefined, groupRes[x].res, e.residenceId, "id")
            console.log("revResidence")
            console.log(revResidence)
            if(revResidence) return {rev: e, location: {res: revResidence, addr: groupRes[revResidence.addressId].addr}}
        }
    })

    const groupRevs = groupBy(revs, v => v.location.res.addressId)

    return {addrs: groupRes, revs: groupRevs}
}

//async function getAllAvailableResidences(location){}