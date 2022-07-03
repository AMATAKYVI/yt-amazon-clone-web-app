import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dummyData } from '../dummyData';
import { addItemToCart } from '../store/cartSlice';

function Hero() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.item.cartItems);
  console.log(cartItem);
  const handleAddToCart = (product) => {
    dispatch(
      addItemToCart({
        ...product,
        quantity: 1,
        totalPrice: product.afterDiscountPrice,
      })
    );
  };
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };
  return (
    <div>
      <div className="">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/51w-4o-0GKL._SR3000,600_.jpg"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-10 justify-center items-center">
        {dummyData.slice(0, 2).map((item) => {
          return (
            <div
              className="z-10 cursor-pointer rounded-md bg-white mx-auto w-[360px] min-h-[450px] border border-gray-100 py-5 px-3"
              key={item.id}
              onClick={() => handleAddToCart(item)}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-[100%] h-[200px] object-cover"
                />
              </div>
              <div>
                <div>{truncate(item.productName, 100)}</div>
                <div className="flex py-1 items-center gap-10">
                  <p> {item.ratingStar} star</p>
                  <p className="text-blue-700 text-sm font-light">
                    {item.ratingTotal}
                  </p>
                </div>
                <div className=" py-1 flex items-center gap-5 ">
                  <p className="text-red-600 text-3xl">-30%</p>
                  <p className="text-2xl">${item.afterDiscountPrice}</p>
                  <p className="text-xs line-through">
                    / {item.beforeDiscountPrice}
                  </p>
                </div>
                <div className="py-1">
                  {item.freeDelivery ? (
                    <p className="text-sm">
                      <span className="text-green-900 "> Free delivery by</span>{' '}
                      <span className="italic">
                        {' '}
                        {item.deliveryExpectedDate}
                      </span>
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <button className="bg-amber-400 py-2 px-3 mt-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 mt-5 items-center justify-center gap-5">
        {dummyData.slice(2, 8).map((item) => {
          return (
            <div
              className="z-10 cursor-pointer rounded-md mx-auto bg-white w-[320px] min-h-[380px] border border-gray-100 py-5 px-3"
              key={item.id}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-[100%] h-[200px] object-cover"
                />{' '}
              </div>
              <div>
                <div>{truncate(item.productName, 100)}</div>
                <div className="flex py-1 items-center gap-10">
                  <p> {item.ratingStar} star</p>
                  <p className="text-blue-700 text-sm font-light">
                    {item.ratingTotal}
                  </p>
                </div>
                <div className=" py-1 flex items-center gap-5 ">
                  <p className="text-red-600 text-3xl">-30%</p>
                  <p className="text-2xl">${item.afterDiscountPrice}</p>
                  <p className="text-xs line-through">
                    / {item.beforeDiscountPrice}
                  </p>
                </div>
                <div className="py-1">
                  {item.freeDelivery ? (
                    <p className="text-sm">
                      <span className="text-green-900 "> Free delivery by</span>{' '}
                      <span className="italic">
                        {' '}
                        {item.deliveryExpectedDate}
                      </span>
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <button className="bg-amber-400 py-2 px-3 mt-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 px-10 justify-center items-center">
        {dummyData.slice(8, 10).map((item) => {
          return (
            <div
              className="z-10 cursor-pointer rounded-md bg-white mx-auto w-[360px] min-h-[450px] border border-gray-100 py-5 px-3"
              key={item.id}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-[100%] h-[200px] object-cover"
                />{' '}
              </div>
              <div>
                <div>{truncate(item.productName, 100)}</div>
                <div className="flex py-1 items-center gap-10">
                  <p> {item.ratingStar} star</p>
                  <p className="text-blue-700 text-sm font-light">
                    {item.ratingTotal}
                  </p>
                </div>
                <div className=" py-1 flex items-center gap-5 ">
                  <p className="text-red-600 text-3xl">-30%</p>
                  <p className="text-2xl">${item.afterDiscountPrice}</p>
                  <p className="text-xs line-through">
                    / {item.beforeDiscountPrice}
                  </p>
                </div>
                <div className="py-1">
                  {item.freeDelivery ? (
                    <p className="text-sm">
                      <span className="text-green-900 "> Free delivery by</span>{' '}
                      <span className="italic">
                        {' '}
                        {item.deliveryExpectedDate}
                      </span>
                    </p>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <button className="bg-amber-400 py-2 px-3 mt-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
