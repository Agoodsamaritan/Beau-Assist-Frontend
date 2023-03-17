import React from "react";

export default function Quizes() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
        <button class="fixed bottom-24 left-24 bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" type="button"> 
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
                <div className="relative flex-auto">
                  <h1 className="text-3xl font-semibold">
                   I'd like to shop
                   </h1>

                <div class="grid grid-cols-3 gap-4">
                <div>
                    <button
                    className="bg-blue-700 text-white text-bold active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >Make Up
                    </button>
                </div>
                    
                <div>
                    <button
                    className="bg-blue-700 text-white text-bold active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    >Skin Care
                    </button>
                </div>

                <div>
                    <button
                    className="bg-blue-700 text-white text-bold text-lg active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
      ) : null}
    </>
  );
}