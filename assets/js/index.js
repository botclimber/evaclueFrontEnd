/**
 * from content.js {avaResidences, reviews}
 * 
 */

const info = document.getElementById("info")
const map = document.getElementById("map")

map.addEventListener("click", (event) => {
    info.innerHTML = avaResidences
})

map.addEventListener("dblclick", (event) => {
    info.innerHTML = reviewsSearch + reviews
})

function showResidenceDetails(){
    info.innerHTML = avaResidencesDetails
}