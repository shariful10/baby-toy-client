import React from "react";
import Banner from "./Banner";
import useTitle from "../../../Hooks/useTitle";

const Home = () => {
	useTitle("Home");

	return (
		<div>
			<Banner />
		</div>
	);
};

export default Home;
