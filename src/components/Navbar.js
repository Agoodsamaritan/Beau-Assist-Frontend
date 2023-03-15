import React from "react"

export default function NavBar() {

return (

  <>
  
  <nav class="sticky top-0 z-50">
    <div class="relative isolate flex justify-center overflow-hidden sm:px-8 py-2.5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500">
      <a href="#" class="text-md font-bold text-white hover:text-gray-700">FREE US SHIPPING ON ORDERS $35+</a>   
    </div>
 
    <div class="flex flex-wrap place-items-center">
    <section class="relative mx-auto">
      
      {/* <!-- navbar --> */}
      <nav class="flex justify-between shadow-md text-black w-screen bg-white ">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">GUIDE BEAUTY</a>
        
      {/* <!-- Nav Links --> */}
      <ul class="hidden md:flex px-3 mx-auto font-semibold font-heading space-x-12">
        <li><a class="hover:text-gray-200" href="/Home">HOME</a></li>
        <li><a class="hover:text-gray-200" href="/Products">SHOP</a></li>
        <li><a class="hover:text-gray-200" href="/Product">CONSULT</a></li>
      </ul>
          
      {/* <!-- Header Icons --> */}
      <div class="hidden xl:flex items-center space-x-5 items-center">
        <a class="hover:text-gray-200" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="-1 0 30 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
        </svg>
        </a>
            
        <a class="flex items-center hover:text-gray-200" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
          
        <span class="flex absolute -mt-5 ml-4">
        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
        </a>
          
      {/* <!-- Sign In / Register      --> */}
        <a class="flex items-center hover:text-gray-200" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </a>
        </div>
        </div>

      {/* <!-- Responsive navbar --> */}
        <a class="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
          
        <span class="flex absolute -mt-5 ml-4">
        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
        </a>
        
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        </a>
      </nav>
    
    </section>
    </div>
        <div class="absolute">
        <div class="fixed bottom-0 right-0 mb-8 mr-7 z-10">
        <div>
        <a title="accessibility" href="#" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
        <img class="object-cover object-center w-full h-full rounded-full" src="https://i.ibb.co/tsTHD66/accessibility-icon.png"/>
        </a>
        </div>
        </div>
        </div>

  </nav>

  </>
    );  
}