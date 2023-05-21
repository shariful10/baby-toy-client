import React from "react";

const AboutUs = () => {
	return (
		<div className="my-[50px] md:my-[130px] mx-5 md:mx-0 grid md:grid-cols-2 gap-10 items-center">
			<img className="rounded-lg shadow-2xl" src="https://i.ibb.co/GpCZ97s/about.jpg" alt="" />
			<div>
				<h2 className="text-5xl font-bold mb-[50px]">About Us</h2>
				<p className="text-[16px]">
					Baby Toy is a reputable toy car company specializing in high-quality,
					imaginative, and safe products for young children. Our extensive range of
					vibrant and detailed toy cars encourages creativity and provides endless hours
					of fun. We prioritize child development by incorporating educational elements
					into our designs, helping enhance motor skills and cognitive abilities. Safety
					is paramount, and all our toy cars undergo rigorous testing to exceed industry
					standards. With a diverse collection of vehicles, Baby Toy offers options for
					every interest and preference, making us the trusted choice for parents and
					caregivers seeking exceptional toys that inspire imagination.
				</p>
                <button className="btn-bnr">Learn More</button>
			</div>
		</div>
	);
};

export default AboutUs;
