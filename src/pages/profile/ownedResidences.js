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

const modalResImgs = document.getElementById("modal-owResImgs")

const free = (status, id) => {

    switch(status){
        case 1: return `<input type="checkbox" onclick="updateAvailabity(0,'${id}')" id="enable" lass="mr-2 leading-tight" checked><span class="text-green-500"> Yes</span>`;
        case 0: return `<input type="checkbox" onclick="updateAvailabity(1,'${id}')" id="enable" lass="mr-2 leading-tight"><span class="text-red-500"> No</span>`
    }
}

const owResModal = {
    "details": document.getElementById("owResDetails"),
    "imgs": document.getElementById("owResImgs"),
    "footer": document.getElementById("resFooter"),
    "detailsTab": document.getElementById("owResDetailsTab"),
    "imgsTab": document.getElementById("owResImgsTab")
}

const active = "inline-block p-4 bg-gray-100 rounded-t-lg active dark:bg-gray-800"
const nonActive = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"

async function addNewImg(file, resId){
    console.log(file, resId)
    
    const formData = await inputFilesValidator(file, fileParams.residences.key, fileParams.residences.maxSize, fileParams.residences.maxFiles, fileParams.residences.allowedExtensions)

    if(formData){
        try{

            formData.append("resId", resId)
            const addNewImage = await fetch(`${apis.fileHandler}addResImgs`, {
              method: "POST",
              body: formData
            });

            const fileHandlerData = await addNewImage.json();
            console.log(fileHandlerData)

            if(addNewImage.ok){
                await refreshModal(resId);
            }
            

          }catch(e){
            console.log(e)
            throw e
          }
    }
}

async function removeImg(resId, imgNr){
    if(confirm("Are you sure about removing this image ?")){
        console.log(resId, imgNr)

        const request = await fetch(`${apis.fileHandler}delResFile/${resId}/${imgNr}`, {
            method: "DELETE",
        });

        const response = await request.json()

        console.log(response)
        if(request.ok){
            await refreshModal(resId);
        }
        
    }
}
async function releaseResidence(){}

function owResDetails(){
    
    owResModal.details.style.display = ""
    owResModal.imgs.style.display = "none"
    owResModal.footer.style.display = ""
    owResModal.detailsTab.className = active
    owResModal.imgsTab.className = nonActive
}

function owResImgs(){

    owResModal.details.style.display = "none"
    owResModal.imgs.style.display = ""
    owResModal.footer.style.display = "none"
    owResModal.detailsTab.className = nonActive
    owResModal.imgsTab.className = active
  
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

async function updateAvailabity(status, id){
    const resStatus = document.getElementById(id)
    const result = free(status, id)
    resStatus.innerHTML = result

    // TODO: fetch and update also in database
    await updateResidence("free", takeRight(id, 1), status)

}

async function toggleModal(modalID, residenceDataId = undefined, run = true){
    console.log("Mounting Modal ...")
    console.log(residenceDataId, run)
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
        modalResImgs.innerHTML = ""

        for(let x = 0; x < residenceData.imgs; x++){
            const randomValueToOvercomeCacheIssues = generateString(6)
            
            modalResImgs.innerHTML += /*html */
            `<div id="divImg-${x}" class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                <div class="image-container">
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="../../../assets/images/resImgs/residence-${residenceData.id}/img-${x}.gif?k=${randomValueToOvercomeCacheIssues}"/>
                    <button onclick="removeImg(${residenceData.id}, ${x})" class="delete-button bg-white hover:bg-red-100 text-red-800 p-1 text-sm border border-red-400 rounded shadow">remove</button>
                    </div>
                </div>
            </div>`
        }

        if(residenceData.imgs < fileParams.residences.maxFiles){
            modalResImgs.innerHTML += /*html */
                `<div id="addNewImgSection" class="flex w-1/2 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                    <div class="col-span-full">
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                          <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <input type="file" onchange="addNewImg(this.files, ${residenceData.id})">
                          </label>
                        </div>
                        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 5 files</p>
                      </div>
                    </div>
                  </div>
                    </div>
                </div>`
        }
    }

    if(run){
        document.getElementById(modalID).classList.toggle("hidden");
        document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
        document.getElementById(modalID).classList.toggle("flex");
        document.getElementById(modalID + "-backdrop").classList.toggle("flex");
    }
}

getOwnedResidences()
.then( residences => {

    residences.map(r /* {address, residences, residenceData} */=> {

       const row = [`${r.address.city}, ${r.address.street} ${r.address.nr} ${r.residence.floor} ${r.residence.direction}`,
        `<input type="number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value="${r.residenceData.rentPrice}" onchange="updateResidence('rentPrice', ${r.residenceData.id}, this.value)">`,
        `<div id="resStatus${r.residenceData.id}">${free(r.residenceData.free, "resStatus"+r.residenceData.id)}</div>`,
        `<button onclick="toggleModal('modal-id', ${r.residenceData.id})" class="bg-transparent hover:bg-orange-700 float-right font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
        Details
      </button>`]

    resDataTable.row.add(row)
    .draw(false);

    });
})

async function refreshModal(id) {
    await getOwnedResidences();
    await toggleModal("modal-id", id, false);

}