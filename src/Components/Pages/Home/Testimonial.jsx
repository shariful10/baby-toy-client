import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

const Testimonial = () => {
	return (
		<div className="my-[50px] md:my-[130px] mx-5 md:mx-0">
			<h2 className="text-5xl text-center font-bold mb-[50px]">Testimonial</h2>
			<div className="w-full md:flex justify-between gap-6">
				<div className="bg-[#60B9B0] p-10 shadow-2xl rounded-lg text-white mb-5 md:mb-0">
					<img
						className="h-16 w-16 rounded-[50%] mb-5"
						src="https://i.ibb.co/M6scNfp/profile1.jpg"
						alt=""
					/>
					<h4 className="text-4xl">John Doe</h4>
					<div className="flex my-3 gap-1">
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStarHalf className="text-warning" />
					</div>
					<p className="text-[16px]">
						Fantastic toy cars! Inspires imagination, promotes motor skills, and ensures safety. Highly recommended!
					</p>
				</div>
				<div className="bg-[#60B9B0] p-10 shadow-2xl rounded-lg text-white mb-5 md:mb-0">
					<img
						className="h-16 w-16 rounded-[50%] mb-5"
						src="https://i.ibb.co/WDTd3CK/w.jpg"
						alt=""
					/>
					<h4 className="text-4xl">Ema Watson</h4>
					<div className="flex my-3 gap-1">
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
					</div>
					<p className="text-[16px]">
						Fantastic toy cars! Inspires imagination, promotes motor skills, and ensures safety. Highly recommended!	
					</p>
				</div>
				<div className="bg-[#60B9B0] p-10 shadow-2xl rounded-lg text-white">
					<img
						className="h-16 w-16 rounded-[50%] mb-5"
						src="https://i.ibb.co/QfSLDMF/profile3.jpg"
						alt=""
					/>
					<h4 className="text-4xl">Dwayne Johnson</h4>
					<div className="flex my-3 gap-1">
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaStar className="text-warning" />
						<FaRegStar className="text-warning" />
					</div>
					<p className="text-[16px]">
						Fantastic toy cars! Inspires imagination, promotes motor skills, and ensures safety. Highly recommended!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
