import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TabComponents = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const handleTabChange = (index) => {
		setActiveTabIndex(index);
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-5xl font-bold text-center mb-[50px]">Toy Category</h1>
			<div className=" mx-auto">
				<Tabs selectedIndex={activeTabIndex} onSelect={handleTabChange}>
					<TabList className="flex p-4 bg-[#60B9B0] justify-center rounded-lg max-w-sm mx-auto gap-2 mb-10">
						<Tab
							className={`py-2 px-4 rounded-md cursor-pointer ${
								activeTabIndex === 0 ? "bg-[#FE6C6B] focus:outline-none text-white font-semibold" : "bg-gray-200 font-semibold text-[#FE6C6B]"
							}`}>
							Sports Car
						</Tab>
						<Tab
							className={`py-2 px-4 rounded-md cursor-pointer ${
								activeTabIndex === 1 ? "bg-[#FE6C6B] focus:outline-none text-white font-semibold" : "bg-gray-200 font-semibold text-[#FE6C6B]"
							}`}>
							Cartoon Car
						</Tab>
						<Tab
							className={`py-2 px-4 rounded-md cursor-pointer ${
								activeTabIndex === 2 ? "bg-[#FE6C6B] focus:outline-none text-white font-semibold" : "bg-gray-200 font-semibold text-[#FE6C6B]"
							}`}>
							Police Car
						</Tab>
					</TabList>
					<TabPanel className="">
						<h2>Content for Tab 1</h2>
						<p>This is the content for Tab 1.</p>
					</TabPanel>
					<TabPanel className="">
						<h2>Content for Tab 2</h2>
						<p>This is the content for Tab 2.</p>
					</TabPanel>
					<TabPanel className="">
						<h2>Content for Tab 3</h2>
						<p>This is the content for Tab 3.</p>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default TabComponents;
