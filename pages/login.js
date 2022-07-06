import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { validate } from 'email-validator';
// var passwordValidator = require('password-validator');
// var schema = new passwordValidator();
// schema
//   .is()
//   .min(8)
//   .is()
//   .max(100)
//   .has()
//   .uppercase()
//   .has()
//   .lowercase()
//   .has()
//   .digits(2)
//   .has()
//   .not()
//   .spaces()
//   .is()
//   .not()
//   .oneOf(['12345', 'qweqweqwe', 'asdasdasd']);
// function checkUppercase(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == str.charAt(i).toUpperCase() &&
//       str.charAt(i).match(/[a-z]/i)
//     ) {
//       return true;
//     }
//   }
//   return false;
// }
// function checkLowercase(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == str.charAt(i).toLowerCase() &&
//       str.charAt(i).match(/[a-z]/i)
//     ) {
//       return true;
//     }
//   }
//   return false;
// }
// function hasWhiteSpace(s) {
//   return /\s/g.test(s);
// }
// function hasNumber(myString) {
//   return /\d/.test(myString);
// }
function Login() {
  // get input value EMAIL and PASSWORD
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  //password validation friendly UI
  const [passwordShowValidation, setPasswordShowValidation] = useState({
    hasEightLength: false,
    hasUpperCase: false,
    hasWhiteSpace: false,
    hasLowerCase: false,
    hasDigit: false,
  });
  const router = useRouter();
  // useEffect(() => {
  //   if (passwordInputValue) {
  //     if (passwordInputValue.length === 8) {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasEightLength: true };
  //       });
  //     } else if (passwordInputValue.length < 8) {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasEightLength: false };
  //       });
  //     }
  //     if (checkUppercase(passwordInputValue)) {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasUpperCase: true };
  //       });
  //     } else {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasUpperCase: false };
  //       });
  //     }
  //     if (checkLowercase(passwordInputValue)) {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasLowerCase: true };
  //       });
  //     } else {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasLowerCase: false };
  //       });
  //     }
  //     if (hasWhiteSpace(passwordInputValue)) {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasWhiteSpace: true };
  //       });
  //     } else {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasWhiteSpace: false };
  //       });
  //     }
  //     if (hasNumber(passwordInputValue)) {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasDigit: true };
  //       });
  //     } else {
  //       setPasswordShowValidation((prev) => {
  //         return { ...prev, hasDigit: false };
  //       });
  //     }
  //   } else {
  //     setPasswordShowValidation((prev) => {
  //       return {
  //         hasEightLength: false,
  //         hasUpperCase: false,
  //         hasLowerCase: false,
  //         hasWhiteSpace: false,
  //         hasDigit: false,
  //       };
  //     });
  //   }
  // }, [passwordInputValue]);
  // function handle submit form sign in
  const handleSubmitInput = async (e) => {
    e.preventDefault();
    // const email = validate(emailInputValue);
    // const pass = schema.validate(passwordInputValue);
    // email vailidation
    // if (email) {
    //   console.log('email is valid');
    // } else {
    //   console.log('email is not valid');
    // }
    // // password validation
    // if (pass) {
    //   console.log('password is valid');
    // } else {
    //   console.log('password is not valid');
    // }
  };

  return (
    <div>
      <div className="">
        <img
          onClick={() => router.push('/')}
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
          className=" cursor-pointer w-[120px] object-contain mx-auto mt-2 "
        />
      </div>
      <div className="w-[30%] border  rounded-md py-2 px-3 mx-auto">
        <h1 className="text-3xl font-semibold px-5 py-4">Sign In</h1>
        <form className="">
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">E-mail:</label>
            <input
              onChange={(e) => setEmailInputValue(e.target.value)}
              type="email"
              placeholder="example@gmail.com"
              className="py-2 bg-gray-200 outline-none  px-5 tracking-wide"
            />
          </div>
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">Password:</label>
            <input
              onChange={(e) => setPasswordInputValue(e.target.value)}
              type="password"
              placeholder="********"
              className="py-2 bg-gray-200 outline-none  px-5 tracking-wide"
            />
          </div>
          <div className=" py-4 px-4">
            <input type="checkbox" id="checkagree" />
            <label htmlFor="checkagree" className="text-sm ml-2">
              By continuing, you agree to Amazon&apos;s Conditions of Use and
              Privacy Notice.
            </label>
          </div>
          <div className="px-4 py-2 pb-4">
            <button
              onClick={(e) => handleSubmitInput(e)}
              className="py-2 border  w-full bg-amber-400 "
            >
              Sign In
            </button>
          </div>
        </form>
        <div
          onClick={() => router.push('/signup')}
          className="px-5 py-2 cursor-pointer w-fit hover:text-blue-700 text-xs text-blue-800"
        >
          Create New Account
        </div>
      </div>
    </div>
  );
}

export default Login;
