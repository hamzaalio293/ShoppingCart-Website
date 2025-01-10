import React from 'react'


const Cart = ( {cartItems, removeFromCart}) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = 10;
    const tax = total * 0.1;
    const fineTotal = total + shipping + tax;


  return (
    <div className='container mx-auto p-7 flex flex-col lg:flex-row gap-8'>
      {/* Cart Items Section */}
      <div className='lg:w-2/3 ml-[120px]'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <p className='text-gray-500 text-lg'>Your cart is empty</p>
        ): (
            <div
            className='space-y-4'>
                {cartItems.map ((item) => {
                    return (
                    <div
                    key={item.id}
                    className='flex items-center bg-white rounded-lg p-4 shadow-sm'
                    >
                        <img 
                        src={item.image} 
                        alt={item.name}
                        className='w-16 h-16 object-contain'
                        />
                        <div
                        className='ml-4 flex-grow'>
                            <h3 className='text-lg font-medium text-gray-800'>{item.name}</h3>
                            <p className='text-green-500 font-bold'>${item.price}</p>
                        </div>
                        <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-sm px-4 py-2 text-red-500 hover:text-red-700 transition-colors duration-300'
                        >
                            Remove
                        </button>
                    </div>
                    )
                })}
                
            </div>
        )}
      </div>



        {/* Order Summary Section */}
        <div className='lg:w-1/3'>
            <div className='bg-white rounded-lg p-6 shadow-md sticky top-4'>
                <h2 className='text-xl font-bold text-gray-800 mb-6'>Order Summary</h2>
                <div className='space-y-4'>
                    <div className='flex justify-between text-gray-600'>
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between text-gray-600'>
                        <span>Tax (10%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className='border-t pt-4'>
                        <div className='justify-between font-bold text-lg'>
                            <span>Total</span>
                            <span className='text-greem-500'>${fineTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className='w-full bg-green-500 text-white py-3 
                    rounded-lg hover:bg-green-600 transition-colors duration-300 
                    font-medium'>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
