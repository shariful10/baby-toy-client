import React from "react";
import useTitle from "../../../Hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
	useTitle("Toy Details");
	const toy = useLoaderData();
	console.log(toy);
	const { name, seller, rating, quantity, category, img, price, email, desc } = toy;

	return (
		<div className="mt-[30px] md:mt-[50px]">
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[80px] md:py-[100px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">
					Toy Details
				</h1>
			</div>
			<div className="my-[50px] md:my-[130px]">
				<div className="grid md:grid-cols-2 items-center rounded-lg p-5 bg-[#60B9B0]">
					<figure>
						<img className="rounded-lg w-full md:h-[450px]" src={img} alt="Movie" />
					</figure>
					<div className="card-body text-white">
						<h3 className="card-title">
							Toy Name: <span className="font-normal">{name}</span>
						</h3>
						<h3 className="card-title">
							Seller Name: <span className="font-normal">{seller}</span>
						</h3>
						<h3 className="card-title">
							Seller Email: <span className="font-normal">{email}</span>
						</h3>
						<h3 className="card-title">
							Price: <span className="font-normal">{price}</span>
						</h3>
						<h3 className="card-title">
							Quantity: <span className="font-normal">{quantity}</span>
						</h3>
						<h3 className="card-title">
							Category: <span className="font-normal">{category}</span>
						</h3>
						<div className="flex items-center">
							<h3 className="card-title">Ratings:</h3>
							<div className="flex items-center ml-2">
								<Rating
									className="mt-2"
									placeholderRating={rating}
									readonly
									emptySymbol={<FaRegStar className="h-5 w-5" />}
									placeholderSymbol={<FaStar className="text-warning h-5 w-5" />}
									fullSymbol={<FaStar className="h-5 w-5" />}></Rating>
								<span className="ml-2 text-[18px] font-medium">{rating}</span>
							</div>
						</div>
						<h3 className="card-title items-start">
							Details: <span className="font-normal">{desc}</span>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToyDetails;
