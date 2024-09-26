import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";
import { integratedService } from "@/lib/const/navigation";
import { Link } from "react-router-dom";

const IntegratedService = () => {
  return (
    <div>
      <BlogHeader
        title="Integrated AI Services"
        text="Learn more about our integrated AI services"
        showLink={false}
        path="/"
      />
      <Container>
        <div className=" flex flex-col gap-16 my-10">
          {integratedService.map((integrated, i) => (
            <div
              className="flex flex-col md:flex-row items-start gap-3 "
              key={i}
            >
              <img src="/images/ai-icon.png" alt="Ai-icon" />
              <div>
                <h2 className="font-[600] text-[20px] text-black mb-2">
                  {integrated.title}
                </h2>
                <p>{integrated.text}</p>
                <Link
                  to={integrated.path}
                  className="text-[#000080] font-[600] mt-2 block"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default IntegratedService;
