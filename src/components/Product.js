import { useState, useEffect } from "react"
import api from '../api/axiosConfig'

export default function Product({id, name, price}) {
    const [product, setProduct] = useState();

    const getProduct = async (id) => {
        try {
            const response = await api.get("/api/v1/products/{id}")
      
            const singleProduct = response.data;

            setProduct(singleProduct);
        }
      
        catch(err) {
            console.log(err)
        } 
    }

    useEffect(() => {
        getProduct();
      },[])

    return (

        <div>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div key={id}>
                {/* <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={product.imageSrc} alt={product.imageAlt} class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div> */}
                <div class="mt-4 flex justify-between">
                    <h3 class="text-md text-gray-700">
                    <p>
                    <span aria-hiddden="true" class="absolute inset-0"/>
                    {name}
                    </p>
                    </h3>
                    {/* <p class="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p class="text-sm font-medium text-gray-500">{price}</p>
                </div>
            </div>
        </div>
    )
}