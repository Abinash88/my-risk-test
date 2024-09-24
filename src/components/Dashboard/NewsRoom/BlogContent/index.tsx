import Container from "@/components/shared/HomeLayout/container";
import MoreNews from "../MoreNews";

const BlogContent = () => {
	return (
		<div className="">
			{/* <div className="w-full bg-[#000080] text-white flex items-center gap-6 justify-between px-5 md:px-16 py-5">
				<h2 className="font-[600] text-[22px]">Newsroom</h2>
				<div className="w-full md:w-[30%] text-black">
					<input
						type="search"
						placeholder="Search"
						className="w-full p-3 outline-none rounded-lg"
					/>
				</div>
			</div> */}
			<div className=" bg-[#EFEFEF] py-4">
				<Container>
					<div>
						<p className="py-7">Go back</p>
						<div>
							<div className="flex flex-col md:flex-row items-center justify-between gap-3">
								<h4 className="text-[28px] text-[#000080] font-[600] text-center md:text-left">
									Overview of Privacy Policy
								</h4>
								<p className="text-[rgba(0,0,0,0.6)] font-[600]">
									Published: 24 May 2024
								</p>
							</div>
							<div className="w-full h-[400px] my-6">
								<img
									src="/images/breaking-news.png"
									alt="news-image"
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<p className="text-[rgba(0,0,0,0.6)] text-[14px] md:text-[18px]">
									{" "}
									Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
									eu turpis molestie, dictum est a, mattis tellus. Sed
									dignissim, metus nec fringilla accumsan, risus sem
									sollicitudin lacus, ut interdum tellus elit sed risus.
									Maecenas eget condimentum velit, sit amet feugiat lectus.
									Class aptent taciti sociosqu ad litora torquent per conubia
									nostra, per inceptos himenaeos. Praesent auctor purus luctus
									enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
									ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
									bibendum lorem. Morbi convallis convallis diam sit amet
									lacinia. Aliquam in elementum tellus.
								</p>
								<p className="text-[rgba(0,0,0,0.6)] text-[14px] md:text-[18px] mt-5">
									{" "}
									Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
									eu turpis molestie, dictum est a, mattis tellus. Sed
									dignissim, metus nec fringilla accumsan, risus sem
									sollicitudin lacus, ut interdum tellus elit sed risus.
									Maecenas eget condimentum velit, sit amet feugiat lectus.
									Class aptent taciti sociosqu ad litora torquent per conubia
									nostra, per inceptos himenaeos. Praesent auctor purus luctus
									enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
									ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
									bibendum lorem. Morbi convallis convallis diam sit amet
									lacinia. Aliquam in elementum tellus.
								</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Container>
				<MoreNews />
			</Container>
		</div>
	);
};

export default BlogContent;
