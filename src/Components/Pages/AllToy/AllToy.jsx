import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";
import useTitle from "./../../../Hooks/useTitle";

const AllToy = () => {
	const AllToys = useLoaderData();
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredToys, setFilteredToys] = useState(AllToys);
	useTitle("All Toys");
	console.log(AllToys);

	const handleSearch = () => {
		const filtered = AllToys.filter(
			(toy) =>
				toy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				toy.seller.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredToys(filtered);
	};

	return (
		<div className="mt-[30px] md:mt-[50px]">
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[80px] md:py-[100px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">All Toys</h1>
			</div>
			<div className="my-[50px] md:my-[130px] mx-5 md:mx-0">
				<div className="text-center mb-10">
					<div className="form-control">
						<div className="input-group md:justify-end">
							<input
								type="text"
								name="text"
								placeholder="Search..."
								className="input input-bordered"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button onClick={handleSearch} className="btn-update">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>Name</th>
							<th>Seller</th>
							<th>Category</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{filteredToys.map((toy, index) => (
							<Toys key={index} toy={toy}></Toys>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToy;
