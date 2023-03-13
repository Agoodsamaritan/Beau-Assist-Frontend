import { useState, useEffect } from "react";
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom'

export default function Products() {
  const [products, setProducts] = useState();

  

  const getProducts = async () => {
    try {
      const response = await api.get("/api/v1/products")

      setProducts(response.data)
    }

    catch(err) {
      console.log(err)
    } 
  }

  useEffect(() => {
    getProducts();
  },[])

  

  return (
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products?.map((product) => ( 
        <div key={product.id}>
          {/* <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={product.imageSrc} alt={product.imageAlt} class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div> */}
          <div class="mt-4 flex justify-between">
            <h3 class="text-md text-gray-700">
            <Link to={`/products/${product.id}`} >
                <span aria-hiddden="true" class="absolute inset-0"/>
                  {product.name}
              </Link>
            </h3>
            {/* <p class="mt-1 text-sm text-gray-500">{product.color}</p> */}
          </div>
          <p class="text-sm font-medium text-gray-500">{product.price}</p>
        </div>
      ))}
    </div>
  )
}

