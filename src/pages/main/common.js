function fromMarker (func, address) {
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

async function inputFilesValidator(files, objectKey, rImgMaxSize, rImgMaxFiles, allowedExtensions){
    const imgsFormData = new FormData()

    for(const file of files){ 
        console.log(file)
        if(allowedExtensions.includes(file.type)) imgsFormData.append(objectKey, file) 
        else console.log(`file: ${file.name} contains not supported extension`)
    }

    const filesSize = imgsFormData.getAll(objectKey).reduce( (total, value) => total + value.size ,0)

    if(imgsFormData.getAll(objectKey).length > rImgMaxFiles){ console.log(`Max files exceeded, please submit at maximum ${rImgMaxFiles} images`); return false}
    if(filesSize > rImgMaxSize){ console.log(`Files are too large (${filesSize} bytes). Max allowed is (${rImgMaxSize} bytes)`); return false;}
    

    return imgsFormData
}