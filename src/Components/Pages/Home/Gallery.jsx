import React from "react";

const Gallery = () => {
	return (
		<div className="my-[50px] md:my-[130px] mx-5 md:mx-0">
			<h2 className="text-5xl text-center font-bold mb-[50px]">Toy Gallery</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="grid gap-4">
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/9cTv0jJ/car2.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/Fnd4jQ4/car1.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/kSWrmTY/car8.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/YB0cYw6/car3.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/2SZVHbz/car13.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/jJJfDm4/car6.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/kGp7X22/car7.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/Xj0p4pf/car14.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/xFLDXSn/car9.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-4">
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/kDyH6Lq/car10.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/82Pkr4z/car11.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="h-full w-full rounded-lg border"
							src="https://i.ibb.co/9vvXvk4/car12.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
