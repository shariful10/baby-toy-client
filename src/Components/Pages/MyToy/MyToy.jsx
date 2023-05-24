import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyToyRow from "./MyToyRow";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const MyToy = () => {
	const { user } = useContext(AuthContext);
	useTitle("My Toy");
	const [myToy, setMyToy] = useState([]);

	const url = `https://baby-toy-server-phi.vercel.app/addtoys?email=${user?.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyToy(data));
	}, []);

	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#60B9B0",
			cancelButtonColor: "#FE6C6B",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://baby-toy-server-phi.vercel.app/addtoys/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
							const remaining = myToy.filter((singleToy) => singleToy._id !== id);
							setMyToy(remaining);
						}
					});
			}
		});
	};

	return (
		<div className="overflow-x-auto w-full my-[50px] md:my-[130px]">
			<table className="table w-full">
				{/* head */}
				<thead>
					<tr>
						<th>Toy Image</th>
						<th>Toy Name</th>
						<th>Seller</th>
						<th>Price</th>
						<th>Email</th>
						<th>Quantity</th>
						<th>Delete</th>
						<th>Update</th>
					</tr>
				</thead>
				<tbody>
					{myToy.map((singleToy) => (
						<MyToyRow
							key={singleToy._id}
							singleToy={singleToy}
							handleDelete={handleDelete}></MyToyRow>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyToy;
