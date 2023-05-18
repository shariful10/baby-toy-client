import React from "react";
import Header from "../Components/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

const Main = () => {
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Main;
