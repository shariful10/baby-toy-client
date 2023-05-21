import React, { useContext } from "react";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAToy = () => {
	const { user } = useContext(AuthContext);
	useTitle("Add a Toy");

	const handleAddToy = (e) => {
		e.preventDefault();
		const form = e.target;
		const toy = form.toy.value;
		const name = form.name.value;
		const email = user?.email;
		const quantity = form.quantity.value;
		const price = form.price.value;
		const category = form.category.value;
		const msg = form.msg.value;
		const url = form.url.value;
		const addtoy = {
			name: toy,
			seller: name,
			img: url,
			quantity,
			email,
			price,
			category,
			description: msg,
		};
		console.log(addtoy);

		fetch("http://localhost:5000/addtoys", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(addtoy),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					toast.success("Successfully Added", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				}
			});
	};

	return (
		<div>
			<div className="mt-[30px] md:mt-[50px]">
				<div
					style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
					className="py-[80px] md:py-[100px] rounded-lg">
					<h1 className="text-center text-5xl md:text-7xl font-bold text-white">
						Add A Toy
					</h1>
				</div>
				<div className="card-body md:p-[97px] bg-[#F3F3F3] rounded-lg my-[50px] md:my-[130px]">
					<form onSubmit={handleAddToy}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="form-control">
								<input
									type="text"
									name="toy"
									// defaultValue={title}
									placeholder="Toy Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="text"
									name="name"
									defaultValue={user?.displayName}
									placeholder="Your Name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control mt-6">
								<input
									type="email"
									name="email"
									defaultValue={user?.email}
									placeholder="Your Email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control mt-6">
								<input
									type="number"
									name="quantity"
									placeholder="Quantity"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="number"
									name="price"
									placeholder="Price"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<input
									type="text"
									name="category"
									placeholder="Category Name"
									className="input input-bordered"
								/>
							</div>
						</div>
						<div className="form-control my-6">
							<input
								type="url"
								name="url"
								placeholder="Image URL"
								className="input input-bordered"
							/>
						</div>
						<textarea
							name="msg"
							className="textarea textarea-bordered w-full h-[250px]"
							placeholder="Toy Details"></textarea>
						<input className="btn-form mt-6" type="submit" value="Add Toy" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddAToy;
