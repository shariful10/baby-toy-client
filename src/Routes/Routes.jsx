import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import App from "./../App";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Components/Pages/Blog";
import Login from "../Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
