//const appendReview = ???
const newReview = 
`
<form>
                    <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">New Review</h2>
                            <p class="mt-1 text-sm leading-6 text-amber-600">This information will be displayed publicly so be careful what you share.</p>

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                    <div class="mt-2">
                                      <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                  </div>
                          
                                  <div class="sm:col-span-2">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Street</label>
                                    <div class="mt-2">
                                      <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                  </div>
                          
                                  <div class="sm:col-span-2">
                                    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Residence Number</label>
                                    <div class="mt-2">
                                      <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                  </div>

                              <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Floor</label>
                                <div class="mt-2">
                                  <input type="text" name="first-name" id="first-name" placeholder=" (Optional)" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </div>
                              </div>
                      
                              <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Direction</label>
                                <div class="mt-2">
                                  <input type="text" name="last-name" id="last-name" placeholder=" (Optional) " autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </div>
                              </div>
                      
                              <div class="sm:col-span-full">
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Rating</label>
                                <div class="mt-2">
                                    <ul class="flex items-center justify-center">
                                        <li class="">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="mr-1 h-5 w-5 text-primary dark:text-primary-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                              d="M15.877 6.124l-3.877 3.876-3.877-3.876 1.124-1.124 2.753 2.753 2.754-2.753 1.123 1.124zm-3.877-4.124c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.001 14c-2.332 0-4.145 1.636-5.093 2.797l.471.58c1.286-.819 2.732-1.308 4.622-1.308s3.336.489 4.622 1.308l.471-.58c-.948-1.161-2.761-2.797-5.093-2.797zm-3.501-5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="mr-1 h-6 w-6 text-primary dark:text-primary-400">
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="mr-1 h-5 w-5 text-primary dark:text-primary-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-7.5-9c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="mr-1 h-6 w-6 text-primary dark:text-primary-400">
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                          </svg>
                                        </li>
                                        <li>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="mr-1 h-5 w-5 text-primary dark:text-primary-400"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c3.691 0 6.915 2.016 8.647 5h-17.294c1.732-2.984 4.956-5 8.647-5zm0 20c-5.514 0-10-4.486-10-10 0-1.045.163-2.052.461-3h1.859c.606 1.518 1.929 3 3.986 3 2.477 0 2.153-2.31 3.694-2.31s1.218 2.31 3.695 2.31c2.055 0 3.379-1.482 3.984-3h1.86c.298.948.461 1.955.461 3 0 5.514-4.486 10-10 10zm5.508-8.059l.492.493c-1.127 1.72-3.199 3.566-5.999 3.566-2.801 0-4.874-1.846-6.001-3.566l.492-.493c1.513 1.195 3.174 1.931 5.509 1.931 2.333 0 3.994-.736 5.507-1.931z" />
                                          </svg>
                                        </li>
                                      </ul>
                                </div>
                              </div>

                              <div class="col-span-full">
                                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                                <div class="mt-2">
                                  <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                              </div>

                              <div class="col-span-full">
                                <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Images (optional)</label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                  <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                      <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                      <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple>
                                      </label>
                                      <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                  </div>
                                </div>
                              </div>

                              <div class="col-span-full">
                              <fieldset>
                                <div class="mt-6 space-y-6">
                                  <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                      <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
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
                      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
                    </div>
                  </form>

`