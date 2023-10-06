// TODO: set filters

const byCities = document.getElementById("byCities")
const byRentPriceMin = document.getElementById("byRentPriceMin")
const byRentPriceMax = document.getElementById("byRentPriceMax")
const enable = document.getElementById("enable")

async function getFilters(){

    try{
    const response = await (await fetch(`${apis.notification}getFilters`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "authorization": `baer ${token}`
        }
    })).json()

    console.log(filters)   
    byCities.value = response.filters.byCities
    byRentPriceMin.value = response.filters.byRentPriceMin
    byRentPriceMax.value = response.filters.byRentPriceMax
    
    }catch(e){
        console.log(e)
    }
}

async function setFilters(){  
    console.log(enable.checked)

    if(enable.checked){
        const data = {
            byCities: byCities.value, 
            byRentPriceMin: byRentPriceMin.value, 
            byRentPriceMax: byRentPriceMax.value, 
            enable: enable.checked
        }

        fetch(`${apis.notification}setFilters`, {
            "method": "POST",
            headers: {
                "Content-type": "application/json",
                "authorization": `baer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then(async response => {

            if(!response.ok) throw new Error((await response.json()).msg.message);

            console.log(response)
        })
        .catch(e => console.log(e))
    }
}

getFilters()