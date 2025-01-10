import { useState } from 'react';

function Products({ addToCart, removeFromCart, cartItems }) {
  const products = [
    {
        id: 1,
        name: "Mens Casual Jacket",
        price: 22.3,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light..."
      },
    {
      id: 2,
      name: "Mens Casual Jacket",
      price: 22.3,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light..."
    },
    {
      id: 3,
      name: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions."
    },
    {
      id: 4,
      name: "Mens Casual Slim",
      price: 15.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      description: "The color could be slightly different between on the screen and in practice."
    },
    {
      id: 5,
      name: "John Hardy Women's",
      price: 695.00,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon."
    },
    {
      id: 6,
      name: "Solid Gold Petite",
      price: 168.00,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days."
    },
    {
      id: 7,
      name: "White Gold Plated",
      price: 9.99,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her."
    },
    {
      id: 8,
      name: "Pierced Owl Rose",
      price: 10.99,
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel."
    }
  ];

  const isInCart = (productId) => cartItems.some(item => item.id === productId);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
         {products.map((product) => (
            <div
            key={product.id}
            className='bg-white rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl w-full max-w-[300px] flex flex-col'
            >
              <div className='space-y-3 mb-8'>
                <h3 className='text-xl font-semibold text-gray-800'>{product.name}</h3>
                <p className='text-gray-500 text-sm'>{product.description}</p>
              </div>
              <div className='flex-grow flex items-center justify-center mb-8'>
                <img 
                src={product.image} 
                alt={product.name} 
                className='w-full h-44 object-contain'
                />
              </div>

              <div className='flex items-center justify-between gap-3'>
                <span className='text-xl font-bold text-green-500'>{product.price}</span>
                {isInCart(product.id) ? (
                  <button
                  className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 text-sm font-medium'
                  onClick={() => removeFromCart(product.id)}
                  >
                    Remove Item
                  </button>
                ) : (
                  <button
                  onClick={ ()=> addToCart(product)}
                  className='px-4 py-2 bg-white border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-medium'
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
         ))}
      </div>
    </div>
  );
}

export default Products; 