const PageThree = () => {
  return (
    <>
      <form className="w-full flex flex-col gap-4">
        <div className="text-black text-left">
          <label
            htmlFor="house"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            House No / House Name
          </label>
          <input
            type="text"
            id="house"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="street"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Street Name
          </label>
          <input
            type="text"
            id="street"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="town"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Town
          </label>
          <input
            type="text"
            id="town"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="city"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            State / City
          </label>
          <input
            type="text"
            id="city"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="zip"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Zip Code
          </label>
          <input
            type="number"
            id="zip"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-[#000080] text-center text-white rounded-lg py-5 mt-4"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default PageThree;
