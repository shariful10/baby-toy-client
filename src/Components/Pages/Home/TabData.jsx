import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const TabData = (toy) => {
	const { _id, img, name, price, rating } = toy.toy;

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
								emptySymbol={<FaRegStar className="h-5 w-5" />}
								placeholderSymbol={<FaStar className="text-warning h-5 w-5" />}
								fullSymbol={<FaStar className="h-5 w-5" />}></Rating>
							<span className="ml-2 text-[18px] font-medium">{rating}</span>
						</div>
					</div>
					<Link to={`/details/${_id}`}>
						<button className="btn-delete">View Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TabData;
