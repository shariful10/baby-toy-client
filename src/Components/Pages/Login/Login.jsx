import React from "react";
import useTitle from "../../../Hooks/useTitle";
import { Link } from "react-router-dom";

const Login = () => {
	useTitle("Login");

	return (
		<div>
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[140px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">Login</h1>
			</div>
			<div className="mx-5 md:mx-0 md:flex justify-between items-center my-[50px] md:my-[130px]">
				<img className="md:w-[45%]" src="https://i.ibb.co/h1gNy8C/login1.png" alt="" />
				<div className="md:w-[45%] border border-[#60B9B0] p-[50px] rounded-lg mt-5 md:mt-0">
					<h2 className="text-3xl md:text-5xl text-center font-semibold text-[#60B9B0] mb-5">
						Login
					</h2>
					<form>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your email
							</label>
							<input
								type="email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								placeholder="Your Email"
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Your Password"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
							/>
						</div>
						<button type="submit" className="btn-submit">
							Login
						</button>
					</form>
					<h3 className="text-center my-5 text-[18px] font-medium">Or Sign In With</h3>
					<div className="text-center">
						<button
							type="button"
							class="text-white bg-[#60B9B0] hover:bg-[#FE6C6B] focus:ring-4 focus:outline-none font-medium rounded-lg text-[18px] px-5 py-3 text-center inline-flex items-center">
							<svg
								class="w-4 h-4 mr-2 -ml-1"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="google"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512">
								<path
									fill="currentColor"
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
							</svg>
							Sign in with Google
						</button>
					</div>
					<p className="text-center mt-5">
						Don't Have An Account?{" "}
						<Link to="/signup">
							<span className="text-[#60B9B0] hover:text-[#FE6C6B] font-semibold">
								Sign Up
							</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
