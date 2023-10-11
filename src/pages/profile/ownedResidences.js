var persistOwnedResidences // global var to persist fetched data, so we dont need to always get it from server

const totalResidences = document.getElementById("totalResidences")

const flatSize = document.getElementById("flatSize")
const bedRooms = document.getElementById("bedRooms")
const bathRooms = document.getElementById("bathRooms")
const notes = document.getElementById("notes")
const parking = document.getElementById("parking")
const elevator = document.getElementById("elevator")
const buildingAge = document.getElementById("buildingAge")
const currentResDetailsId = document.getElementById("resDetailsId")

const ondResidences = document.getElementById("residences")

const free = (status, id) => {

    switch(status){
        case 1: return `<input type="checkbox" onclick="updateAvailabity(0,'${id}')" id="enable" lass="mr-2 leading-tight" checked><span class="text-green-500"> Yes</span>`;
        case 0: return `<input type="checkbox" onclick="updateAvailabity(1,'${id}')" id="enable" lass="mr-2 leading-tight"><span class="text-red-500"> No</span>`
    }
}

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

    const ownedResidences = response.ownedResidences.map(element => {
        const address = addresses[element.addressId]
        const residence = getOrElse("???", address.res, element.resId, "id")
        
        return {address: address.addr, residence: residence, residenceData: element}
    })

    totalResidences.innerHTML = ownedResidences.length

    console.log(ownedResidences)
    persistOwnedResidences = groupBy(ownedResidences, r => r.residenceData.id)

    console.log("persistOwnedResidences")
    console.log(persistOwnedResidences)

    return ownedResidences
}

async function updateResidence(params, id = currentResDetailsId.value, ...others){
    const submit = async (data) => {

        const response = await (await fetch(`${apis.resowners}update/${id}`,{
            method: "PATCH",
            headers: {
                'authorization':'baer '+token,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })).json()

        if(params === "form") window.location.reload();
    }

    switch(params){
        case "rentPrice":
            const rentPriceData = {
                rentPrice: others[0]
            }

            await submit(rentPriceData)   
        ; break;
        case "free":
            const freeData = {
                free: others[0]
            }
            
            await submit(freeData)    
        ; break;
        case "form":
            const formData = {
                flatSize: flatSize.value,
                bedRooms: bedRooms.value,
                bathRooms: bathRooms.value,
                notes: notes.value,
                parking: parking.value,
                elevator: elevator.value,
                buildingAge: buildingAge.value
            }
            
            await submit(formData)
        ; break;
    }
}

async function releaseResidence(){}

async function updateAvailabity(status, id){
    const resStatus = document.getElementById(id)
    const result = free(status, id)
    resStatus.innerHTML = result

    // TODO: fetch and update also in database
    await updateResidence("free", takeRight(id, 1), status)

}

async function toggleModal(modalID, residenceDataId = undefined){

    if(residenceDataId){
        const residenceData = persistOwnedResidences[residenceDataId][0].residenceData

        flatSize.value = residenceData.flatSize
        bedRooms.value = residenceData.bedRooms
        bathRooms.value = residenceData.bathRooms
        notes.value = residenceData.notes 
        parking.value = residenceData.parking 
        elevator.value = residenceData.elevator
        buildingAge.value = residenceData.buildingAge
        currentResDetailsId.value = residenceData.id
    }

    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
        
}

getOwnedResidences()
.then( residences => {

    residences.map(r /* {address, residences, residenceData} */=> {

       const row = [ /*html */ `${r.address.city}, ${r.address.street} ${r.address.nr} ${r.residence.floor} ${r.residence.direction}`,
        `<input type="number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="${r.residenceData.rentPrice}" onchange="updateResidence('rentPrice', ${r.residenceData.id}, this.value)">`,
        `<div id="resStatus${r.residenceData.id}">${free(r.residenceData.free, "resStatus"+r.residenceData.id)}</div>`,
        `<button onclick="toggleModal('modal-id', ${r.residenceData.id})" class="bg-transparent hover:bg-orange-700 float-right font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
        Details
      </button>`]

    resDataTable.row.add(row)
    .draw(false);

    });
})