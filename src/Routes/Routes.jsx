import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import App from "./../App";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Components/Pages/Blog/Blog";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import AllToy from "../Components/Pages/AllToy/AllToy";
import AddAToy from "../Components/Pages/AddAToy/AddAToy";
import MyToy from './../Components/Pages/MyToy/MyToy';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
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
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "/alltoy",
				element: <AllToy />,
			},
			{
				path: "/addtoy",
				element: <AddAToy />,
			},
			{
				path: "/mytoy",
				element: <MyToy />,
			},
		],
	},
]);

export default router;
