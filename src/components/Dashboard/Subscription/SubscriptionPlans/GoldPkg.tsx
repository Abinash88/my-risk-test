import React, { useState } from "react";
import {
	faChevronDown,
	faMinus,
	faPlus,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FakeDataItem {
	id: number;
	type: "item" | "benefit" | "extra";
	name?: string;
	qty?: number;
	price?: number;
	description?: string;
}

const fakeData: FakeDataItem[] = [
	{ id: 1, type: "item", name: "AI Generated risk profile", qty: 1, price: 4 },
	{ id: 2, type: "item", name: "Power System Risk", qty: 1, price: 4 },
	{
		id: 3,
		type: "benefit",
		description:
			"Interact with our T&O standings such as vote risk up/down, like and comment.",
	},
	{
		id: 4,
		type: "benefit",
		description:
			"Refer others to join and participate through our referral channel.",
	},
	{
		id: 5,
		type: "benefit",
		description: "Manage risks you have added to the T&O standings",
	},
	{
		id: 6,
		type: "extra",
		name: "AI Generated risk profile",
		qty: 1,
		price: 4,
	},
];

const GoldPkg: React.FC = () => {
	const [data, setData] = useState(fakeData);
	const [isBenefitsVisible, setIsBenefitsVisible] = useState(true);

	const handleIncrease = (id: number) => {
		setData((prevData) =>
			prevData.map((item) =>
				item.id === id && (item.type === "item" || item.type === "extra")
					? { ...item, qty: item.qty! + 1, price: (item.qty! + 1) * 4 }
					: item
			)
		);
	};

	const handleDecrease = (id: number) => {
		setData((prevData) =>
			prevData.map((item) =>
				item.id === id &&
				(item.type === "item" || item.type === "extra") &&
				item.qty! > 1
					? { ...item, qty: item.qty! - 1, price: (item.qty! - 1) * 4 }
					: item
			)
		);
	};

	const handleRemove = (id: number) => {
		setData((prevData) => prevData.filter((item) => item.id !== id));
	};

	return (
		<div className="bg-white border border-gray-500 shadow-md rounded-lg w-full pb-5">
			<div className="w-full bg-[#000080] text-white rounded-t-lg rounded-tr-lg p-3 mb-5">
				<h3 className="font-[600] text-[22px] mb-3">Gold Package</h3>
				<p className="text-[16px]">
					Comprehensive package to meet your requirements
				</p>
			</div>
			<div className="p-3">
				<div className="flex justify-between gap-4 text-[18px] font-[600] text-[rgba(0,0,0,0.7)] mb-2 text-center">
					<h4 className="w-[50%]">Item</h4>
					<h4 className="w-[25%]">Qty</h4>
					<h4 className="w-[12%]">£</h4>
				</div>
				<div className="flex flex-col gap-4">
					{data
						.filter((item) => item.type === "item")
						.map((item) => (
							<div
								key={item.id}
								className="text-white text-sm flex justify-between gap-4"
							>
								<div className="w-[52%] flex gap-1 items-center">
									<FontAwesomeIcon
										icon={faXmark}
										className="text-[#FF0000] text-[26px] cursor-pointer"
										onClick={() => handleRemove(item.id)}
									/>
									<p className="px-2 py-5 bg-[#6666b3] rounded-lg flex-1">
										{item.name}
									</p>
								</div>

								<div className="border border-[#6666b3] rounded-lg flex w-[25%]">
									<input
										type="number"
										className="h-full outline-none text-black bg-transparent w-[50%] pl-2 text-center"
										value={item.qty}
										readOnly
									/>
									<div className="bg-[#6666b3] h-full w-[50%] flex flex-col justify-between py-1 gap-3 text-[20px] rounded-r-lg">
										<FontAwesomeIcon
											icon={faPlus}
											className="cursor-pointer text-[#06DC1B]"
											onClick={() => handleIncrease(item.id)}
										/>
										<FontAwesomeIcon
											icon={faMinus}
											className="cursor-pointer text-[#FF0000]"
											onClick={() => handleDecrease(item.id)}
										/>
									</div>
								</div>
								<p className="px-1 bg-[#6666B3] flex justify-center items-center w-[12%] rounded-lg">
									{item.price}
								</p>
							</div>
						))}
				</div>
			</div>
			<div className="mt-5 px-3">
				<div
					className="flex justify-between gap-2 mb-4 cursor-pointer"
					onClick={() => setIsBenefitsVisible(!isBenefitsVisible)}
				>
					<h4 className="font-[600]">Other benefits</h4>
					<FontAwesomeIcon
						icon={faChevronDown}
						className={`${
							isBenefitsVisible ? "rotate-180" : ""
						} transition-transform duration-200`}
					/>
				</div>
				{isBenefitsVisible && (
					<div className="flex flex-col gap-3">
						{data
							.filter((item) => item.type === "benefit")
							.map((benefit) => (
								<p
									key={benefit.id}
									className="bg-[#6666B3] text-white p-3 rounded-lg"
								>
									{benefit.description}
								</p>
							))}
					</div>
				)}
			</div>
			<div className="my-5 px-3">
				<h3 className="bg-[#F0F0FF] font-[600] px-3 py-4 text-[25px] rounded-lg w-full text-center text-[#000080] ">
					Starting at £203
				</h3>
			</div>
			<div className="px-3 flex justify-center items-center">
				<button className="bg-[#000080] text-white font-[600] text-[19px] p-3  w-[70%] mr-auto ml-auto rounded-lg">
					Choose Plan
				</button>
			</div>
			<div className="my-5 px-3">
				<h3 className="bg-[#F0F0FF] font-[400] p-3 text-[20px] rounded-lg w-full text-center text-[#000080] mb-5">
					Extras
				</h3>
				<div className="flex flex-col gap-4">
					{data
						.filter((item) => item.type === "extra")
						.map((item) => (
							<div
								key={item.id}
								className="text-white text-sm flex justify-between gap-4"
							>
								<div className="w-[52%] flex gap-1 items-center">
									<FontAwesomeIcon
										icon={faPlus}
										className="cursor-pointer text-[#06DC1B]"
										onClick={() => handleIncrease(item.id)}
									/>
									<p className="px-2 py-5 bg-[#6666b3] rounded-lg flex-1">
										{item.name}
									</p>
								</div>

								<div className="border border-[#6666b3] rounded-lg flex w-[25%]">
									<input
										type="number"
										className="h-full outline-none text-black bg-transparent w-[50%] pl-2 text-center"
										value={item.qty}
										readOnly
									/>
									<div className="bg-[#6666b3] h-full w-[50%] flex flex-col justify-between py-1 gap-3 text-[20px] rounded-r-lg">
										<FontAwesomeIcon
											icon={faPlus}
											className="cursor-pointer text-[#06DC1B]"
											onClick={() => handleIncrease(item.id)}
										/>
										<FontAwesomeIcon
											icon={faMinus}
											className="cursor-pointer text-[#FF0000]"
											onClick={() => handleDecrease(item.id)}
										/>
									</div>
								</div>
								<p className="px-1 bg-[#6666B3] flex justify-center items-center w-[12%] rounded-lg">
									{item.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default GoldPkg;
