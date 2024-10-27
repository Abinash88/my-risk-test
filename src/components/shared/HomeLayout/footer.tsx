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
  // const goToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

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
            <div className="rounded-md px-3 py-2 outline-none border-none text-black bg-white flex items-center w-full gap-y-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="outline-none text-black mr-3 w-[60%] md:w-[65%]"
              />
              <button className="bg-[#3838F0] text-white p-3 rounded-lg w-[40%] md:w-[30%]">
                Subscribe
              </button>
            </div>
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
