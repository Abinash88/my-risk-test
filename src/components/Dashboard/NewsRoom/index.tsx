import Container from "../../shared/HomeLayout/container";
import { BlogHeader } from "../../shared/ReuseAble";
import BreakingNews from "./BreakingNews";
import MoreNews from "./MoreNews";
import News from "./News";

const Blog = () => {
	return (
		<div>
			<BlogHeader
				title="Blog & Newsroom"
				text="Generate AI Risk Profile . Engage with T & O Standing"
				path="/"
			/>
			<Container>
				{/* <BreakingNews /> */}
				<News />
				<MoreNews />
			</Container>
		</div>
	);
};

export default Blog;
