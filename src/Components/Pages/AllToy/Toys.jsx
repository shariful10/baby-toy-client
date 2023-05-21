import React from "react";
import { Link } from "react-router-dom";

const Toys = (toy) => {
	const { _id, name, category, price, quantity, seller } = toy.toy;

	return (
		<>
			<tr>
				<td>{name}</td>
				<td>{seller}</td>
				<td>{category}</td>
				<td>{price}</td>
				<td>{quantity}</td>
				<td>
					<Link to={`/details/${_id}`}>
						<button className="btn-update">View Details</button>
					</Link>
				</td>
			</tr>
		</>
	);
};

export default Toys;
