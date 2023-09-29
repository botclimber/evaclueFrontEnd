function showResidenceDetails(){ info.innerHTML = avaResidencesDetails }

const avaResidences = /*html */`
<div class="m-4 text-sm relative mx-auto w-full">
                    <a href="#" onclick = "showResidenceDetails()" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <div class="rounded-lg bg-white p-4 shadow">
                        <div class="relative flex h-24 justify-center overflow-hidden rounded-lg">
                          <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <div class="absolute inset-0 bg-black bg-opacity-80">
                              <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" />
                            </div>
                          </div>
                
                          <div class="absolute bottom-0 left-5 mb-3 flex">
                            <p class="flex items-center font-medium text-white shadow-sm">
                              <i class="fa fa-camera mr-2 text-xl text-white"></i>
                              8
                            </p>
                          </div>
                
                          <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                          <span class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i class="fa fa-star"></i> </span>
                        </div>
                
                        <div class="relative mt-1 grid grid-cols-2">
                          <h2 class="text-gray-800" title="New York">Braga, Fradelos, Rua do Louseiro, 162</h2>
                
                          <p class="font-semibold absolute right-0">
                            <span class="text-sm uppercase"> EUR </span>
                            <span class="text-xl">480</span>/Month
                          </p>
                        </div>
                        <div class="mt-2">
                          <p class="line-clamp-1 mt-2 text-gray-800">6 bedrooms Architect designed Imported fixtures and fittings Full basement Top of the ...</p>
                        </div>

                        <div class="justify-center">
                          <div class="mt-2 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                            <p class="flex items-center font-medium text-gray-800">
                              <i class="fa fa-comment mr-2 text-blue-900"></i>
                              47
                            </p>
                          </div>
                        </div>

                        <div class="mt-2 grid grid-cols-2">
                          <div class="flex items-center">
                            <div class="relative">
                              <div class="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                              <span class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                            </div>
                
                            <p class="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
                          </div>
                
                          <div class="flex justify-end">
                            <button><i class="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                            <button><i class="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="m-4 text-sm relative mx-auto w-full">
                    <a href="#" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <div class="rounded-lg bg-white p-4 shadow">
                        <div class="relative flex h-24 justify-center overflow-hidden rounded-lg">
                          <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <div class="absolute inset-0 bg-black bg-opacity-80">
                              <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" />
                            </div>
                          </div>
                
                          <div class="absolute bottom-0 left-5 mb-3 flex">
                            <p class="flex items-center font-medium text-white shadow-sm">
                              <i class="fa fa-camera mr-2 text-xl text-white"></i>
                              8
                            </p>
                          </div>
                
                          <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                          <span class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i class="fa fa-star"></i> </span>
                        </div>
                
                        <div class="relative mt-1 grid grid-cols-2">
                          <h2 class="text-gray-800" title="New York">Braga, Fradelos, Rua do Louseiro, 162</h2>
                
                          <p class="font-semibold absolute right-0">
                            <span class="text-sm uppercase"> EUR </span>
                            <span class="text-xl">480</span>/Month
                          </p>
                        </div>
                        <div class="mt-2">
                          <p class="line-clamp-1 mt-2 text-gray-800">6 bedrooms Architect designed Imported fixtures and fittings Full basement Top of the ...</p>
                        </div>

                        <div class="justify-center">
                          <div class="mt-2 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                            <p class="flex items-center font-medium text-gray-800">
                              <i class="fa fa-comment mr-2 text-blue-900"></i>
                              47
                            </p>
                          </div>
                        </div>

                        <div class="mt-2 grid grid-cols-2">
                          <div class="flex items-center">
                            <div class="relative">
                              <div class="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                              <span class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                            </div>
                
                            <p class="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
                          </div>
                
                          <div class="flex justify-end">
                            <button><i class="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                            <button><i class="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="m-4 text-sm relative mx-auto w-full">
                    <a href="#" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <div class="rounded-lg bg-white p-4 shadow">
                        <div class="relative flex h-24 justify-center overflow-hidden rounded-lg">
                          <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <div class="absolute inset-0 bg-black bg-opacity-80">
                              <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" />
                            </div>
                          </div>
                
                          <div class="absolute bottom-0 left-5 mb-3 flex">
                            <p class="flex items-center font-medium text-white shadow-sm">
                              <i class="fa fa-camera mr-2 text-xl text-white"></i>
                              8
                            </p>
                          </div>
                
                          <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                          <span class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i class="fa fa-star"></i> </span>
                        </div>
                
                        <div class="relative mt-1 grid grid-cols-2">
                          <h2 class="text-gray-800" title="New York">Braga, Fradelos, Rua do Louseiro, 162</h2>
                
                          <p class="font-semibold absolute right-0">
                            <span class="text-sm uppercase"> EUR </span>
                            <span class="text-xl">480</span>/Month
                          </p>
                        </div>
                        <div class="mt-2">
                          <p class="line-clamp-1 mt-2 text-gray-800">6 bedrooms Architect designed Imported fixtures and fittings Full basement Top of the ...</p>
                        </div>

                        <div class="justify-center">
                          <div class="mt-2 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                            <p class="flex items-center font-medium text-gray-800">
                              <i class="fa fa-comment mr-2 text-blue-900"></i>
                              47
                            </p>
                          </div>
                        </div>

                        <div class="mt-2 grid grid-cols-2">
                          <div class="flex items-center">
                            <div class="relative">
                              <div class="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                              <span class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                            </div>
                
                            <p class="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
                          </div>
                
                          <div class="flex justify-end">
                            <button><i class="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                            <button><i class="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="m-4 text-sm relative mx-auto w-full">
                    <a href="#" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <div class="rounded-lg bg-white p-4 shadow">
                        <div class="relative flex h-24 justify-center overflow-hidden rounded-lg">
                          <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <div class="absolute inset-0 bg-black bg-opacity-80">
                              <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" />
                            </div>
                          </div>
                
                          <div class="absolute bottom-0 left-5 mb-3 flex">
                            <p class="flex items-center font-medium text-white shadow-sm">
                              <i class="fa fa-camera mr-2 text-xl text-white"></i>
                              8
                            </p>
                          </div>
                
                          <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                          <span class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i class="fa fa-star"></i> </span>
                        </div>
                
                        <div class="relative mt-1 grid grid-cols-2">
                          <h2 class="text-gray-800" title="New York">Braga, Fradelos, Rua do Louseiro, 162</h2>
                
                          <p class="font-semibold absolute right-0">
                            <span class="text-sm uppercase"> EUR </span>
                            <span class="text-xl">480</span>/Month
                          </p>
                        </div>
                        <div class="mt-2">
                          <p class="line-clamp-1 mt-2 text-gray-800">6 bedrooms Architect designed Imported fixtures and fittings Full basement Top of the ...</p>
                        </div>

                        <div class="justify-center">
                          <div class="mt-2 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                            <p class="flex items-center font-medium text-gray-800">
                              <i class="fa fa-comment mr-2 text-blue-900"></i>
                              47
                            </p>
                          </div>
                        </div>

                        <div class="mt-2 grid grid-cols-2">
                          <div class="flex items-center">
                            <div class="relative">
                              <div class="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                              <span class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                            </div>
                
                            <p class="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
                          </div>
                
                          <div class="flex justify-end">
                            <button><i class="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                            <button><i class="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
`

const avaResidencesDetails = 
/*html */`
<div class="m-4 text-sm relative mx-auto w-full">
                    <a href="#" class="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                      <div class="rounded-lg bg-white p-4 shadow">
                        <div class="relative flex h-24 justify-center overflow-hidden rounded-lg">
                          <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                            <div class="absolute inset-0 bg-black bg-opacity-80">
                              <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" />
                            </div>
                          </div>
                
                          <div class="absolute bottom-0 left-5 mb-3 flex">
                            <p class="flex items-center font-medium text-white shadow-sm">
                              <i class="fa fa-camera mr-2 text-xl text-white"></i>
                              8
                            </p>
                          </div>
                
                          <span class="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-green-600 px-2 py-1 text-xs font-semibold text-white"> Available </span>
                          <span class="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i class="fa fa-star"></i> </span>
                        </div>
                
                        <div class="relative mt-1 grid grid-cols-2">
                          <h2 class="text-gray-800" title="New York">Braga, Fradelos, Rua do Louseiro, 162</h2>
                
                          <p class="font-semibold absolute right-0">
                            <span class="text-sm uppercase"> EUR </span>
                            <span class="text-xl">480</span>/Month
                          </p>
                        </div>
                        <div class="mt-2">
                          <p class="line-clamp-1 mt-2 text-gray-800">6 bedrooms Architect designed Imported fixtures and fittings Full basement Top of the ...</p>
                        </div>

                        <div class="justify-center">
                          <div class="mt-2 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                            <p class="flex items-center font-medium text-gray-800">
                              <i class="fa fa-comment mr-2 text-blue-900"></i>
                              47
                            </p>
                          </div>
                        </div>

                        <div class="mt-2 grid grid-cols-2">
                          <div class="flex items-center">
                            <div class="relative">
                              <div class="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                              <span class="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                            </div>
                
                            <p class="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
                          </div>
                
                          <div class="flex justify-end">
                            <button><i class="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                            <button><i class="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-white"></i></button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  REVIEWS
`