import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';

function CheckOut() {
  const router = useRouter();
  return (
    <div className="bg-gray-200  px-10 py-10">
      <header className="border-b-2 border-gray-300">
        <div>
          <img
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt=""
            className="w-[120px] cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>
      </header>
      <div className="flex divide-x-2 gap-5">
        {/* left */}
        <div className="px-10 py-10 flex-[0.6]">
          {/* Customer Information */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold pb-5">Customer Info</h1>
            <form>
              <div className="flex  items-center">
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">First Name: </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
              </div>
              <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Address..."
                  className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                />
              </div>
              <div className="flex">
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">Town/City</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Town or City Name..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">State/Province</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="State or Province..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="12345"
                    className="py-2 px-2  w-[50%]  text-sm outline-none tracking-wide"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* Payment Information */}
          <div className="w-full">
            {/* Billing address */}
            <h1 className="text-2xl font-semibold pb-5 pt-5">Payment Info</h1>
            <form>
              <div className="flex  items-center">
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">Card Number: </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Card Number..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="lastname">Billing Zip Code:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Billing Zip Code..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
              </div>
              <div className="flex  items-center">
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="month">Month: </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Month..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="year">Year:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Year..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="lastname">CVC:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="123..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* Billing Address */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold pb-5 pt-5">
              Billing Information
            </h1>
            <form>
              <div className="py-2 flex  px-2 gap-2   flex-1">
                <input
                  type="checkbox"
                  name=""
                  id="sameasaddress"
                  className="cursor-pointer"
                />
                <label htmlFor="sameasaddress" className="cursor-pointer py-2">
                  Same as Shipping Address
                </label>
              </div>
              <div className="flex  items-center">
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">First Name: </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
              </div>
              <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Address..."
                  className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                />
              </div>
              <div className="flex">
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">Town/City</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Town or City Name..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="firstname">State/Province</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="State or Province..."
                    className="py-2 px-2  w-full  text-sm outline-none tracking-wide"
                  />
                </div>
                <div className="py-2 flex flex-col px-2 gap-2   flex-1">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="12345"
                    className="py-2 px-2  w-[50%]  text-sm outline-none tracking-wide"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* right */}
        <div className="flex-[0.4] py-10">
          <div className="border border-gray-300 bg-white h-[400px]">
            <h1 className="text-2xl font-semibold text-center py-2">
              Current Cart Items
            </h1>
            <div className="px-5">display item here</div>
            <div className="flex items-center py-2">
              <hr className="flex-1" />
              <p className="mx-5 py-2">Discount Code</p>
              <hr className="flex-1" />
            </div>
            <div className="px-5">button and input here</div>
            <div className="flex items-center  py-2">
              <hr className="flex-1" />
              <p className="mx-5 py-2">Cart Total</p>
              <hr className="flex-1" />
            </div>
            <div className="text-right px-5 py-2 text-lg font-semibold">
              [total amount here]
            </div>
            <div className="px-5 flex items-center gap-5 justify-end py-5">
              <div
                className="bg-gray-500 text-white px-5 font-semibold py-2 rounded-md"
                onClick={() => router.push('/cart')}
              >
                <button>Back to Cart</button>
              </div>
              <div className="bg-amber-500 text-white font-semibold px-5 py-2 rounded-md">
                <button>Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
