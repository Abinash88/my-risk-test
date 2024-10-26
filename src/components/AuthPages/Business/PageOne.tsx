import { useFormContext } from "react-hook-form";

const PageOne = ({ onNext }: { onNext: () => void }) => {
  // const { register } = useFormContext(); 

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="text-black text-left">
          <label
            htmlFor="name"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Name
          </label>
          <input
            type="text"
            // {...register("")}
            id="name"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="surname"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Surname
          </label>
          <input
            type="text"
            id="surname"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="email"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <button
          onClick={() => onNext()}
          type="button"
          className="bg-[#000080] text-center text-white rounded-lg py-5 mt-4"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default PageOne;
