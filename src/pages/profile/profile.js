// TODO: change profile image (FileHandler service) | update Password (Users service)
const profileImg = document.getElementById("profileImg")
const profileName = document.getElementById("profileName")
const passwordBtn = document.getElementById("changePasswordBtn")

profileImg.src = `../../../assets/images/userImages/${userInfo.userImage}`
profileName.textContent = userInfo.userName
passwordBtn.style.display = (userInfo.userAuthType != "google")? "" : "none";

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

async function changePassword() {
    console.log("Changing password...")

    const oldPassword = document.getElementById("oldPassword").value
    const newPassword = document.getElementById("newPassword").value
    const confirmPassword = document.getElementById("confirmPassword").value

    if (oldPassword == "" || newPassword == "" || confirmPassword == "") console.log("please fill all required fields!");
    else if (newPassword != confirmPassword) console.log("Passwords dont match");
    else {
        fetch(apis.users + 'change-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `baer ${token}`
            },
            body: JSON.stringify({ oldPassword: oldPassword, newPassword: newPassword }),
        })
            .then(res => res.json())
            .then(data => {console.log(data); window.location.reload()})
            .catch(err => console.log(err))

    }
}