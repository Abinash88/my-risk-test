const PageOne = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
      <form
        action=""
        className="w-full flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Add form validation here if needed
          onNext();
        }}
      >
        <div className="text-black text-left">
          <label htmlFor="name" className="mb-2 block font-[600] text-black ">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="surname"
            className="mb-2 block font-[600] text-black "
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
          <label htmlFor="email" className="mb-2 block font-[600] text-black ">
            Email
          </label>
          <input
            type="email"
            id="email"
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

export default PageOne;
