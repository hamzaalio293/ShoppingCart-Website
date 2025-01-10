import { Link } from 'react-router-dom';
import { FaShoppingCart, FaReact } from 'react-icons/fa';


function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <div className="flex items-center gap-2 ml-[170px]">
        <FaReact className="text-5xl text-blue-500 animate-spin-slow" />
        <span className="text-2xl font-bold">Ecomzy</span>
      </div>
      <div className="flex items-center gap-8 mr-[190px]">
        <Link to="/" className="text-white hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/cart" className="relative text-2xl text-white hover:text-gray-300 transition-colors">
          <FaShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 