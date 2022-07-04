import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const router = useRouter();
  const cartItemTotal = useSelector((state) => state.cart.item.cartItems);
  return (
    <div className="flex items-center text-white text-sm py-2 font-semibold bg-[#131921]">
      <img
        onClick={() => router.push('/')}
        className="text-white w-[110px] flex-[0.1] cursor-pointer"
        src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
        alt=""
      />
      <div className="flex-[0.15]">location</div>
      <div className="flex-[0.4] flex items-center relative">
        <input
          type="text"
          name=""
          className="w-full outline-none tracking-wide text-black px-3  rounded-md py-2"
          id=""
          placeholder="Search here..."
        />
        <div className="absolute right-0 rounded-r-md	 rounded-b-r-lg bg-[#febd69] py-2 px-3 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-[0.4] justify-center px-2 gap-10 items-center">
        <div
          className="cursor-pointer hover:text-gray-300 transition-all duration-300"
          onClick={() => router.push('/login')}
        >
          <p className="text-xs text-gray-300">Hello, Sign In</p>
          <p>Account & Info</p>
        </div>
        <div className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          <p className="text-xs text-gray-300">Return</p>
          <p>& Order</p>
        </div>
        <div
          className="flex gap-2 relative cursor-pointer hover:text-gray-300 transition-all duration-300"
          onClick={() => router.push('/cart')}
        >
          <p>Cart</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -top-2 bg-amber-500 text-black text-xs px-1 flex items-center justify-center -right-1 rounded-full">
            {cartItemTotal.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
