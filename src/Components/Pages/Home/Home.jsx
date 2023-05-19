import React from "react";
import Banner from "./Banner";
import useTitle from "../../../Hooks/useTitle";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";

const Home = () => {
	useTitle("Home");

	return (
		<div>
			<Banner />
            <Gallery />
			<Testimonial />
		</div>
	);
};

export default Home;
