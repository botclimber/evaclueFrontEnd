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

async function fillSrcs() {
    for(let x of srcs){
        x.element.src = x.src
    }
}