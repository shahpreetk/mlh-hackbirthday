// @ts-check
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-10 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-auto w-auto"
                src="/assets/cake_Flags_noBg.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-1">
                    <div>
                      <a
                        href="/"
                        className="w-full inline-flex justify-center py-2 px-4 border border-none rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-white"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <img src="/assets/sign_in_with_google.png" alt="Sign In with Google" />
                      </a>
                    </div>

                  </div>
                </div>

                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a href="/" className="font-medium text-rose-600 hover:text-rose-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    >
                      Sign in
                    </button>
                    <div className="text-md mt-4">
                      Don't have an Account?{" "}
                      <Link to="/signup" className="underline font-medium text-sky-700 hover:text-sky-900">
                        Sign Up instead!
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img className="transform rotate-90 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ::before" src="/assets/wave.png" alt="wave" />
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1617393992486-fa01f9ae0524"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;


// <div className="lg:w-2/6 md:w-1/2 bg-red-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
//         <h2 className="text-rose-900 text-lg font-bold title-font mb-5">
//           Login 🎉
//         </h2>
//         <div className="relative mb-4">
//           <label
//             htmlFor="email"
//             className="leading-7 text-sm text-gray-800"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//         <div className="relative mb-4">
//           <label
//             htmlFor="password"
//             className="leading-7 text-sm text-gray-800"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//         <Link to="/profile">
//           <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
//             Login
//           </button>
//         </Link>
//         <p className="text-sm text-gray-600 mt-3">
//           Don't have an account?{" "}
//           <span className="underline text-red-600 hover:text-red-800">
//             <Link to="/signup">Sign Up</Link>
//           </span>
//         </p>
//       </div> */}