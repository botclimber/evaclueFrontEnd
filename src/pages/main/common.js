function fromMarker (func, address) {
    if(token === undefined) dialog.info("Login required to perform this action!");
    else{
    console.log(func)
    console.log(address)

    func()

    const city =  document.getElementById("rCity")
    const street = document.getElementById("rStreet")
    const nr = document.getElementById("rNr")

    city.value = address.city; city.disabled = true;
    street.value = address.street; street.disabled = true;
    nr.value = address.nr; nr.disabled = true;

    localStorage.setItem("rFlag", "fromMarker")
    localStorage.setItem("rLat", address.lat)
    localStorage.setItem("rLng", address.lng)
    }
}