import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { validate } from 'email-validator';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
var passwordValidator = require('password-validator');

var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(['12345', 'qweqweqwe', 'asdasdasd']);
function checkUppercase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toUpperCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}
function checkLowercase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toLowerCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}
function hasWhiteSpace(s) {
  return /\s/g.test(s);
}
function hasNumber(myString) {
  return /\d/.test(myString);
}
function SignUp() {
  // get input value EMAIL and PASSWORD
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState('');
  const [revealTypedPassword, setRevealTypedPassword] = useState(false);
  const [revealTypedConfirmPassword, setRevealTypedConfirmPassword] =
    useState(false);

  //password validation friendly UI
  const [passwordShowValidation, setPasswordShowValidation] = useState({
    hasEightLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasDigit: false,
  });
  const router = useRouter();
  useEffect(() => {
    if (passwordInputValue) {
      if (passwordInputValue.length === 8) {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasEightLength: true };
        });
      } else if (passwordInputValue.length < 8) {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasEightLength: false };
        });
      }
      if (checkUppercase(passwordInputValue)) {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasUpperCase: true };
        });
      } else {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasUpperCase: false };
        });
      }
      if (checkLowercase(passwordInputValue)) {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasLowerCase: true };
        });
      } else {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasLowerCase: false };
        });
      }
      // if (hasWhiteSpace(passwordInputValue)) {
      //   setPasswordShowValidation((prev) => {
      //     return { ...prev, hasWhiteSpace: true };
      //   });
      // } else {
      //   setPasswordShowValidation((prev) => {
      //     return { ...prev, hasWhiteSpace: false };
      //   });
      // }
      if (hasNumber(passwordInputValue)) {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasDigit: true };
        });
      } else {
        setPasswordShowValidation((prev) => {
          return { ...prev, hasDigit: false };
        });
      }
    } else {
      setPasswordShowValidation((prev) => {
        return {
          hasEightLength: false,
          hasUpperCase: false,
          hasLowerCase: false,
          hasDigit: false,
        };
      });
    }
  }, [passwordInputValue]);
  // function handle submit form sign in
  const handleSubmitInput = async (e) => {
    e.preventDefault();
    const email = validate(emailInputValue);
    const pass = schema.validate(passwordInputValue);
    // compare password and confirm-password
    if (passwordInputValue !== confirmPasswordInputValue) {
      console.log('you pass need to be equal');
      return;
    }
    if (email && pass) {
      // create the new user here
      createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
        .then(async (userCredential) => {
          // Automatic signed in
          // User are in
          // it will store in auth object
          // you might want to store some user information to database
          // since this is the firebase authentication only it wont store user info to the database
          const user = userCredential.user;
          console.log(userCredential.user.uid);
          await setDoc(doc(db, 'user', userCredential.user.uid), {
            name: 'user one',
          });
          setEmailInputValue('');
          setPasswordInputValue('');
          router.push('/');
        })
        .catch((error) => {
          // if it is not went successfully
          // either let the user know that they did not successfully create account
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
        });
      console.log('you pass the check');
    } else {
      // if both password and email not pass-checked
      console.log('please use the correct format with email and password');
    }
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
        <h1 className="text-3xl font-semibold px-5 py-4">Sign Up</h1>
        <form className="">
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">E-mail:</label>
            <input
              onChange={(e) => setEmailInputValue(e.target.value)}
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="py-2 bg-gray-200 outline-none  px-5 tracking-wide"
            />
          </div>
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">Password:</label>
            <div className="relative">
              <input
                onChange={(e) => setPasswordInputValue(e.target.value)}
                type={`${revealTypedPassword ? 'text' : 'password'}`}
                id="password"
                placeholder="********"
                className="py-2 bg-gray-200 outline-none w-full  px-5 tracking-wide"
              />

              {revealTypedPassword ? (
                <VisibilityIcon
                  onClick={() => setRevealTypedPassword(!revealTypedPassword)}
                  className="w-6 h-6 text-gray-400 absolute right-2 cursor-pointer hover:text-gray-500 transition-all duration-300 top-2"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => setRevealTypedPassword(!revealTypedPassword)}
                  className="w-6 h-6 text-gray-400 absolute right-2 cursor-pointer hover:text-gray-500 transition-all duration-300 top-2"
                />
              )}
            </div>
            {/* Check if all validations meet expectation */}
            {/* or else if it all true it will hide all the validation error */}
            {Object.entries(passwordShowValidation)
              .map((item) => item[1] === true)
              .every((item) => item == true) ? (
              ''
            ) : (
              <div className="text-xs tracking-wide">
                <p
                  className={` ${
                    passwordShowValidation.hasEightLength
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  at least eight characters
                </p>
                <p
                  className={` ${
                    passwordShowValidation.hasLowerCase
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  at least one lowercase abc...etc
                </p>
                <p
                  className={` ${
                    passwordShowValidation.hasUpperCase
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  at least one uppercase ABC...etc
                </p>
                <p
                  className={` ${
                    passwordShowValidation.hasDigit
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  at least one numeric 1234...etc
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">Confirm Password:</label>
            <div className="relative">
              <input
                id="confirmpassword"
                onChange={(e) => setConfirmPasswordInputValue(e.target.value)}
                type={`${revealTypedConfirmPassword ? 'text' : 'password'}`}
                placeholder="********"
                className="py-2 bg-gray-200 outline-none w-full  px-5 tracking-wide"
              />
              {revealTypedConfirmPassword ? (
                <VisibilityIcon
                  onClick={() =>
                    setRevealTypedConfirmPassword(!revealTypedConfirmPassword)
                  }
                  className="w-6 h-6 text-gray-400 absolute right-2 cursor-pointer hover:text-gray-500 transition-all duration-300 top-2"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() =>
                    setRevealTypedConfirmPassword(!revealTypedConfirmPassword)
                  }
                  className="w-6 h-6 text-gray-400 absolute right-2 cursor-pointer hover:text-gray-500 transition-all duration-300 top-2"
                />
              )}
            </div>
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
              Sign Up
            </button>
          </div>
        </form>
        <div
          onClick={() => router.push('/login')}
          className="px-5 py-2 cursor-pointer w-fit hover:text-blue-700 text-xs text-blue-800"
        >
          Login Instead?
        </div>
      </div>
    </div>
  );
}

export default SignUp;
