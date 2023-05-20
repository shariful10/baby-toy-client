import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};

	const navItems = (
		<>
			<li>
				<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/alltoy"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					All Toys
				</NavLink>
			</li>
			{user && (
				<li>
					<NavLink
						to="/addtoy"
						className={({ isActive }) => (isActive ? "active" : "default")}>
						Add a Toy
					</NavLink>
				</li>
			)}
			{user && (
				<li>
					<NavLink
						to="/mytoy"
						className={({ isActive }) => (isActive ? "active" : "default")}>
						My Toy
					</NavLink>
				</li>
			)}
			<li>
				<NavLink
					to="/signup"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Sign Up
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/blog"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Blog
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="bg-[#60B9B0]">
			<div className="relative flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				{/* Logo Section */}
				<Link to="/" className="inline-flex items-center">
					<img
						className="h-12 w-12 border-4 border-white rounded-[50%]"
						src="https://i.ibb.co/qxm6rfq/favicon.png"
						alt=""
					/>
					<span className="ml-2 text-xl font-bold tracking-wide text-[#FE6C6B]">
						BabyToy
					</span>
				</Link>

				{/* Nav Items Section */}
				<ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>
				<div className="flex justify-center items-center gap-2">
					{user ? (
						<>
							<button
								onClick={handleLogOut}
								className="btn-hdr cursor-pointer hidden lg:block">
								Log Out
							</button>
							<img
								title={user?.displayName}
								src={user?.photoURL}
								className="h-10 w-10 rounded-[50%]"
								alt=""
							/>
						</>
					) : (
						<Link to="/login">
							<button className="btn-hdr">Login</button>
						</Link>
					)}
				</div>
				{/* Mobile Navbar Section  */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="text-white"
						onClick={() => setIsOpen(true)}>
						<HiMenu className="w-6 h-6 text-[#FE6C6B]" />
					</button>
					{isOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-5 bg-[#60B9B0] border rounded shadow-sm">
								{/* Logo & Button section */}
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to="/" className="inline-flex items-center">
											<img
												className="h-12 w-12 border-4 border-white rounded-[50%]"
												src="https://i.ibb.co/qxm6rfq/favicon.png"
												alt=""
											/>
											<span className="ml-2 text-xl font-bold tracking-wide text-[#FE6C6B]">
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
											<HiOutlineX className="w-6 h-6 text-[#FE6C6B]" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">
										{navItems}
										{user ? (
											<button
												onClick={handleLogOut}
												className="btn-hdr cursor-pointer">
												Log Out
											</button>
										) : (
											<Link to="/login">
												<button className="btn-hdr mt-3">Login</button>
											</Link>
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
