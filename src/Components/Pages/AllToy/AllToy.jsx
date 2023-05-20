import React from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";
import useTitle from './../../../Hooks/useTitle';

const AllToy = () => {
	const toys = useLoaderData();
	useTitle('All Toys')

	return (
		<div className="mt-[30px] md:mt-[50px]">
			<div
				style={{ backgroundImage: "url(https://i.ibb.co/XYcTBt4/bg.jpg)" }}
				className="py-[80px] md:py-[100px] rounded-lg">
				<h1 className="text-center text-5xl md:text-7xl font-bold text-white">All Toys</h1>
			</div>
			<div className="my-[50px] md:my-[130px]">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr className="md:text-center">
							<th>Name</th>
							<th>Category</th>
							<th>Price</th>
                            <th>Details</th>
						</tr>
					</thead>
					<tbody>
						{toys.map((toy, index) => (
							<Toys key={index} toy={toy}></Toys>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToy;
