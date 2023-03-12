
const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 2,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 3,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 4,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 5,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
      ]

export default function Example() {

    return (
        <>
        
        <div class="bg-white">
            <div className="mx-auto sm:py-12 sm:px-6 lg:max-w-14xl lg:px-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900">Best Sellers</h1>
            </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-1 px-3 lg:grid-cols-4 px-28 xl:gap-x-24">
        {products.map((product) => ( 
            <div key={product.id}>
                <div class="min-h-80 aspect-w-1 aspect-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-100">
                    <img src={product.imageSrc} alt={product.imageAlt} class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-md text-gray-700">
                    <a href={product.href}>
                        <span aria-hiddden="true" class="absolute inset-0"/>
                        {product.name}
                    </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                    <p class="text-sm font-medium text-gray-500">{product.price}</p>
            </div>
        ))}
        </div>


        </>
    );
}

