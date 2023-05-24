import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
	const { createUser, updateUserData, googleSignIn } = useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);
	useTitle("Sign Up");

	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const url = form.url.value;
		const password = form.password.value;
		console.log(name, email, url, password);
		if (password.length < 6) {
			toast.error("Password Must Be Minimum 6 Characters", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		createUser(email, password)
			.then((res) => {
				const createdUser = res.user;
				console.log(createdUser);
				toast.success("Successfully Created", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				updateUserData(createdUser, name, url)
					.then(() => {
						console.log("Successfully updated user data");
					})
					.catch((error) => {
						console.log("Error updating user data:", error);
					});
			})
			.catch((err) => {
				console.log(err);
				toast.error("Something went wrong", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};

	const handleGoogleLogin = () => {
		googleSignIn()
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				alert("Login successful");
				// navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				toast.error("Something went wrong", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};

	return (
		<div className="mt-[30px] md:mt-[50px]">
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[80px] md:py-[100px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">Sign Up</h1>
			</div>
			<div className="mx-5 md:mx-0 md:flex justify-between items-center my-[50px] md:my-[130px]">
				<img className="md:w-[45%]" src="https://i.ibb.co/h1gNy8C/login1.png" alt="" />
				<div className="md:w-[45%] border border-[#60B9B0] p-5 md:p-[50px] rounded-lg mt-5 md:mt-0">
					<h2 className="text-3xl md:text-5xl text-center font-semibold text-[#60B9B0] mb-5">
						Sign Up
					</h2>
					<form onSubmit={handleSignUp}>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								placeholder="Your Name"
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								placeholder="Your Email"
								required
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900">
								Photo URL
							</label>
							<input
								type="url"
								id="url"
								name="url"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								placeholder="Photo URL"
								required
							/>
						</div>
						<div className="mb-6">
							<div className="flex justify-between items-center">
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900">
									Your password
								</label>
								<span onClick={() => setShowPass(!showPass)} className="mr-2">
									{showPass ? <FaEyeSlash /> : <FaEye />}
								</span>
							</div>
							<input
								type={showPass ? "text" : "password"}
								id="password"
								name="password"
								placeholder="Your Password"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
								required
							/>
						</div>
						<button type="submit" className="btn-submit">
							Sign Up
						</button>
					</form>
					<h3 className="text-center my-5 text-[18px] font-medium">Or Sign In With</h3>
					<div className="text-center">
						<button
							type="button"
							onClick={handleGoogleLogin}
							className="text-white bg-[#60B9B0] hover:bg-[#FE6C6B] focus:ring-4 focus:outline-none font-medium rounded-lg text-[18px] px-5 py-3 text-center inline-flex items-center">
							<svg
								className="w-4 h-4 mr-2 -ml-1"
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
						Already Have An Account?{" "}
						<Link to="/login">
							<span className="text-[#60B9B0] hover:text-[#FE6C6B] font-semibold">
								Login
							</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
