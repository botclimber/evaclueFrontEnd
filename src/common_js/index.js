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