import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AddAToy = () => {
	useTitle("Add a Toy");

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
				<div className="my-[50px] md:my-[130px]"></div>
			</div>
		</div>
	);
};

export default AddAToy;
