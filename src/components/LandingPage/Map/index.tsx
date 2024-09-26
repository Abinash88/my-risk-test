import Container from "@/components/shared/HomeLayout/container";
import { useState } from "react";
import PublicStanding from "./PublicStanding";
import PrivateStanding from "./PrivateStanding";

const Map = () => {
  const [page, setPage] = useState<"private" | "public">("public");
  return (
    <div className="pt-20">
      <Container>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=uk&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          style={{
            border: "0",
            width: "90vw",
            height:"70vh",
          }}
          loading="lazy"
          title="location"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex gap-3 justify-between items-center flex-wrap">
          <button
            className={`p-3 rounded-md shadow-md w-[38%] font-[600] ${
              page === "public"
                ? "bg-[#000080] text-white"
                : "bg-white text-[rgba(0,0,0,0.7)]"
            }`}
            onClick={() => setPage("public")}
          >
            Public T & O Standing
          </button>
          <button
            className={`p-3 rounded-md shadow-md w-[38%] font-[600] ${
              page === "private"
                ? "bg-[#000080] text-white"
                : "bg-white text-[rgba(0,0,0,0.7)]"
            }`}
            onClick={() => setPage("private")}
          >
            Private T & O Standing{" "}
          </button>
          <select
            name="filter"
            id="filter"
            className="flex border border-[rgb(217,217,217)] py-3 px-6 rounded-lg  outline-none text-[#000080] w-[20%]"
          >
            <option value="Filter by">Filter by</option>
            <option value="Region">Region</option>
            <option value="Country">Country</option>
          </select>
        </div>
        {page === "public" && <PublicStanding />}
        {page === "private" && <PrivateStanding />}
      </Container>
    </div>
  );
};

export default Map;
