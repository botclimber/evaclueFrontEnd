var persistAvaResidences // global var to persist fetched data, so we dont need to always get it from server

const msgOwnerId = document.getElementById("msgOwnerId");

const bedroomDetails = document.getElementById("bedroomDetails")
const bathroomDetails = document.getElementById("bathroomDetails")
const resDetails = document.getElementById("resDetails")
const locationDetails = document.getElementById("locationDetails")
const rentPriceDetails = document.getElementById("rentPriceDetails")
const noteDetails = document.getElementById("noteDetails")
const flatSizeDetails = document.getElementById("flatSizeDetails")
const buildingAgeDetails =document.getElementById("buildingAgeDetails")
const imgDetails = document.getElementById("imgDetails")

const singResHTML = (r, revsPerResidence) => {

  const totalRevs = revsPerResidence.length
  const thumb = r.resData.imgs ? `../../../assets/images/resImgs/residence-${r.resData.id}/img-0.gif` : "";

  return /*html*/`
  <div class="m-4 text-sm relative mx-auto w-full">
                  <a href="#" onclick = "showResidenceDetails(${r.resData.id})" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    <div class="rounded-lg bg-white p-4 shadow">
                      <div class="relative flex h-24 justify-center overflow-hidden rounded-lg">
                        <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                          <div class="absolute inset-0 bg-black bg-opacity-80">
                            <img src="${thumb}" alt="" />
                          </div>
                        </div>
              
                        <div class="absolute bottom-0 left-5 mb-3 flex">
                          <p class="flex items-center font-medium text-white shadow-sm">
                            <i class="fa fa-camera mr-2 text-xl text-white"></i>
                            ${r.resData.imgs}
                          </p>
                        </div>
              
                        <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                      </div>
              
                      <div class="relative mt-1 grid grid-cols-2">
                        <h2 class="text-gray-800" title="New York">${r.addr.city}, ${r.addr.street} ${r.addr.nr}</h2>
              
                        <p class="font-semibold absolute right-0">
                          <span class="text-sm uppercase"> EUR </span>
                          <span class="text-xl">${r.resData.rentPrice}</span>/Month
                        </p>
                      </div>
                      <div class="mt-2">
                        <p class="line-clamp-1 mt-2 text-gray-800">${takeLeft(r.resData.notes, 40)} ...</p>
                      </div>

                      <div class="justify-center">
                        <div class="mt-2 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                          <p class="flex items-center font-medium text-gray-800">
                            <i class="fa fa-comment mr-2 text-blue-900"></i>
                            ${totalRevs}
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <div class="h-6 w-6 rounded-full bg-cover bg-center bg-[url('../../../assets/images/userImages/${r.resData.userImage}')] md:h-8 md:w-8"></div>
                            <span class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                          </div>
              
                          <p class="line-clamp-1 ml-2 text-gray-800">${r.resData.userName}</p>
                        </div>
              
                      </div>
                    </div>
                  </a>
                </div>
  
  `
}

async function showResidenceDetails(resDataId){ 
  var html = ""

  const input = persistAvaResidences[resDataId][0]
  console.log("input")
  console.log(input)

  revsPerResidence = await revsPerResidenceComp(input.res)

  console.log("revsPerResidence")
  console.log(revsPerResidence)

  html += singResHTML(input, revsPerResidence)
  html += await buildHtml(revsPerResidence)
  
  toggleModalAvaResidences("avaResidenceDetails", input)
  info.innerHTML = html
}

async function buildResidencesHtml(avResidences){


  var html = ""
  for(let r of avResidences){
    const revsPerResidence = await revsPerResidenceComp(r.res)
    
    html += singResHTML(r, revsPerResidence)
  }
  
  return html
}

async function listAvaResidences(city){
  console.log(`Getting available residences for ${city}`)

  try{
    const response = await fetch(`${apis.resowners}/getByCity?city=${city}`)
    const data = await response.json()

    console.log("Response from listAvaResidences")
    console.log(data)
    if(response.ok){
      persistAvaResidences = groupBy(data, r => r.resData.id)

      console.log("persistAvaResidences")
      console.log(persistAvaResidences)

      const bHtml = await buildResidencesHtml(data)

      return bHtml
    }else console.log(data)

  }catch(e) {
    console.log(e)
  }

  return "No available residences found for this location."
}

function toggleModalAvaResidences(modalID, data = undefined){

  if(data){

    bedroomDetails.innerHTML = data.resData.bedRooms
    bathroomDetails.innerHTML = data.resData.bathRooms
    resDetails.innerHTML = `${data.res.floor} ${data.res.direction}`
    locationDetails.innerHTML = `${data.addr.city}, ${data.addr.street} ${data.addr.nr}`
    rentPriceDetails.innerHTML = data.resData.rentPrice
    noteDetails.innerHTML = data.resData.notes
    flatSizeDetails.innerHTML = data.resData.flatSize
    buildingAgeDetails.innerHTML = data.resData.buildingAge
    msgOwnerId.value = data.resData.userId

    if(data.resData.imgs){
      imgDetails.innerHTML = /*html*/
      `<div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
        <img style="cursor:pointer" onclick="nextImg(${data.resData.id}, 0, ${data.resData.imgs})" src="../../../assets/images/resImgs/residence-${data.resData.id}/img-0.gif" alt="" />
      </div>

      <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
    </div>
    `
    }
      
  }

  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");
      
}

function nextImg(id, currentImg, totalImgs){

  const next = (currentImg < (totalImgs - 1))? parseInt(currentImg) + 1 : 0;

  imgDetails.innerHTML = /*html*/
      `<div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
        <img style="cursor:pointer" onclick="nextImg(${id}, ${next}, ${totalImgs})" src="../../../assets/images/resImgs/residence-${id}/img-${next}.gif" alt="" />
      </div>

      <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
    </div>
    `
}