/**
 * from content.js {avaResidences, reviews}
 * 
 */

const info = document.getElementById("info")
const map = document.getElementById("map")

/**
 * One click serves available residences
 */
map.addEventListener("click", (event) => {
    info.innerHTML = avaResidences
})

map.addEventListener("dblclick", (event) => {
    info.innerHTML = reviews
})




