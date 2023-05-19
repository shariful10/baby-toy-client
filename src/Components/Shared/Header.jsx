import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiOutlineX, HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};

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
							to="/signup"
							className={({ isActive }) => (isActive ? "active" : "default")}>
							Sign Up
						</NavLink>
					</li>
					{user ? (
						<li
							onClick={handleLogOut}
							className="text-white hover:text-[#f98888] font-medium">
							Log Out
						</li>
					) : (
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) => (isActive ? "active" : "default")}>
								Login
							</NavLink>
						</li>
					)}
				</ul>
				{user && (
					<img
						title={user?.displayName}
						src={user?.photoURL}
						className="h-10 w-10 rounded-[50%]"
						alt=""
					/>
				)}
				{/* Mobile Navbar Section  */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="text-white"
						onClick={() => setIsOpen(true)}>
						<HiMenu className="w-5 text-White" />
					</button>
					{isOpen && (
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
											className="text-white"
											onClick={() => setIsOpen(false)}>
											<HiOutlineX className="w-5 text-white" />
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
										{user ? (
											<li className="text-white hover:text-[#f98888] font-medium">
												Log Out
											</li>
										) : (
											<li>
												<NavLink
													to="/login"
													className={({ isActive }) =>
														isActive ? "active" : "default"
													}>
													Login
												</NavLink>
											</li>
										)}
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
