import React from "react";
import { Link } from "react-router-dom";

const Toys = (toy) => {
	const { name, category, price, quantity, seller } = toy.toy;
	console.log(toy.toy);

	return (
		<>
			<tr>
				<td>{seller}</td>
				<td>{name}</td>
				<td>{category}</td>
				<td>{price}</td>
				<td>{quantity}</td>
				<td>
					<Link to="">
						<button className="btn-update">View Details</button>
					</Link>
				</td>
			</tr>
		</>
	);
};

export default Toys;
