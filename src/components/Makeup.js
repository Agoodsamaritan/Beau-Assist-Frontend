export default function Makeup() {
    return (
     <>
       
       <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">What is your skin type ? </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </p>
        <div className="flex p-8 grid grid-cols-2 gap-8">
        <button className="font-xl font-bold uppercase">
            oily
        </button>
        <button className="font-xl font-bold uppercase">
            combination
        </button>
        <button className="font-xl font-bold uppercase">
            normal
        </button>
        <button className="font-xl font-bold uppercase">
            oily
        </button>
        </div>
        </div>
        </div>
        
     </>
    )
 }