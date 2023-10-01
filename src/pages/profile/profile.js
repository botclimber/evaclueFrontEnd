async function getOwnedResidences(){
    const response = await (await fetch(`${apis.resowners}getByUser`, {
        method: "GET",
        headers: {
            'authorization':'baer '+token,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    })).json()

    console.log(response)
    const addresses = await aggrAddrRes()
    console.log("Existing Addresses: ")
    console.log(addresses)

    const x = response.ownedResidences.map(element => {
        const address = addresses[element.addressId]
        const residence = getOrElse("???", address.res, element.resId, "id")
        
        return {address: address.addr, residence: residence, residenceData: element}
    })

    console.log(x)

}
async function updateResidence(){}
async function releaseResidence(){}

getOwnedResidences()