import React from "react";
import { FaStar } from "react-icons/fa";

const TabData = (toy) => {
	const { img, name, price, rating } = toy.toy;

	return (
		<div className="card card-compact w-full bg-[#60B9B0] shadow-xl p-2">
			<figure>
				<img className="w-full h-[300px] rounded-lg" src={img} alt="Toy" />
			</figure>
			<div className="card-body text-white">
				<h2 className="card-title">Name: {name}</h2>
				<p className="text-[18px] font-medium">Price: {price}</p>
				<p className="text-[18px] font-medium">Price: {price}</p>
				<div className="flex">
					<p className="text-[18px] font-medium">
						Ratings: {rating}
					</p>
					<button className="btn-delete">Details</button>
				</div>
			</div>
		</div>
	);
};

export default TabData;
