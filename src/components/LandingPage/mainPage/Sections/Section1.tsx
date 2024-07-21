import RiskTable from "../RiskTable";

const Section1 = () => {
	return (
		<div>
			<select
				name="filter"
				id="filter"
				className="flex ml-auto border border-[rgb(217,217,217)] py-3 px-6 rounded-lg mb-8 outline-none text-[#000080]"
			>
				<option value="Filter by">Filter by</option>
				<option value="Region">Region</option>
				<option value="Country">Country</option>
			</select>
			<div>
				<RiskTable />
			</div>
		</div>
	);
};

export default Section1;
