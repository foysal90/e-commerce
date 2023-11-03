

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const Signin = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="w-full text-center m-auto my-5 max-w-md p-4 rounded-md shadow-2xl sm:p-8 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
      <p className="text-sm text-center dark:text-gray-400">
        Don't have an account?{" "}
        <Link to={"/signup"} className="focus:underline hover:underline">
          Sign up here
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
        <button
          aria-label="Login with GitHub"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
        >
          <p>Login with GitHub</p>
        </button>
        <button
          aria-label="Login with Twitter"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
        >
          <p>Login with Twitter</p>
        </button>
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-gray-400" />
        <p className="px-3 dark:text-gray-400">OR</p>
        <hr className="w-full dark:text-gray-400" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Link to="#" className="text-xs hover:underline dark:text-gray-400">
                Forgot password?
              </Link>
            </div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              )}
            />
          </div>
        </div>
        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;

























// import React from "react";

// import { Link } from "react-router-dom";

// const Signin = () => {
//   return (
//     <div className="w-full text-center m-auto my-5 max-w-md p-4 rounded-md shadow-2xl sm:p-8 dark:bg-gray-900 dark:text-gray-100">
// 	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
// 	<p className="text-sm text-center dark:text-gray-400">Dont have account?
// 		<Link href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</Link>
// 	</p>
//       <div className="my-6 space-y-4">
// 		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
// 			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
// 				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
// 			</svg>
// 			<p>Login with Google</p>
// 		</button>
// 		<button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
			
// 			<p>Login with GitHub</p>
// 		</button>
// 		<button aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
			
// 			<p>Login with Twitter</p>
// 		</button>
// 	</div>
//   <div className="flex items-center w-full my-4">
// 		<hr className="w-full dark:text-gray-400"/>
// 		<p className="px-3 dark:text-gray-400">OR</p>
// 		<hr className="w-full dark:text-gray-400"/>
// 	</div>
// 	<form novalidate="" action="" className="space-y-8">
// 		<div className="space-y-4">
// 			<div className="space-y-2">
// 				<label for="email" className="block text-sm">Email address</label>
// 				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"  />
// 			</div>
// 			<div className="space-y-2">
// 				<div className="flex justify-between">
// 					<label for="password" className="text-sm">Password</label>
// 					<Link rel="noopener noreferrer" to="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
// 				</div>
// 				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
// 			</div>
// 		</div>
// 		<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
// 	</form>




     
//     </div>
//   );
// };

// export default Signin;


/*
<div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col ">
  <div className="text-center lg:text-left">
    <h1 className="text-5xl font-bold">Login now!</h1>
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <Link href="#" className="label-text-alt link link-hover">
            Forgot password?
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</div>
</div>
*/
