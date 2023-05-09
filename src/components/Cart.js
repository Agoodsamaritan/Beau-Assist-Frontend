import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Cart() {
    const state = useSelector(state => state);
    console.log(state);

  const items = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.total)
  console.log(items);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto sm:py-12 sm:px-6 lg:max-w-14xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Cart Detail</h1>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 px-3 lg:grid-cols-4 px-28 xl:gap-x-24">
        {items.map((product) => (
          <div key={product.id}>
            <div className="min-h-100 aspect-w-1 aspect-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-100">
              <img src={product.image_link} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-xl text-gray-700">
                <Link to={`/products/${product.id}`} >
                  <span aria-hidden="true" class="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
            </div>
            <p className="mt-1 text-md text-gray-500">{product.brand}</p>
            <p className="text-xl font-bold text-gray-500">$ {product.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-between">
        <p className="text-xl font-bold text-gray-500">Total:</p>
        <p className="text-xl font-bold text-gray-500">$ {totalPrice}</p>
      </div>
    </div>
  )
}
