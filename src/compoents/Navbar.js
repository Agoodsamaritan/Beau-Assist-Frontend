import React from "react"

export default function NavBar() {


return (

  <>
  
  <nav class="sticky top-0 z-50">
    <div class="relative isolate flex justify-center overflow-hidden sm:px-8 py-2.5 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700">
      <a href="#" class="text-md font-bold text-white hover:text-gray-700">FREE US SHIPPING ON ORDERS $35+</a>   
    </div>
 
    <div class="flex flex-wrap place-items-center">
    <section class="relative mx-auto">
      
      {/* <!-- navbar --> */}
      <nav class="flex justify-between shadow-md text-black w-screen bg-white ">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
        <img class="object-cover object-center w-64 h-auto" src="https://i.ibb.co/DWVSsBF/Screen-Shot-2023-03-14-at-7-05-54-PM.png"/>
        </a>
        
      {/* <!-- Nav Links --> */}
      <ul class="hidden md:flex px-3 mx-auto text-lg font-semibold font-heading space-x-12">
        <li><a class="hover:text-gray-200" href="/Home">HOME</a></li>
        <li><a class="hover:text-gray-200" href="/Products">PRODUCTS</a></li>
        <li><a class="hover:text-gray-200" href="/Quizes">LEARN</a></li>
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
        <div class="-mr-2 flex">
        
          {/* Shopping cart Icon */}
          <button class="xl:hidden inline-flex mr-6 items-center" aria-controls="mobile-menu" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg> 
            <span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </button>
          
          {/* Burger Bar */}
         
          <button type="button" data-collapse-toggle="navbar-cta" class="navbar-burger self-center mr-12 xl:hidden" aria-controls="navbar-cta" aria-expanded="false">

          <span class="sr-only">Open main menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" 
          class="fill-current h-6 w-6 hover:text-gray-200" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" clip-rule="evenodd">
          <path  fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      
          </button>
          <div class="items-center justify-between hidden w-full d:flex md:w-auto md:order-1" id="navbar-cta ">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
     </div> 
        </div>
        
      </nav>
    
    </section>
    </div>



    </nav>
    </>
    );  

    

}


