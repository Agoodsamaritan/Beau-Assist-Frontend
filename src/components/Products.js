import { useState, useEffect } from "react";
import api from '../api/axiosConfig'

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
    <>
    <div class="bg-white">
    <div className="mx-auto sm:py-12 sm:px-6 lg:max-w-14xl lg:px-8">
    <h1 class="text-2xl font-bold tracking-tight text-gray-900">Our Products</h1>
    </div>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 px-3 lg:grid-cols-4 px-28 xl:gap-x-24">
      {products?.map((product) => ( 
        <div key={product.id}>
               
          <div class="min-h-80 aspect-w-1 aspect-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={product.image_link} alt={product.imageAlt} class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div> 
          <div class="mt-4 flex justify-between">
            <h3 class="text-md text-gray-700">
              <a href={product.href}>
                <span aria-hiddden="true" class="absolute inset-0"/>
                  {product.name}
              </a>
            </h3>
            {/* <p class="mt-1 text-sm text-gray-500">{product.product_colors}</p> */}
          </div>
          <p class="mt-1 text-sm text-gray-500">{product.brand}</p>
          <p class="text-sm font-medium text-gray-500">$ {product.price}</p>
        </div>
      ))}
    </div>

    </>
  )
}