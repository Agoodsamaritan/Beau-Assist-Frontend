import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
        <button class="fixed bottom-24 left-24 bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
        type="button"> 
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
        </button>

        <button class="fixed bottom-0 left-3 mb-7 mr-7" type="button" onClick={() => setShowModal(true)}>
              <a title="beautyassistant" class="flex w-24 h-24 rounded-full max-w-full transition-all p-4 border-8 border-blue-700 hover:drop-shadow-lg transform hover:scale-110 hover:rotate--8" >
              <img class="object-cover object-center w-full h-auto" src="https://i.ibb.co/94B29Dp/iconmonstr-customer-7-240.png"/>
              </a>
        </button>
      
      {showModal ? (
            
            // Dialog Modal: Opening
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Beauty Assistant 
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-8 flex-auto">
                  <h3 className="py-6 px-8 text-xl font-semibold">
                   I'd like to shop...
                   </h3>

                <div class="flex p-8 grid grid-cols-3 gap-8">
                <div>
                    <button
                    className="text-white py-3 px-10  font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >Make Up
                    </button>
                </div>
                    
                <div>
                    <button
                    className="text-white py-3 px-10 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >Skin Care
                    </button>
                </div>

                <div>
                    <button
                    className="text-white py-3 px-14 font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >Both
                    </button>
                </div>

                </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) 
      
      : null  
      }
    </>
  );
}