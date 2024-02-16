var currentSelectedReviews;

function fromMarker(func, address) {
    if (token === undefined) dialog.info("Login required to perform this action!");
    else {
        console.log(func)
        console.log(address)

        func()

        const city = document.getElementById("rCity")
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

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // JavaScript function to trigger the shake animation
  function shakeInfoDiv() {
    var infoDiv = document.getElementById('info');
    
    // Add the "shaking" class to trigger the shake animation
    infoDiv.classList.add('shaking');
    
    // Remove the "shaking" class after the animation ends
    setTimeout(function() {
      infoDiv.classList.remove('shaking');
    }, 500); // Adjust the timeout to match the animation duration
  }