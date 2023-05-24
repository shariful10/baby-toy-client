import React from "react";
import { Link } from "react-router-dom";

const MyToyRow = ({ singleToy, handleDelete }) => {
	const { _id, img, name, seller, price, email, quantity } = singleToy;

	return (
		<tr>
			<td>
				{img && (
					<img
						className="h-[150px] w-[150px] rounded-lg border-2 border-[#60B9B0]"
						src={img}
						alt="Toy Image"
					/>
				)}
			</td>
			<td>{name}</td>
			<td>{seller}</td>
			<td>${price}</td>
			<td>{email}</td>
			<td>{quantity} Pcs.</td>
			<td>
				<button onClick={() => handleDelete(_id)} className="btn-delete">
					Delete
				</button>
			</td>
			<td>
				<Link to={`/update/${_id}`}>
					<button className="btn-update2">Update</button>
				</Link>
			</td>
		</tr>
	);
};

export default MyToyRow;
