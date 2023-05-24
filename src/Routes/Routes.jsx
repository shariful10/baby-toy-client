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
import MyToy from "./../Components/Pages/MyToy/MyToy";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../Components/Pages/Home/ToyDetails";
import UpdateToy from "../Components/Pages/MyToy/UpdateToy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("https://baby-toy-server-phi.vercel.app/toys"),
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
				loader: () => fetch("https://baby-toy-server-phi.vercel.app/toys"),
			},
			{
				path: "/addtoy",
				element: (
					<PrivateRoutes>
						<AddAToy />
					</PrivateRoutes>
				),
			},
			{
				path: "/mytoy",
				element: (
					<PrivateRoutes>
						<MyToy />
					</PrivateRoutes>
				),
			},
			{
				path: "/details/:id",
				element: (
					<PrivateRoutes>
						<ToyDetails />
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`https://baby-toy-server-phi.vercel.app/toys/${params.id}`),
			},
			{
				path: "/update/:id",
				element: (
					<PrivateRoutes>
						<UpdateToy />
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`https://baby-toy-server-phi.vercel.app/addtoys/${params.id}`),
			},
		],
	},
]);

export default router;
