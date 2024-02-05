const infoSection = document.getElementById("info")
const mapSection = document.getElementById("map")

let map;

const search = async () => {

  const fromServer = async (sCity, sStreet, sNr) => {
    const location = await fetch(`${apis.geoLocation}/search?city=${sCity}&street=${sStreet}&buildingNr=${sNr}&onlyAppr=1`)
    const response = await location.json()
  
    console.log(response)
    return response
  }

  const urlParams = new URLSearchParams(window.location.search)

  const sCity = urlParams.get("sCity") || ""
  const sStreet = urlParams.get("sStreet") || ""
  const sNr = urlParams.get("sNr") || ""

  if(isEmpty(sCity) && isEmpty(sStreet) && isEmpty(sNr)){
    const location = {lat: localStorage.getItem("rLat"), lng: localStorage.getItem("rLng")}

    if(location.lat && location.lng) return location
    else return await fromServer(sCity, sStreet, sNr)

  }else{
    return await fromServer(sCity, sStreet, sNr)
  }
}

async function initMap() {

  const location = await search()

  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(location.lat, location.lng),
    zoom: 19,
  });

  const infoWindow = new google.maps.InfoWindow();

  map.addListener("dblclick", (event) => {
    const coords = event.latLng.toJSON()
    localStorage.setItem("rLat", coords.lat)
    localStorage.setItem("rLng", coords.lng)
    localStorage.setItem("rFlag", "fromMapClick")
    
    newReviewForm()
  })

  map.addListener("dragend", (_) => {
    const geocoder = new google.maps.Geocoder();

    // Get the current center coordinates
    const center = map.getCenter();
    const coords = {
      lat: center.lat(),
      lng: center.lng(),
    };

    geocoder.geocode({
      location: coords
    }, (results, status) => {
      if(status === 'OK') {
        if(results && results.length > 0) {
            var filtered_array = results.filter(result => result.types.includes("locality")); 
            var addressResult = filtered_array.length ? filtered_array[0]: results[0];

            if(addressResult.address_components) {
                addressResult.address_components.forEach( async (component) => {

                    if(component.types.includes('locality')) {
                      console.log(`Checking for available residences on ${component.long_name} ...`)
                      info.innerHTML = await listAvaResidences(component.long_name)
                    }
                    
                });
            }else console.log("something went wrong when filtering!")
        }else console.log("No result found!")
      }else console.log("didnt worked")
    })
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
  console.log("data")
  console.log(data)
  
  for (let x in data.addrs){
    console.log(data.addrs[x])
    const revs = data.revs[x].filter(row => row.rev.approved)
    console.log(revs)

    const position = new google.maps.LatLng(data.addrs[x].addr.lat || 1, data.addrs[x].addr.lng || 1);
    console.log(`CHEKCING IF POSITION EXISTS ${position}`)
    const totalReviews = revs.length;

    const sum =revs.map(row => row.rev.rating).reduce((result, currentValue) => result + currentValue, 0)
    const ratingAvg = (sum / totalReviews).toFixed(2);
    
    const type = "info";
    const addrData = revs

    if(revs.length > 0)
    markers.push({position, totalReviews, ratingAvg, addrData, type})
  }

  console.log(`markers: `)
  console.log(markers)

  // Create markers.
  for (let i = 0; i < markers.length; i++) {
    console.log(markers[i].addrData)

    const marker = new google.maps.Marker({
      position: markers[i].position,
      icon: icons[markers[i].type].icon,
      map: map,
    });

    marker.addListener("click", async _ => {
        //info.innerHTML = avaResidences
        infoWindow.setContent(/*html*/`
        <div class="w-full max-w-md bg-white">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-dashed divide-gray-200 dark:divide-gray-400">
            <li class="py-4">
                
<div class="flex items-center mb-2">
${buildStars(markers[i].ratingAvg)}
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
                            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick = "fromMarker(newReviewForm, ${serialize(markers[i].addrData[0].location.addr)})">Add Review</button>
                            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onclick = "fromMarker(claimResidenceForm, ${serialize(markers[i].addrData[0].location.addr)})">Claim Residence</button>
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
        `)

        infoWindow.open(map, marker)

        const reviews = await buildHtml(markers[i].addrData) 
        info.innerHTML = reviewsSearch + reviews
    })

  }
}