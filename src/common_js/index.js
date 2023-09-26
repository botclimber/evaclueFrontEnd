const domain = "http://localhost"

const apis = {
  "reviews": `${domain}/reviews/v2/`,
  "geoLocation": `${domain}/geo/v1/`,
  "users": `${domain}/users/v1/`,
  "fileHandler": `${domain}/fileHandler/v1/`,
  "notification": `${domain}/notifications/v1/`,
  "resowners": `${domain}/resowners/v1/`,
  "support": `${domain}/support/v1/` // WARN: not implemented yet!
}

const token = localStorage.getItem("token") || false

const loadingScreen = document.getElementById("eva_loadingScreen")
const loginBtn = document.getElementById("eva_loginBtn")
const profileBtn = document.getElementById("eva_profileBtn")

const pageMode = async () => {
  loginBtn.style.display = (token)? "none" : "";
  profileBtn.style.display = (token)? "" : "none";

  loadingScreen.style.display = "none";
}

/**
 * Common page IDs
 */
const hrefs = [
  {
      "element": document.getElementById("href_logo_navbar"),
      "href":  "../../../index.html"
  },
  {
      "element": document.getElementById("href_logo_footer"),
      "href":  "../../../index.html"
  },
  {
      "element": document.getElementById("href_profile"),
      "href": "../profile/index.html"
  }
]

const srcs = [
  {
      "element": document.getElementById("src_logo_navbar"),
      "src": "../../../assets/images/logo.png"
  },
  {
      "element": document.getElementById("src_logo_footer"),
      "src": "../../../assets/images/logo.png"
  }
]

/** Functions utils */
/**
 * Fills "src" of requested page
 * @param [{element, src}] srcs 
 */
async function fillSrcs(srcs) {
  for(let x of srcs){
      x.element.src = x.src
  }
}

/**
 * Fills "href" of requested page
 * @param [{element, href}] hrefs 
 */
async function fillHrefs(hrefs) {
  for(let x of hrefs){
      x.element.href = x.href
  }
}

/**
 * Stars builder
 * 
 * @param {*} starsNr 
 * @returns 
 */
function buildStars(starsNr){
  const yellowStar = `<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>`
  const greyStar = `<svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>`

  var stars = ``

  for(let x = 1; x <= 5; x++){

    stars += (x <= starsNr)? yellowStar : greyStar;
  }

  return stars
}

function serialize(data){ return JSON.stringify(data).replaceAll('"','\'') }