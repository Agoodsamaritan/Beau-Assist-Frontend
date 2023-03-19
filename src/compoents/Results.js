import { useEffect, useState } from "react";
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom'

export default function Results(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/api/v1/products/type/${props.type}`);
      setProducts(response.data);
    }
    fetchData();
  }, [props.type]);

  return (
    <>
    
    {/* Title */}
    <div class="bg-white">
      <div className="mx-auto sm:py-12 sm:px-6 lg:max-w-14xl lg:px-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">We selected these products for you:</h1>
      </div>
    </div>

    {/* Products */}
    <div class="mt-0 grid grid-cols-1 px-20 gap-y-10 gap-x-8 sm:grid-cols-1 px-3 lg:grid-cols-3 px-28 xl:gap-x-24">
      {products?.map((product) => ( 
        <div key={product.id}>      
          <div class="min-h-100 aspect-w-1 aspect-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-100">
            <img src={product.image_link} alt={product.imageAlt} class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div> 
          <div class="mt-4 flex justify-between">
            <h3 class="text-md text-gray-700">
            <Link to={`/products/${product.id}`} >
                <span aria-hiddden="true" class="absolute inset-0"/>
                  {product.name}
              </Link>
            </h3>
            {/* <p class="mt-1 text-sm text-gray-500">{product.product_colors}</p> */}
          </div>
          <div class="grid grid-cols-2">
            <div>
          <p class="mt-1 text-md text-gray-500">{product.brand}</p>
          <p class="text-xl font-bold text-gray-500">$ {product.price}</p>
          </div>

          <div class="relative h-32 w-32">
            <button class="absolute bottom-0 right-0 w-40 bg-black py-1 px-4 text-white font-bold">ADD TO CART</button>
          </div>
          </div>

        </div>
      ))}
    </div>
    </>
  )
}