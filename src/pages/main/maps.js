// TODO: CODE BELOW MUST BE REVIEWD AND DECOUPLED

const infoSection = document.getElementById("info")
const mapSection = document.getElementById("map")

/*
map.addEventListener("click", (event) => {
    //info.innerHTML = avaResidences
    info.innerHTML = newReview
})

map.addEventListener("dblclick", (event) => {
    //info.innerHTML = reviewsSearch + reviews
    info.innerHTML = claimResidence
})
*/

function showResidenceDetails(){ info.innerHTML = avaResidencesDetails }

function newReviewForm (){ info.innerHTML= newReview }

function claimResidenceForm (){ info.innerHTML= claimResidence }


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-33.91722, 151.23064),
    zoom: 16,
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
  const features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.2263),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91539, 151.2282),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9191, 151.22907),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9179, 151.23463),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.916988, 151.23364),
      type: "info",
    }
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {

    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });

    marker.addListener("click", event => {
        //info.innerHTML = avaResidences
        infoWindow.setContent(`
        <div class="w-full max-w-md bg-white">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-dashed divide-gray-200 dark:divide-gray-400">
            <li class="py-4">
                
<div class="flex items-center mb-2">
<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">4.95 out of 5</p>
</div>
<p class="text-sm font-medium text-gray-500 ">102 Reviews</p>
<div class="flex items-center mt-4">
<a class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
<div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
    <div class="h-5 bg-yellow-300 rounded" style="width: 70%"></div>
</div>
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
</div>
<div class="flex items-center mt-4">
<a class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
<div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
    <div class="h-5 bg-yellow-300 rounded" style="width: 17%"></div>
</div>
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
</div>
<div class="flex items-center mt-4">
<a  class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</a>
<div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
    <div class="h-5 bg-yellow-300 rounded" style="width: 8%"></div>
</div>
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
</div>
<div class="flex items-center mt-4">
<a  class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
<div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
    <div class="h-5 bg-yellow-300 rounded" style="width: 4%"></div>
</div>
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
</div>
<div class="flex items-center mt-4">
<a  class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
<div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
    <div class="h-5 bg-yellow-300 rounded" style="width: 1%"></div>
</div>
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
</div>   

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
        info.innerHTML = reviewsSearch + reviews
    })  
  }
}

window.initMap = initMap;  