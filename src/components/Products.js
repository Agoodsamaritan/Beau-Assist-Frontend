import { useEffect, useState } from "react";
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/api/v1/products")
    .then((response) => {
      setProducts(response.data);
    });
  }, []);



  return (
    <>
    
    {/* Title */}
    <div className="bg-white">
      <div className="mx-auto sm:py-12 sm:px-6 lg:max-w-14xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h1>
      </div>
    </div>

    {/* Products */}
    <div className="m-24 grid grid-cols-1 px-20 gap-y-10 gap-x-8 sm:grid-cols-1 px-3 lg:grid-cols-3 px-28 xl:gap-x-24">
      {products?.map((product) => ( 
        <div key={product.id}>      
          <div className="min-h-100 aspect-w-1 aspect-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-100">
            <img src={product.image_link} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div> 
          <div className="mt-4 flex justify-between">
            <h3 className="text-md text-gray-700">
            <Link to={`/products/${product.id}`} > 
              {product.name}
            </Link>
            </h3>
            {/* <p class="mt-1 text-sm text-gray-500">{product.product_colors}</p> */}
          </div>
          <div className="grid grid-cols-2">
            <div>
          <p className="mt-1 text-md text-gray-500">{product.brand}</p>
          <p className="text-xl font-bold text-gray-500">$ {product.price}</p>
          </div>

          <div className="relative h-34 w-34">
            <button className="absolute bottom-0 right-0 w-40 bg-black py-1 px-4 text-white font-bold">ADD TO CART</button>
          </div>
          </div>

        </div>
      ))}
    </div>

    <a href="#top" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block p-3 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out fixed bottom-24 right-5" id="btn-back-to-top">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
    </a>

    </>
  )
}

