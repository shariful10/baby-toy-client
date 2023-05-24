import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const UpdateToy = () => {
	const { user } = useContext(AuthContext);
	const toyData = useLoaderData();
	const { _id, name, seller, rating, quantity, category, img, price, description } = toyData;
	console.log(toyData);
	useTitle("Update A Toy");

	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const toy = form.toy.value;
		const name = form.name.value;
		const email = user?.email;
		const quantity = form.quantity.value;
		const price = form.price.value;
		const category = form.category.value;
		const description = form.description.value;
		const img = form.url.value;
		const rating = form.rating.value;
		const updatedToy = {
			name: toy,
			seller: name,
			img,
			quantity,
			email,
			price,
			category,
			rating,
			description,
		};
		console.log(updatedToy);

		fetch(`https://baby-toy-server-phi.vercel.app/addtoys/${_id}`, {
			method: "PUT",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedToy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Toy updated successfully",
						icon: "success",
						confirmButtonText: "Ok",
						confirmButtonColor: "#60B9B0",
					});
				}
			});
	};

	return (
		<div className="mt-[30px] md:mt-[50px]">
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[80px] md:py-[100px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">
					Update A Toy
				</h1>
			</div>
			<div className="card-body md:p-[97px] bg-[#F3F3F3] rounded-lg my-[50px] md:my-[130px]">
				<form onSubmit={handleUpdate}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="form-control">
							<input
								type="text"
								name="toy"
								defaultValue={name}
								placeholder="Toy Name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="text"
								name="name"
								defaultValue={seller}
								placeholder="Your Name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="email"
								name="email"
								defaultValue={user?.email}
								placeholder="Your Email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="number"
								name="quantity"
								defaultValue={quantity}
								placeholder="Quantity"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="number"
								name="price"
								defaultValue={price}
								placeholder="Price"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="text"
								name="category"
								defaultValue={category}
								placeholder="Category Name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="url"
								name="url"
								defaultValue={img}
								placeholder="Image URL"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<input
								type="number"
								name="rating"
								defaultValue={rating}
								placeholder="Rating"
								className="input input-bordered"
							/>
						</div>
					</div>
					<textarea
						name="description"
						defaultValue={description}
						className="textarea textarea-bordered w-full h-[250px] mt-6 text-[16px]"
						placeholder="Toy Details"></textarea>
					<input className="btn-form mt-6" type="submit" value="Update Toy" />
				</form>
			</div>
		</div>
	);
};

export default UpdateToy;
