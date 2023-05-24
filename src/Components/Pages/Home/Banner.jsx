import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
	return (
		<div className="carousel w-full mt-[30px] md:mt-[50px]">
			<div id="slide1" className="carousel-item relative w-full">
				<img src="https://i.ibb.co/1LpR9V9/banner1.png" className="w-full rounded-t-xl" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="p-3 bg-[#60B9B0] hover:bg-[#FE6C6B] rounded-full">
						<FaArrowLeft className="text-white" />
					</a>
					<a href="#slide2" className="p-3 bg-[#60B9B0] hover:bg-[#FE6C6B] rounded-full">
						<FaArrowRight className="text-white" />
					</a>
				</div>
				<div
					data-aos="fade-right"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
					className="absolute text-center top-[2rem] left-[67px] md:top-[18rem] md:left-44 text-white">
					<h2 className="text-3xl md:text-5xl font-bold md:mb-5">Get Ready For</h2>
					<h1 className="text-4xl md:text-7xl font-bold">New Toy Store</h1>
					<button className="btn-bnr">Shop Now</button>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full rounded-lg">
				<img src="https://i.ibb.co/92V641q/banner2.png" className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="p-3 bg-[#60B9B0] hover:bg-[#FE6C6B] rounded-full">
						<FaArrowLeft className="text-white" />
					</a>
					<a href="#slide1" className="p-3 bg-[#60B9B0] hover:bg-[#FE6C6B] rounded-full">
						<FaArrowRight className="text-white" />
					</a>
				</div>
				<div className="absolute text-center top-[2rem] left-[67px] md:top-[18rem] md:left-[42rem] text-white">
					<h2 className="text-3xl md:text-5xl font-bold md:mb-5">Big Discount</h2>
					<h1 className="text-4xl md:text-7xl font-bold">Amaizing Sale</h1>
					<button className="btn-bnr">Shop Now</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
