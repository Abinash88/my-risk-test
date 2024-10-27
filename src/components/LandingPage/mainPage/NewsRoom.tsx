import { Link } from "react-router-dom";
import { newsRoom } from "../../../lib/const/navigation";
import Container from "../../shared/HomeLayout/container";

const NewsRoom = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="w-full md:w-[55%] mr-auto ml-auto">
          <h2 className="text-2xl md:text-3xl mb-3 font-[600] text-center">
            Blogs & Newsroom
          </h2>
          <p className="text-center text-[rgb(0,0,0,0.6)]">
            Explore our dynamic blogs and newsroom for the latest insights,
            updates, and stories covering a diverse range of topics, keeping you
            informed and inspired.
          </p>
        </div>

        <div className="mt-8 flex gap-10 md:gap-4 lg:gap-2 flex-wrap justify-between">
          {newsRoom.map((news, i) => (
            <div
              key={i}
              className="w-full md:w-[45%] lg:w-[24%] bg-white shadow-md rounded-md "
            >
              <img
                src={news.image}
                alt={news.image + 2}
                className="rounded-md"
              />
              <div className="px-3 py-4 text-center">
                <h4 className="text-[#000080] text-[18px] font-[600]">
                  {news.title}
                </h4>
                <p className="text-[13px] my-3 text-[rgba(0,0,0,0.4)]">
                  {news.paragraph}
                </p>
                <Link
                  to={"blog/" + i}
                  className="bg-[#000080] p-3 flex justify-center items-center text-center rounded-lg text-white"
                >
                  Read News
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/blog"
            className="bg-[#000080] p-3 flex justify-center items-center text-center rounded-lg text-white w-[30%] mr-auto ml-auto"
          >
            View All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NewsRoom;
