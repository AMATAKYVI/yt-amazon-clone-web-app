import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { auth, db } from '../firebase';

function UserInformation() {
  const router = useRouter();
  const [userInformation, setUserInformation] = useState({
    name: '',
    email: '',
  });
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // has user
        const userRef = doc(db, 'user', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserInformation((prev) => {
            return { ...prev, name: userSnap?.data().name, email: user.email };
          });
        } else {
          console.log('user is not exist');
        }
        console.log(user);
      } else {
        //no user
        console.log('not log in');
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="px-10 py-10 flex gap-5 divide-x-2 h-[70vh] bg-gray-200">
        <div className="flex-[0.5] flex flex-col items-center justify-center">
          <div>
            <img
              src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
              alt=""
              className="w-[120px]"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center border px-2 border-gray-300">
              <h1>Name:</h1>
              <span className="font-semibold text-lg py-2">
                {userInformation.name}
              </span>
            </div>
            <div className="flex gap-2 items-center py-2 px-2 border border-gray-300">
              <h1>Email:</h1>
              <span className="font-semibold text-lg">
                {userInformation.email}
              </span>
            </div>
            <div className="py-2 flex flex-col justify-center border border-gray-300 px-2 gap-2">
              <h1>Address:</h1>
              <textarea
                type="text"
                name=""
                id=""
                value="1234 St Saint, Peterburg CA 91234"
                className="pt-2 resize-none tracking-wide bg-gray-100  h-[100px] px-2 w-full outline-none"
                disabled
              />
            </div>
            <div className="border border-gray-300 px-2 py-2">
              <h1>Payment Detail</h1>
              <div className="px-2 py-2">
                <div>
                  <p className="text-xs font-semibold">Card Number</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    value="xxxxxxx-xxxxxx-xxx2345"
                    className="w-full tracking-wide outline-none"
                    disabled
                  />
                </div>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xs font-semibold">Expire Date</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-fit"
                      value="12/12"
                      disabled
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">CVS</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="w-fit"
                      value="***"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1
                onClick={() => router.push('/orderhistory')}
                className="cursor-pointer py-2 px-2 border border-gray-300  text-blue-700 hover:text-blue-600 transition-all duration-200 "
              >
                Order History
              </h1>
              {/* <span>[user order history here</span> */}
            </div>
            <div>
              <h1
                onClick={() => router.push('/cart')}
                className="cursor-pointer py-2 px-2 border border-gray-300 text-blue-700 hover:text-blue-600 transition-all duration-200 "
              >
                Cart
              </h1>
              {/* <span>[user go back to cart page]</span> */}
            </div>
          </div>
        </div>
        <div className="pl-5 flex-1">
          <div className="text-xl font-semibold ">
            Some Product Recommendations
          </div>
        </div>
      </div>
      <div>Footer component here</div>
    </div>
  );
}

export default UserInformation;
