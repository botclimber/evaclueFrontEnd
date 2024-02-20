const msgToOwner = document.getElementById("msgToOwner");

function toggleModalContactResOwner(modalID) {
    toggleModalAvaResidences("avaResidenceDetails")

    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

async function sendMessageToOwner() {
    if ((token === undefined || token == "undefined")) dialog.info("Login required to perform this action!");
    else {
        if (!isEmpty(msgOwnerId.value) && !isEmpty(msgToOwner.value)) {
            if (confirm("In order to avoid spam you are only allowed to send one message, be sure you have written all you expect!")) {

                const data = {
                    resOwnerId: parseInt(msgOwnerId.value),
                    message: msgToOwner.value
                }

                const response = await fetch(`${apis.notification}emToOwner`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "authorization": `baer ${token}`
                    },
                    body: JSON.stringify(data)
                })
                const json = await response.json()

                if (response.ok) dialog.success("Message sent! thank you.")//window.location.reload();
                else {
                    console.log(json)
                    dialog.err(json.msg)
                }

            }
        } else dialog.info("Please write something...")
    }
}