import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Legal,
	aboutUs,
	customerService,
	quickLinks,
} from "../../../lib/const/navigation";
import {
	faInstagram,
	faLinkedin,
	faSquareFacebook,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-[#000080] text-white px-[2rem] md:px-[4rem] py-[4rem]">
			<div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-3 md:flex-wrap">
				<img src="/images/footer-logo.png" alt="Logo" />
				<div>
					<h2 className="mb-4 font-[600] text-[1.2rem]">Quick Links</h2>
					<ul>
						{quickLinks.map((link, i) => (
							<li key={i} className="mb-4 text-[1rem] font-[400]">
								<Link to={link.path}>{link.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="mb-4 font-[600] text-[1.2rem]">Legal</h2>
					<ul>
						{Legal.map((link, i) => (
							<li key={i} className="mb-4 text-[1rem] font-[400]">
								<Link to={link.path}>{link.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="mb-4 font-[600] text-[1.2rem]">About us</h2>
					<ul>
						{aboutUs.map((link, i) => (
							<li key={i} className="mb-4 text-[1rem] font-[400]">
								<Link to={link.path}>{link.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="mb-4 font-[600] text-[1.2rem]">Customer Service</h2>
					<ul>
						{customerService.map((link, i) => (
							<li key={i} className="mb-4 text-[1rem] font-[400]">
								<Link to={link.path}>{link.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="mb-4 font-[600] text-[1.2rem]">Social Media</h2>
					<div className="flex items-center gap-4 mb-2">
						<FontAwesomeIcon
							icon={faSquareFacebook}
							className="text-[1.6rem]"
						/>
						<FontAwesomeIcon icon={faXTwitter} className="text-[1.6rem]" />
						<FontAwesomeIcon icon={faInstagram} className="text-[1.6rem]" />
						<FontAwesomeIcon icon={faLinkedin} className="text-[1.6rem]" />
					</div>
					<h3 className="mb-2 font-[600] text-[1.5rem]">Newsletter</h3>
					<form>
						<p className="mb-2 text-[1rem] font-[400]">
							Subscribe to Newsletter
						</p>
						<input
							type="text"
							placeholder="Enter email address"
							className="rounded-md p-2 outline-none border-none text-black"
						/>
					</form>
				</div>
			</div>
			<div className="text-left md:text-center mt-8 md:mt-4 text-[rgba(255,255,255,0.79)]">
				<p className="mt-[5rem]">
					© <span>Hermandai 2024.</span> All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
