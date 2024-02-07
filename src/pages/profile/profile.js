// TODO: change profile image (FileHandler service) | update Password (Users service)
const profileImg = document.getElementById("profileImg")
const profileName = document.getElementById("profileName")

profileImg.src = `../../../assets/images/userImages/${userInfo.userImage}`
profileName.textContent = userInfo.userName

async function changeProfileImg() {
    console.log("Changing user profile img ...")
    const file = document.getElementById("profileImgInput").files

    const formData = await inputFilesValidator(file, fileParams.profileImg.key, fileParams.profileImg.maxSize, fileParams.profileImg.maxFiles, fileParams.profileImg.allowedExtensions)

    if ((file.length > 0 && formData)) {
        formData.append("userId", userInfo.userId)

        try {
            const fileHandlerResponse = await fetch(`${apis.fileHandler}changeUserProfileImg`, {
                method: "POST",
                body: formData
            });
            const fileHandlerData = await fileHandlerResponse.json();
            localStorage.setItem("userImage", fileHandlerData.fileName)

            console.log(fileHandlerData)

        } catch (e) {
            console.log(e)
        }

        window.location.reload()
    }
}
