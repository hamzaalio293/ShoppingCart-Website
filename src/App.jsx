import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import Navbar from './Components/Navbar.jsx';
import Products from './Components/Products.jsx';
import Cart from './Components/Cart.jsx';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    toast.success('Item added to cart!');
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast.error('Item removed from cart!');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar cartCount={cartItems.length} />
        <Routes>
          
        <Route 
            path="/" 
            element={
              <Products 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                cartItems={cartItems} 
              />
            } 
          />
       <Route
          path='/cart'
          element={
            <Cart 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
            />
          }
        />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
