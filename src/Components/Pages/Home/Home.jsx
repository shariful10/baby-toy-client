import React from "react";
import Banner from "./Banner";
import useTitle from "../../../Hooks/useTitle";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import TabComponents from "./TabComponents";

const Home = () => {
	useTitle("Home");

	return (
		<div>
			<Banner />
            <Gallery />
			<TabComponents />
			<Testimonial />
		</div>
	);
};

export default Home;
