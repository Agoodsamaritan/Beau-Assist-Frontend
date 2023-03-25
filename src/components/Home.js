
export default function Home() {

    return (
      <div className="flex isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://i.ibb.co/8b0ngdh/BA2.jpg"
          alt=""
          className="absolute bg-cover bg-center inset-0 -z-10 object-cover object-left md:object-center lg:object-cover h-full w-full"
        />
        
        <div className="mx-4 max-w-7xl pt-8 px-46 sm:static sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl mt-14 font-bold tracking-tight text-white sm:text-6xl">Beauty Assist</h2>
            <p className="mt-8 text-lg leading-8 text-gray-300">
            A customized skin care or makeup routine based on your answers, and provides you with an informational in depth step-by-step routine.
            </p>
          </div>
          <div className="mx-auto bg-cover mt-10 max-w-2xl lg:mx-0 mt-auto lg:max-w-none mt-10">
          <a 
          className="text-white py-3 px-10 text-xl uppercase mt-28 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" href="/Products">SHOP COLLECTION</a> 
          </div>
        </div>
      </div>

    )
  }
