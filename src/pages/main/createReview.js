
function newReviewForm (){ 
  info.innerHTML= newReview 

  const st1 = document.getElementById("str1")
  const st2 = document.getElementById("str2")
  const st3 = document.getElementById("str3")
  const st4 = document.getElementById("str4")
  const st5 = document.getElementById("str5")

  const ratingValue = document.getElementById("rRating")

  st1.addEventListener('click', (event) => {
    ratingValue.value = 1
    starStatus({starsToCheck: [st1], starsToUncheck: [st2,st3,st4,st5]})
  })

  st2.addEventListener('click', (event) => {
    ratingValue.value = 2
    starStatus({starsToCheck: [st1, st2], starsToUncheck: [st3,st4,st5]})
  })
  
  st3.addEventListener('click', (event) => {
    ratingValue.value = 3
    starStatus({starsToCheck: [st1,st2,st3], starsToUncheck: [st4,st5]})
  })

  st4.addEventListener('click', (event) => {
    ratingValue.value = 4
    starStatus({starsToCheck: [st1,st2,st3,st4], starsToUncheck: [st5]})
  })

  st5.addEventListener('click', (event) => {
    ratingValue.value = 5
    starStatus({starsToCheck: [st1,st2,st3,st4,st5], starsToUncheck: []})
  })

  // obj = {starsToCheck: [], starsToUncheck: []}
  function starStatus(v){

    for(let element of v.starsToCheck) element.classList.add("starCheck");
    for(let element of v.starsToUncheck) element.classList.remove("starCheck");
    
  }
}

async function submitReview(){

  const dataToSubmit = {
    type: "createReview",
    flag: document.getElementById("rFlag").value || undefined,
    lat : document.getElementById("rLat").value || 0,
    lng : document.getElementById("rLng").value || 0,
    city: document.getElementById("rCity").value || undefined,
    street: document.getElementById("rStreet").value || undefined,
    nr : document.getElementById("rNr").value || undefined,
    nrFloor : document.getElementById("rFloor").value || "",
    nrSide : document.getElementById("rDirection").value || "",
    rating : document.getElementById("rRating").value || 0,
    review : document.getElementById("rReview").value || undefined,
    anonymous : parseInt(document.getElementById("rAnon").value) || 0
  }

  await fetch(`${apis.reviews}/create`,{
    method: 'POST',
    body: JSON.stringify(dataToSubmit),
    headers: {
      'authorization':'baer '+token,
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  .then(res => res.json())
  .then(async (response) => {
    console.log(response)

    const mulFiles = document.getElementById("reviewImgs").files
    const dataWithImgs = new FormData()

    for(const file of mulFiles){ dataWithImgs.append("reviewImgs", file) }
    dataWithImgs.append("reviewId", response.revId)

    try{
      const result = await fetch(`${apis.fileHandler}/addReviewImgs`, {
        method: "POST",
        body: dataWithImgs
      });

      console.log(result)
      // TODO: reload maps

    }catch(e){
      console.log(e)
    }
  })
  
}

const newReview = 
/*html*/`
<form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">New Review</h2>
      <p class="mt-1 text-sm leading-6 text-amber-600">This information will be displayed publicly so be careful what
        you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div class="mt-2">
            <input type="text" name="city" id="rCity" autocomplete="address-level2"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Street</label>
          <div class="mt-2">
            <input type="text" name="region" id="rStreet" autocomplete="address-level1"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Residence Number</label>
          <div class="mt-2">
            <input type="text" name="postal-code" id="rNr" autocomplete="postal-code"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Floor</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="rFloor" placeholder=" (Optional)" autocomplete="given-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Direction</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="rDirection" placeholder=" (Optional) " autocomplete="family-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-full">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Rating</label>
          <div class="mt-2 center-content">
            <span class="fa fa-star" id = "str1"></span>
            <span class="fa fa-star" id = "str2"></span>
            <span class="fa fa-star" id = "str3"></span>
            <span class="fa fa-star" id = "str4"></span>
            <span class="fa fa-star" id = "str5"></span>
            <input type="hidden" id="rRating" value="0">
          </div>
        </div>

        <div class="col-span-full">
          <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Review</label>
          <div class="mt-2">
            <textarea id="rReview" name="about" rows="3"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write something about your staying.</p>
        </div>

        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Images (optional)</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <input type="file" id="reviewImgs" multiple>
                </label>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 3 files</p>
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <fieldset>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="rAnon" name="rAnon" type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Anonymous</label>
                  <p class="text-gray-500">in case you're shy person</p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
  <input type="hidden" id="rLat" value="0">
  <input type="hidden" id="rLng" value="0">
  <input type="hidden" id="rFlag" value="">
    <button type="button" onclick="submitReview()"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
  </div>
</form>

`