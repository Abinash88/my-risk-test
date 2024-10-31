import { DatePicker } from "antd";

const GenerateRisk2 = ({
  onNext,
  handleStepClick,
}: {
  onNext: () => void;
  handleStepClick: (id: number) => void;
}) => {
  const startDate = () => {};

  return (
    <>
      <div className="w-full  md:px-4 py-2 ">
        <div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
          <h4>Uncertainty/ Event</h4>
        </div>
        <div className="w-full">
          <textarea
            name="postContent"
            rows={4}
            placeholder="Enter Uncertainty/ Event"
            className="w-full outline-none text-black bg-[#F1F1F1] rounded-lg mt-4 p-3"
          />
          <div className="mt-4 flex md:flex-row flex-col justify-center gap-6">
            <div className="flex flex-col ">
              <button className="bg-[#1D98F0] text-white  py-3 px-8 text-left rounded-lg shadow-lg mb-3">
                Exposure Start Date
              </button>
              <DatePicker onChange={startDate} />
            </div>
            <div className="flex flex-col">
              <button className="bg-[#1D98F0] text-white  py-3 px-8 text-left rounded-lg shadow-lg mb-3">
                Exposure Start Date
              </button>
              <DatePicker onChange={startDate} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 mt-9">
          <button
            className="py-3 px-6 text-white rounded-lg bg-[#000080]"
            onClick={() => handleStepClick(1)}
          >
            Previous
          </button>
          <button
            className="py-3 px-6 text-white rounded-lg bg-[#000080]"
            onClick={() => onNext()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateRisk2;
