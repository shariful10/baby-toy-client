import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
	useTitle("Blog");

	return (
		<div className="grid md:grid-cols-2 gap-6">
			<div
				href="#"
				class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					What is an access token and refresh token? How do they work and where should we store them on the client-side?
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					Access Token: An access token is a short-lived credential that proves a user or application's authentication and authorization to access 
                    protected resources on an API or server.
				</p>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					Refresh Token: A refresh token is a long-lived credential used to obtain a
					newaccess token without requiring the user to reauthenticate, enhancing security by minimizing the exposure of the access token.
				</p>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					Access tokens can be stored in memory or short-lived storage mechanisms 
                    like sessions or cookies. Refresh tokens should be securely stored 
                    in an HTTP-only cookie with secure and HTTPS-only settings. 
                    Following security best practices is crucial to prevent 
                    unauthorized access.
				</p>
			</div>
			<div
				href="#"
				class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Compare SQL and NoSQL databases?
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400">
                    SQL databases are suited for structured data with complex relationships and require strong consistency and transactional support. NoSQL databases are suitable for handling unstructured or semi-structured data, offering scalability and flexibility at the expense of strict consistency guarantees. The choice between SQL and NoSQL depends on the specific requirements of the application and the nature of the data being stored and accessed.
				</p>
			</div>
			<div
				href="#"
				class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is express js? What is Nest JS?
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in
					reverse chronological order.
				</p>
			</div>
			<div
				href="#"
				class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    What is MongoDB aggregate and how does it work?
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in
					reverse chronological order.
				</p>
			</div>
		</div>
	);
};

export default Blog;
