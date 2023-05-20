import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Blog = () => {
	useTitle("Blog");

	return (
		<div className="mt-[30px] md:mt-[50px]">
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[140px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">Blog</h1>
			</div>
			<div className="grid md:grid-cols-2 gap-6 my-[50px] md:my-[130px]">
				<div
					href="#"
					className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						What is an access token and refresh token? How do they work and where should
						we store them on the client-side?
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Access Token: An access token is a short-lived credential that proves a user
						or application's authentication and authorization to access protected
						resources on an API or server.
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400 my-3">
						Refresh Token: A refresh token is a long-lived credential used to obtain a
						newaccess token without requiring the user to reauthenticate, enhancing
						security by minimizing the exposure of the access token.
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Access tokens can be stored in memory or short-lived storage mechanisms like
						sessions or cookies. Refresh tokens should be securely stored in an
						HTTP-only cookie with secure and HTTPS-only settings. Following security
						best practices is crucial to prevent unauthorized access.
					</p>
				</div>
				<div
					href="#"
					className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Compare SQL and NoSQL databases?
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						SQL databases are suited for structured data with complex relationships and
						require strong consistency and transactional support. NoSQL databases are
						suitable for handling unstructured or semi-structured data, offering
						scalability and flexibility at the expense of strict consistency guarantees.
						The choice between SQL and NoSQL depends on the specific requirements of the
						application and the nature of the data being stored and accessed.
					</p>
				</div>
				<div
					href="#"
					className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						What is express js? What is Nest JS?
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Express.js: Express.js is a lightweight and flexible web application
						framework for Node.js. It simplifies the development of web servers by
						providing a minimalistic approach and a robust middleware ecosystem.
					</p>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						NestJS: NestJS is a TypeScript-based framework for building scalable and
						maintainable server-side applications. It follows the MVC pattern and
						provides a structured and modular approach to development, leveraging the
						power of TypeScript.
					</p>
				</div>
				<div
					href="#"
					className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						What is MongoDB aggregate and how does it work?
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						MongoDB's aggregate is a feature that allows you to perform advanced data
						aggregation operations on collections. It uses a pipeline of stages to
						transform and analyze data. Each stage applies a specific operation, and the
						output of one stage serves as the input for the next stage. The aggregate
						framework enables powerful querying, grouping, sorting, and calculation
						capabilities within MongoDB.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
