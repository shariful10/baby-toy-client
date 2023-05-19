import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="bg-[#60B9B0]">
			<div className="relative flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					<img
						className="h-8 w-8 border-4 border-white rounded-[50%]"
						src="https://i.ibb.co/qxm6rfq/favicon.png"
						alt=""
					/>
					<span className="ml-2 text-xl font-bold tracking-wide text-[#FE6C6B]">
						BabyToy
					</span>
				</Link>

				{/* Nav Items Section */}
				<ul className="items-center hidden space-x-8 lg:flex">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/login"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/signup"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Sign Up
						</NavLink>
					</li>
				</ul>
				{/* Mobile Navbar Section  */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}>
						<HiMenu className="w-5 text-gray-600" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-[#60B9B0] border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to="/" className="inline-flex items-center">
											<img
												className="h-8 w-8 border-4 border-white rounded-[50%]"
												src="https://i.ibb.co/qxm6rfq/favicon.png"
												alt=""
											/>
											<span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
												BabyToy
											</span>
										</Link>
									</div>
									{/* Dropdown menu close button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsMenuOpen(false)}>
											<HiOutlineX className="w-5 text-gray-600" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										<li>
											<NavLink
												to="/"
												className={({ isActive }) =>
													isActive ? "active" : "default"
												}>
												Home
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/signup"
												className={({ isActive }) =>
													isActive ? "active" : "default"
												}>
												Sign Up
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/login"
												className={({ isActive }) =>
													isActive ? "active" : "default"
												}>
												Login
											</NavLink>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
