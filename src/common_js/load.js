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
    const reviews = await fetch(`${apis.geoLocation}/addresses`)
    const response = await reviews.json()

    console.log(response)

    return response.addresses
}

/**
 * 
 * @returns [residences]
 */
async function getAllResidences () {
    console.log("Fetching GeoLocation API and getting all residences ... ")
    const reviews = await fetch(`${apis.geoLocation}/residences`)
    const response = await reviews.json()

    console.log(response)

    return response.residences
}

/**
 * return reviews and detailed info about each review and same for addresses
 * 
 * @returns {addrs, revs}
 */
async function aggrData(){
    const reviews = await getAllReviews()
    const residences = await getAllResidences()
    const addresses = await getAllAddresses()

    const resPerAddress = residences.map( e => {
        const addr = getOrElse("???", addresses, e.addressId, "id")
        return {res: e, addr: addr}
    })

    const groupRes = groupBy(resPerAddress, v => v.res.id)

    const revs = reviews.map( e => {
        return {rev: e, location: groupRes[e.residenceId][0]}
    })

    const addrs = groupBy(revs, v => v.location.res.addressId)

    console.log(revs, addrs)

    return {addrs: addrs, revs: revs}
}