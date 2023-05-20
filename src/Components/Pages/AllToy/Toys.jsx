import React from "react";

const Toys = (toy) => {
	const { name, category, price, quantity } = toy.toy;
	console.log(toy.toy);

	return (
		<>
			<tr className="md:text-center">
				<td>{name}</td>
				<td>{category}</td>
				<td>{price}</td>
				<td>{quantity}</td>
				<td>
					<button className="btn-update">Details</button>
				</td>
			</tr>
		</>
	);
};

export default Toys;
