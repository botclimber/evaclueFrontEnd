const infoSection = document.getElementById("info")
const mapSection = document.getElementById("map")

let map;

const search = async () => {
  const urlParams = new URLSearchParams(window.location.search)

  const sCity = urlParams.get("sCity") || "Braga"
  const sStreet = urlParams.get("sStreet") || ""
  const sNr = urlParams.get("sNr") || ""

  const location = await fetch(`${apis.geoLocation}/search?city=${sCity}&street=${sStreet}&nr=${sNr}&onlyAppr=1`)
  const response = await location.json()

  console.log(response)
  return response

}

const buildStars = async (starAvg) => {
  const yellowStar = `<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>`
  const greyStar = `<svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>`

  var stars = ``

  for(let x = 1; x <= 5; x++){

    stars += (x <= starAvg)? yellowStar : greyStar;
  }

  return stars
}

async function initMap() {

  const location = await search()

  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(location.lat, location.lng),
    zoom: 4,
  });

  const infoWindow = new google.maps.InfoWindow();

  map.addListener("click", (event) => {
    info.innerHTML = avaResidences
  })

  map.addListener("dblclick", (event) => {
    info.innerHTML = newReview
  })

  //const iconBase =
  //  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  
  const icons = {
    /*parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },*/
    info: {
      icon: "../../../assets/images/mapIcons/custom_pin.png",
    }
  };

  const markers = []
  const data = await aggrData()
  
  for (x in data.addrs){

    const position = new google.maps.LatLng(data.addrs[x][0].location.addr.lat || 1, data.addrs[x][0].location.addr.lat) || 1;
    const totalReviews = data.addrs[x].length;

    const sum = data.addrs[x].map(row => row.rev.rating).reduce((result, currentValue) => result + currentValue, 0)
    const ratingAvg = sum / totalReviews;
    
    const type = "info";
    const addrData = data.addrs[x] 

    markers.push({position, totalReviews, ratingAvg, addrData, type})
  }

  console.log(markers)

  // Create markers.
  for (let i = 0; i < markers.length; i++) {

    const marker = new google.maps.Marker({
      position: markers[i].position,
      icon: icons[markers[i].type].icon,
      map: map,
    });

    marker.addListener("click", async event => {
        //info.innerHTML = avaResidences
        infoWindow.setContent(/*html*/`
        <div class="w-full max-w-md bg-white">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-dashed divide-gray-200 dark:divide-gray-400">
            <li class="py-4">
                
<div class="flex items-center mb-2">
${await buildStars(markers[i].ratingAvg)}
<p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">${markers[i].ratingAvg} out of 5</p>
</div>
<p class="text-sm font-medium text-gray-500 ">${markers[i].totalReviews} Reviews</p>
   

            </li>
            <!-- <li class="py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Last Review
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-sm text-gray-900 ">
                        2 min ago
                    </div>
                </div>
            </li> -->
            <li class="py-6">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick = "newReviewForm()">Add Review</button>
                            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick = "claimResidenceForm()">Claim Residence</button>
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
        `)

        infoWindow.open(map, marker)

        // TODO: build function to handle reviews belong to clicked address and display it in the info separator
        info.innerHTML = reviewsSearch + reviews
    })

  }
}

window.initMap = initMap;  