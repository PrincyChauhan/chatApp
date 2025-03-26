import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className="flex h-screen items-center justify-center"
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              gap: "12px",
            }}
            className="border border-gray-300 px-6 py-3 rounded-md"
          >
            <h1 className="text-2xl text-center">Login your account</h1>

            {/* Email Input */}
            <label className="input validator flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="flex-1"
              />
            </label>
            {/* Password Input */}
            <label className="input validator flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including a number, lowercase, and uppercase letter"
                className="flex-1"
              />
            </label>
            {/* Confirm Password Input */}

            <button
              type="submit"
              value="login"
              className="bg-gray-700 text-white py-2 rounded-md cursor-pointer"
            >
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <a href="/singup" className="text-blue-500">
                signup
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
