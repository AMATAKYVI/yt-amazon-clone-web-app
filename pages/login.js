import React from 'react';

function Login() {
  return (
    <div>
      <div className="">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
          className="w-[120px] object-contain mx-auto mt-2 "
        />
      </div>
      <div className="w-[30%] border h-[400px] rounded-md py-2 px-3 mx-auto">
        <h1 className="text-3xl font-semibold px-5 py-4">Sign In</h1>
        <form className="">
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">E-mail:</label>
            <input
              type="text"
              name=""
              id=""
              className="py-2 bg-gray-200 outline-none  px-5 tracking-wide"
            />
          </div>
          <div className="flex flex-col gap-1 py-5 px-5 border">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              name=""
              id=""
              className="py-2 bg-gray-200 outline-none  px-5 tracking-wide"
            />
          </div>
          <div>
            By continuing, you agree to Amazon&apos;s Conditions of Use and
            Privacy Notice.
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
