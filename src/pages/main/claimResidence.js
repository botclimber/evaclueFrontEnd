//TODO: if no token when clicking to claim residence inform user to login first

const pFileKey = "proofDocFiles"
const allowedDocExtensions = ["application/pdf"]
const maxFiles = 1
const fileMaxSize = 5e6 // bytes

function claimResidenceForm (){ info.innerHTML = claimResidence }

async function submitClaim() {
  var inputValidator = true
  console.log("Claim residence ...")

  const city = document.getElementById("rCity").value
  const street = document.getElementById("rStreet").value
  const nr = document.getElementById("rNr").value

  if (!city || city.trim() === ''){ dialog.err("City field is required!"); inputValidator = false; }
  if (!street || street.trim() === ''){ dialog.err("Street field is required!"); inputValidator = false; }
  if (!nr || nr.trim() === ''){ dialog.err("Number field is required!"); inputValidator = false; }
  
  const resImgs = document.getElementById(fileParams.residences.key).files
  const pFiles = document.getElementById(pFileKey).files

  const imgsFormData = await inputFilesValidator(resImgs, fileParams.residences.key, fileParams.residences.maxSize, fileParams.residences.maxFiles, fileParams.residences.allowedExtensions)
  const docFormData = await inputFilesValidator(pFiles, pFileKey, fileMaxSize, maxFiles, allowedDocExtensions)
  console.log(docFormData)

  if( inputValidator && ((resImgs.length == 0) || (resImgs.length > 0 && imgsFormData))) {
    if(docFormData){

    const dataToSubmit = {
      flag: localStorage.getItem("rFlag") || undefined,
      lat : parseFloat(localStorage.getItem("rLat")) || 0,
      lng : parseFloat(localStorage.getItem("rLng")) || 0,
      city: city || undefined,
      street: street || undefined,
      nr : nr || undefined,
      floor : document.getElementById("rFloor").value || "",
      direction : document.getElementById("rDirection").value || "",
    }

    console.log(dataToSubmit)
    const response = await fetch(`${apis.resowners}create`,{
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
    console.log(data)
    
      if(response.ok){

        const submitFiles = async (paramFormData, endpoint) => { 
          console.log(`Making request to ${endpoint} endpoint ...`)
          try{
            if(!paramFormData) {console.log(`no request made to ${endpoint} because of empty formData`); return;}

            paramFormData.append("resId", data.claimId)
            const fileHandlerResponse = await fetch(`${apis.fileHandler}${endpoint}`, {
              method: "POST",
              body: paramFormData
            });

            const fileHandlerData = await fileHandlerResponse.json();
            console.log(fileHandlerData)
            dialog.success(fileHandlerData.msg)

          }catch(e){
            console.log(e)
            dialog.err(e)
            throw e
          }
        }

        Promise.all([submitFiles(imgsFormData, "addResImgs"), submitFiles(docFormData, "addResDoc")])
        .then( res => {
          console.log(res);
          dialog.success(data.msg);
          //window.location.reload()
        })
        .catch(err => {console.log(err); dialog.err(err.msg); })

      }else{
        console.log(data.msg);
        dialog.err(data.msg);
      }
  }else {console.log("Please ensure you attach a documentation to proof ownership!"); dialog.err("Please ensure you attach a documentation to proof ownership!")}
}

}

const claimResidence = 
/*html*/`
<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="mr-2">
        <a href="#" onclick="newReviewForm()" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Review</a>
    </li>
    <li class="mr-2">
        <a href="#" onclick="claimResidenceForm()" class="inline-block p-4 bg-gray-100 rounded-t-lg active dark:bg-gray-800">Claim Residence</a>
    </li>
</ul>

<form class="mt-5">
  <div class="space-y-12">
    <div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-2 sm:col-start-1">
          <label class="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div class="mt-2">
            <input type="text" name="city" id="rCity"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium leading-6 text-gray-900">Street</label>
          <div class="mt-2">
            <input type="text" name="region" id="rStreet"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-medium leading-6 text-gray-900">Number</label>
          <div class="mt-2">
            <input type="text" name="postal-code" id="rNr"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label class="block text-sm font-medium leading-6 text-gray-900">Floor</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="rFloor" placeholder=" (Optional)" 
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label class="block text-sm font-medium leading-6 text-gray-900">Direction</label>
          <div class="mt-2">
            <input type="text" name="last-name" id="rDirection" placeholder=" (Optional)" 
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-full">
          <label class="block text-sm font-medium leading-6 text-gray-900">Proof of Ownership</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <input type="file" id="proofDocFiles">
                </label>
              </div>
              <p class="text-xs leading-5 text-gray-600">.pdf up to 1 file</p>
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label class="block text-sm font-medium leading-6 text-gray-900">Images (optional)</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <input type="file" id="resImgs" multiple>
                </label>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 5 files</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end">
    <button type="button" onclick="submitClaim()"
    class="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700">Claim</button>
  </div>
</form>
`