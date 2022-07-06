import React from 'react';

function Footer() {
  return (
    <div className="bg-[#232F3E] text-white min-h-[20vh]">
      <div className="text-center font-semibold tracking-wide text-xl">
        Amazon
      </div>
      <div className="grid grid-cols-2 items-center gap-2 max-w-[1280px] mx-auto text-center">
        <div className="text-xs">
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Contact
          </div>
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Sell on Amazon
          </div>
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Book store
          </div>
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Affiliates
          </div>
        </div>
        <div className="text-xs">
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            About
          </div>
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Terms and Policy
          </div>
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Return Products
          </div>
          <div className="py-2 cursor-pointer tracking-wide w-[60%] hover:bg-gray-200 transition-all duration-500 hover:text-black mx-auto">
            Warehouses
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
