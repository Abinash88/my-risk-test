import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";
import { riskConcept } from "@/lib/const/navigation";

const RiskManagement = () => {
	return (
		<div>
			<BlogHeader
				title="Risk Management Concept"
				text="Learn more about our risk management concepts"
				showLink={false}
				path="/"
			/>
			<Container>
				<div className=" flex flex-col gap-6 my-10">
					{riskConcept.map((risk, i) => (
						<div key={risk.title + i}>
							<h2 className="font-[600] text-[20px] text-black mb-2">
								{risk.title}
							</h2>
							<p>{risk.text}</p>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default RiskManagement;
