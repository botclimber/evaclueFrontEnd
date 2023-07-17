const reviewsData = {
  1: {
    reviewTitle: "Braga, Fradelos, Rua do Louseiro, 162 | 1 esq - Dir",
    reviewUserName: "Cristiano Ronaldo",
    reviewUserImage: "data:image/png;base64,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",
    reviewBadge: "Legend",
    reviewContributions: "102",
    reviewCreatedAt: "January 20, 2022",
    reviewRating: "3.8",
    reviewContent: "The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure. It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.",
    //reviewImages:["https://i0.wp.com/heroisx.com/wp-content/uploads/2019/09/Sasuke-Uchiha-Jutsus-Magenkyou-Sharingan.jpg?resize=640%2C346&ssl=1", "https://i.pinimg.com/564x/83/5f/32/835f32065c0807f031514667e5a51432.jpg", "https://images6.alphacoders.com/415/thumb-1920-415519.jpg"]
    reviewImages : []
  },
  2: {
    reviewTitle: "Braga, Fradelos, Rua do Louseiro, 162 | 1 esq - Dir",
    reviewUserName: "Lionel Messi",
    reviewUserImage: "https://constructionlinks.ca/wp-content/uploads/2023/03/Continental.jpg",
    reviewBadge: "Legend",
    reviewContributions: "61 ",
    reviewCreatedAt: "January 20, 2022",
    reviewRating: "3.8",
    reviewContent: "The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure. It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.",
    reviewImages:["https://i0.wp.com/heroisx.com/wp-content/uploads/2019/09/Sasuke-Uchiha-Jutsus-Magenkyou-Sharingan.jpg?resize=640%2C346&ssl=1", "https://i.pinimg.com/564x/83/5f/32/835f32065c0807f031514667e5a51432.jpg", "https://images6.alphacoders.com/415/thumb-1920-415519.jpg"]
  },
  3: {
    reviewTitle: "Braga, Fradelos, Rua do Louseiro, 162 | 1 esq - Dir",
    reviewUserName: "Travis Scott",
    reviewUserImage: "https://akns-images.eonline.com/eol_images/Entire_Site/2021516/rs_1200x1200-210616082022-1200-Kylie-Jenner-Travis-Scott-Stormi.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    reviewBadge: "Legend",
    reviewContributions: "61 ",
    reviewCreatedAt: "January 20, 2022",
    reviewRating: "3.8",
    reviewContent: "The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure. It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.",
    reviewImages:["https://miro.medium.com/v2/resize:fit:1200/1*dEOFpyaOeaofMsFKBLUH0w.jpeg"]
  },
}

function updateModalContent(reviewData){
    const imgLimit = 5
    const exceptions = ["reviewImages", "reviewUserImage"]

    for (data in reviewData){
        console.log(data)
        if (!exceptions.includes(data)){
            document.getElementById(data).innerHTML = reviewData[data]

        }else{
            if(data == "reviewUserImage") document.getElementById(data).src = reviewData[data]
            else if (data == "reviewImages"){

                const reviewImagesDiv = document.getElementById("reviewImagesContent")
                const imgsLen = reviewData[data].length
                if(imgsLen === 0) reviewImagesDiv.style.display = "none"
                else{
                    reviewImagesDiv.style.display = ""
                    for(const index of Array(imgLimit).keys()){
                        const imgDiv = document.getElementById(`img${index}`)
                        const img = imgDiv.getElementsByTagName("img")[0]

                        if(index < reviewData[data].length) img.src = reviewData[data][index]
                        else img.src = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                    }
                }
            }
        }
    }
    
}

const reviewsSearch = 
`
<label
                  class="mb-5 relative bg-white  flex flex-col md:flex-row items-center justify-center border py-2 px-2 "
                  for="search-bar">
                  <input id="search-bar" placeholder="floor | direction"
                      class="px-4 w-full rounded-md flex-1 outline-none bg-white">
                  <i class="fa fa-search mr-2 text-blue-900"></i>
                </label>
`


const reviews =
`
              <article class="relative bg-[#374152] mb-1 border rounded-md">

                <div class="relative p-2">
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src="data:image/png;base64,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" alt="">
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>Cristiano Ronaldo <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-200">Critical</time></p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p class="mb-2 text-white">This is my third Invicta Pro Diver. They are just ...</p>
                <a href="#" onclick="toggleModal('defaultModal', 1)" class="mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" >Read more</a>
              </div>
              </article>

              <article class="relative bg-[#374152] mb-1 border rounded-md">
                <div class="absolute bg-cover w-full h-[88px] bg-[url('https://i0.wp.com/heroisx.com/wp-content/uploads/2019/09/Sasuke-Uchiha-Jutsus-Magenkyou-Sharingan.jpg?resize=640%2C346&ssl=1')] rounded-t-md"></div>
                <div class="absolute w-full h-[88px] backdrop-brightness-50 rounded-t-md"></div>

                <div class="relative p-2">
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src="https://constructionlinks.ca/wp-content/uploads/2023/03/Continental.jpg" alt="">
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>Lionel Messi <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-200">Continental</time></p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p class="mb-2 text-white">This is my third Invicta Pro Diver. They are just ...</p>
                <a href="#" onclick="toggleModal('defaultModal', 2)" class="mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
              </div>
              </article>

              <article class="relative bg-[#111828] mb-1 border rounded-md">
                <div class="absolute bg-cover w-full h-[88px] bg-[url('https://miro.medium.com/v2/resize:fit:1200/1*dEOFpyaOeaofMsFKBLUH0w.jpeg')] rounded-t-md"></div>
                <div class="absolute w-full h-[88px] backdrop-brightness-50 rounded-t-md"></div>

                <div class="relative p-2">
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src="https://akns-images.eonline.com/eol_images/Entire_Site/2021516/rs_1200x1200-210616082022-1200-Kylie-Jenner-Travis-Scott-Stormi.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top" alt="">
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>Travis Scott <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-200">Astroworld</time></p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just ...</p>
                <a href="#" onclick="toggleModal('defaultModal', 3)" class="mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
              </div>
              </article>

              <article class="relative bg-[#111828] mb-1 border rounded-md">
                <div class="absolute bg-cover w-full h-[88px] bg-[url('https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg')] rounded-t-md"></div>
                <div class="absolute w-full h-[88px] backdrop-brightness-50 rounded-t-md"></div>

                <div class="relative p-2">
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src="https://constructionlinks.ca/wp-content/uploads/2023/03/Continental.jpg" alt="">
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-200">Continental</time></p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just ...</p>
                <a href="#" class="mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
              </div>
              </article>

              <article class="relative bg-[#111828] mb-1 border rounded-md">
                <div class="absolute bg-cover w-full h-[88px] bg-[url('https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg')] rounded-t-md"></div>
                <div class="absolute w-full h-[88px] backdrop-brightness-50 rounded-t-md"></div>

                <div class="relative p-2">
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src="https://constructionlinks.ca/wp-content/uploads/2023/03/Continental.jpg" alt="">
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-200">Continental</time></p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                <p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just ...</p>
                <a href="#" class="mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
              </div>
              </article>
`

function toggleModal(modalID, reviewId){
    updateModalContent(reviewsData[reviewId])

    const modal = document.getElementById(modalID)

    modal.style.width = "100%"
    modal.style.height = "100%"

    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)"

    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
}