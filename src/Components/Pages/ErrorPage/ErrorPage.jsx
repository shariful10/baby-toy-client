import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="max-w-7xl mx-auto my-[50px] md:my-[130px]">
			<img
				className="px-4 md:px-0 w-full md:w-2/5 mx-auto"
				src="https://i.ibb.co/RpMGvy2/error.jpg"
				alt="Image Error"
			/>
			<div className="text-center">
				<Link to="/">
					<button className="btn-bnr">Back to Home</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
