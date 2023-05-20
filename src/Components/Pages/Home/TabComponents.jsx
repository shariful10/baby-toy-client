import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabData from "./TabData";

const TabComponents = () => {
	const toys = useLoaderData();

	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const handleTabChange = (index) => {
		setActiveTabIndex(index);
	};

	const filteredToys = toys.filter((toy) => {
		if (activeTabIndex === 0) {
			return toy.category === "sports";
		} else if (activeTabIndex === 1) {
			return toy.category === "cartoon";
		} else if (activeTabIndex === 2) {
			return toy.category === "police";
		}
		return false;
	});

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-5xl font-bold text-center mb-[50px]">Toy Category</h1>
			<div className=" mx-auto">
				<Tabs selectedIndex={activeTabIndex} onSelect={handleTabChange}>
					<TabList className="flex p-4 bg-[#60B9B0] justify-center rounded-lg max-w-sm mx-auto gap-2 mb-10">
						<Tab
							name="sports"
							className={`py-2 px-4 rounded-md cursor-pointer ${
								activeTabIndex === 0
									? "bg-[#FE6C6B] focus:outline-none text-white font-semibold"
									: "bg-gray-200 font-semibold text-[#FE6C6B]"
							}`}>
							Sports Car
						</Tab>
						<Tab
							name="sports"
							className={`py-2 px-4 rounded-md cursor-pointer ${
								activeTabIndex === 1
									? "bg-[#FE6C6B] focus:outline-none text-white font-semibold"
									: "bg-gray-200 font-semibold text-[#FE6C6B]"
							}`}>
							Cartoon Car
						</Tab>
						<Tab
							name="police"
							className={`py-2 px-4 rounded-md cursor-pointer ${
								activeTabIndex === 2
									? "bg-[#FE6C6B] focus:outline-none text-white font-semibold"
									: "bg-gray-200 font-semibold text-[#FE6C6B]"
							}`}>
							Police Car
						</Tab>
					</TabList>
					<TabPanel className="">
						<div className="grid md:grid-cols-3 gap-6">
							{filteredToys.slice(0, 3).map((toy, index) => (
								<TabData key={index} toy={toy}></TabData>
							))}
						</div>
					</TabPanel>
					<TabPanel className="">
						<div className="grid md:grid-cols-3 gap-6">
							{filteredToys.slice(0, 3).map((toy, index) => (
								<TabData key={index} toy={toy}></TabData>
							))}
						</div>
					</TabPanel>
					<TabPanel className="">
						<div className="grid md:grid-cols-3 gap-6">
							{filteredToys.slice(0, 3).map((toy, index) => (
								<TabData key={index} toy={toy}></TabData>
							))}
						</div>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default TabComponents;
