import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";

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
				<div className="flex items-center">
					<div className="flex-grow">
						<div className="flex items-center">
							<Rating
								placeholderRating={rating}
								readonly
								emptySymbol={<FaRegStar />}
								placeholderSymbol={<FaStar className="text-warning" />}
								fullSymbol={<FaStar />}></Rating>
							<span className="ml-2 text-[18px] font-medium">{rating}</span>
						</div>
					</div>
					<button className="btn-delete">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default TabData;
