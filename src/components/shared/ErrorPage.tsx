import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-center mt-[40vh]">
			<div className="text-center">
				<h4 className="font-[600] text-2xl mb-3">
					{" "}
					The page you're looking for isn't here.
				</h4>
				<p className="text-[18px]">
					It's probably off playing hide-and-seek with other missing pages...😉
				</p>
				<button
					className="text-white bg-[#000080] py-3 px-5 rounded-xl mt-6"
					onClick={() => navigate(-1)}
				>
					Take me back, I've seen enough
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
