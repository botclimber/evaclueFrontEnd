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

var token = undefined
var userInfo = {
  userId: undefined,
  userEmail: undefined,
  userName: undefined,
  userImage: undefined,
  userAuthType: undefined
}

async function googleAuth() {
  console.log("running google atuh post computation assignment")

  const params = new URLSearchParams(window.location.hash.slice(1));
  const idToken = params.get('access_token') || undefined;

  if (idToken !== undefined && (token === undefined || token == "undefined")) {
    console.log("googleAuth: creating local token variable");

    try {
      const response = await fetch(`${apis.users}/googleAuth`, {
        method: 'POST',
        body: JSON.stringify({ access_token: idToken }),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      const data = await response.json()
      console.log(data.accessToken)
      await getProfile(data.accessToken)
      localStorage.setItem("token", data.accessToken)

    } catch (e) {
      console.log(e)
    }
  } else console.log("googleAuth: Nothing to be assigned!");
}

async function setToken() {
  console.log("running native application atuh post computation assignment")

  const urlParams = new URLSearchParams(window.location.search);
  const tk = urlParams.get("token") || undefined;

  if (tk !== undefined && (token === undefined || token == "undefined")) { console.log("setToken: creating local token variable"); await getProfile(tk); localStorage.setItem("token", tk); }
  else console.log("setToken: Nothing to be assigned!");
}

function setGlobalVars() {

  token = localStorage.getItem("token") || undefined

  userInfo.userId = localStorage.getItem("userId") || undefined
  userInfo.userEmail = localStorage.getItem("userEmail") || undefined
  userInfo.userName = localStorage.getItem("userName") || undefined
  userInfo.userImage = localStorage.getItem("userImage") || undefined
  userInfo.userAuthType = localStorage.getItem("userAuthType") || undefined
}

async function getProfile(freshToken) {

  console.log("Getting user profile information from server ...")

  try {
    const res = await fetch(apis.users + '/profile', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'authorization': `baer ${freshToken}`,
      },

    })

    const data = await res.json()

    if(data.id != undefined){
      localStorage.setItem("userId", data.id)
      localStorage.setItem("userEmail", data.email)
      localStorage.setItem("userName", `${data.firstName} ${data.lastName}`)
      localStorage.setItem("userImage", data.image)
      localStorage.setItem("userAuthType", data.authType)
    }

  } catch (e) {
    console.log(e)

  }
}

const loadingScreen = document.getElementById("eva_loadingScreen")
const loginBtn = document.getElementById("eva_loginBtn")
const profileBtn = document.getElementById("eva_profileBtn")
const userMenuImg = document.getElementById("userMenuImg")
const userMenuName = document.getElementById("userMenuName")

const assignTokenValue = async () => {
  console.log("Assign values to global variables ...")
  await googleAuth()
  await setToken()

  setGlobalVars()

}

assignTokenValue()

const pageMode = async () => {
  if ((token === undefined || token == "undefined")) await assignTokenValue();

  if ((token !== undefined && token != "undefined")) {
    console.log(userInfo)

    userMenuName.textContent = userInfo.userName
    userMenuImg.src = `${userMenuImg.src}${userInfo.userImage}`

    loginBtn.style.display = "none";
    profileBtn.style.display = "";

  } else {
    localStorage.clear();

    loginBtn.style.display = "";
    profileBtn.style.display = "none";

  }

  loadingScreen.style.display = "none";
}

const fileParams = {
  "reviews": {
    "key": "reviewImgs",
    "maxSize": 5e6,
    "maxFiles": 3,
    "allowedExtensions": ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  },
  "residences": {
    "key": "resImgs",
    "maxSize": 5e6,
    "maxFiles": 5,
    "allowedExtensions": ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  },
  "profileImg":{
    "key": "profileImg",
    "maxSize": 5e6,
    "maxFiles": 1,
    "allowedExtensions": ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  }
}

/**
 * Common page IDs
 */
const hrefs = [
  {
    "element": document.getElementById("href_logo_navbar"),
    "href": domain
  },
  {
    "element": document.getElementById("href_logo_footer"),
    "href": domain
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
  for (let x of srcs) {
    x.element.src = x.src
  }
}

/**
 * Fills "href" of requested page
 * @param [{element, href}] hrefs 
 */
async function fillHrefs(hrefs) {
  for (let x of hrefs) {
    x.element.href = x.href
  }
}

/**
 * Stars builder
 * 
 * @param {*} starsNr 
 * @returns 
 */
function buildStars(starsNr) {
  const yellowStar = `<svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>`
  const greyStar = `<svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>`

  var stars = ``

  for (let x = 1; x <= 5; x++) {

    stars += (x <= starsNr) ? yellowStar : greyStar;
  }

  return stars
}

function serialize(data) { return JSON.stringify(data).replaceAll('"', '\'') }

async function inputFilesValidator(files, objectKey, rImgMaxSize, rImgMaxFiles, allowedExtensions) {
  const filesFormData = new FormData()

  for (const file of files) {
    console.log(file)
    if (allowedExtensions.includes(file.type)) filesFormData.append(objectKey, file)
    else dialog.err(`file: ${file.name} contains not supported extension`)
  }

  const filesSize = filesFormData.getAll(objectKey).reduce((total, value) => total + value.size, 0)

  if (filesFormData.getAll(objectKey).length > rImgMaxFiles) { dialog.err(`Max files exceeded, please submit at maximum ${rImgMaxFiles} images`); return false }
  if (filesSize > rImgMaxSize) { dialog.err(`Files are too large (${filesSize} bytes). Max allowed is (${rImgMaxSize} bytes)`); return false; }

  if (filesFormData.getAll(objectKey).length === 0) return false;
  return filesFormData;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function logout() {
  window.localStorage.clear()
  window.location.href = domain
}

function login() {
  window.location.href = `${domain}/login/user/login`
}