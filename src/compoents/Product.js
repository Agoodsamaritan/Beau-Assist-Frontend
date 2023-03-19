import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";
import { addToCart } from "../service/actions/cart";
import { useDispatch } from "react-redux";


export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();


  useEffect(() => {
    api.get(`/api/v1/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // handle add cart 
  const handleAddToCart = (item) => {
      console.log(`add item ${item}`);
      dispatch(addToCart(product));

  };

  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div key={product.id}>
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={product.image_link} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <h3 className="text-md text-gray-700">
              <p>
                <span aria-hiddden="true" className="absolute inset-0" />
                {product.name}  
              </p>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-500">{product.description}</p>
          <p className="text-sm font-medium text-gray-500">${product.price}</p>
        </div>
      </div>
      <button onClick={() => handleAddToCart(product)}> Add to Cart </button>
    </div>
  )
}
 