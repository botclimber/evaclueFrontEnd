
//TODO: if no token when clicking to add new review inform user to login first
function newReviewForm (){ 
  info.innerHTML = newReview 

  const st1 = document.getElementById("str1")
  const st2 = document.getElementById("str2")
  const st3 = document.getElementById("str3")
  const st4 = document.getElementById("str4")
  const st5 = document.getElementById("str5")

  const ratingValue = document.getElementById("rRating")

  const rAnon = document.getElementById("rAnon")
  rAnon.addEventListener('change', (event) => {
  
    switch(parseInt(rAnon.value)){
      case 0: rAnon.value = 1; break;
      case 1: rAnon.value = 0; break;
    }
  
  })

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
  console.log("Submitting review ...")
  
  const mulFiles = document.getElementById("reviewImgs").files
  const formData = await inputFilesValidator(mulFiles, fileParams.reviews.key, fileParams.reviews.maxSize, fileParams.reviews.maxFiles, fileParams.reviews.allowedExtensions)

  if( (mulFiles.length == 0) || (mulFiles.length > 0 && formData)) {
    const dataToSubmit = {
      type: "createReview",
      flag: localStorage.getItem("rFlag") || undefined,
      lat : parseFloat(localStorage.getItem("rLat")) || 0,
      lng : parseFloat(localStorage.getItem("rLng")) || 0,
      city: document.getElementById("rCity").value || undefined,
      street: document.getElementById("rStreet").value || undefined,
      nr : document.getElementById("rNr").value || undefined,
      floor : document.getElementById("rFloor").value || "",
      direction : document.getElementById("rDirection").value || "",
      rating : document.getElementById("rRating").value || 0,
      review : document.getElementById("rReview").value || undefined,
      anonymous : parseInt(document.getElementById("rAnon").value) || 0
    }

    console.log(dataToSubmit)
    const response = await fetch(`${apis.reviews}create`,{
      method: 'POST',
      body: JSON.stringify(dataToSubmit),
      headers: {
        'authorization':'baer '+token,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })

    const data = await response.json();

    console.log(response)

    
      if(response.ok && formData){
          console.log(data)

          formData.append("reviewId", data.revId)

          try{
            const fileHandlerResponse = await fetch(`${apis.fileHandler}addReviewImgs`, {
              method: "POST",
              body: formData
            });
            const fileHandlerData = await fileHandlerResponse.json();

            console.log(fileHandlerData)
            //window.location.reload()

          }catch(e){
            console.log(e)
          }

      }else{
        console.log(data.msg)
      }
  }
}

const newReview = 
/*html*/`
<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="mr-2">
        <a href="#" onclick="newReviewForm()" class="inline-block p-4 bg-gray-100 rounded-t-lg active dark:bg-gray-800">Review</a>
    </li>
    <li class="mr-2">
        <a href="#" onclick="claimResidenceForm()" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Claim Residence</a>
    </li>
</ul>

<form class="mt-5">
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
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Number</label>
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
                  <input id="rAnon" name="rAnon" type="checkbox" value="0"
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
    <button type="button" onclick="submitReview()"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
  </div>
</form>
`