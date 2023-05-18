import React from "react";
import Banner from "./Banner";
import useTitle from "../../../Hooks/useTitle";
import Gallery from "./Gallery";

const Home = () => {
	useTitle("Home");

	return (
		<div>
			<Banner />
            <Gallery />
		</div>
	);
};

export default Home;
