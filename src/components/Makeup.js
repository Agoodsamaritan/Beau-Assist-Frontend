export default function Makeup() {
    return (
     <>
       
       <div className="flex justify-center pt-12 pb-12">
        <div className="block max-w-xl rounded-lg bg-white p-8 shadow-lg dark:bg-neutral-700">
        <h1 className="mb-5 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            What is your skin type ? </h1>
        <p className="mb-4 text-md text-black">
        If your skin appears shiny throughout, you likely have oily skin. If it feels tight and is flaky or scaly, you likely have dry skin. 
        If the shine is only in your T-zone, you probably have combination skin. If your skin feels hydrated and comfortable, but not oily, you likely have normal skin.
        </p>
        <div className="flex p-8 grid grid-cols-2 gap-8">
        <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10  font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Dry
        </button>
        <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10  font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Combination
        </button>
        <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10  font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Normal
        </button>
        <button className="w-48 font-xl font-bold uppercase text-white py-3 px-10  font-bold text-xl uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Oily
        </button>
        </div>
        </div>
        </div>
        
     </>
    )
 }