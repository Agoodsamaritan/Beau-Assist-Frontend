

export default function Button() {

    return (
        <div className="fixed">
            <button className="fixed bottom-24 left-24 bg-white rounded-full p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
            type="button"> 
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <button className="fixed bottom-0 left-3 mb-7 mr-7 bg-white rounded-full " type="button">
                <a href="/quiz" title="beautyassistant" className="flex w-24 h-24 rounded-full max-w-full transition-all p-4 border-8 border-blue-700 hover:drop-shadow-lg transform hover:scale-110 hover:rotate--8" >
                    <img className="object-cover object-center w-full h-auto" src="https://i.ibb.co/94B29Dp/iconmonstr-customer-7-240.png"/>
                </a>
            </button>
        </div>
    )

}