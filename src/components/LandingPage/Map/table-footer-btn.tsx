const TableFooterBtn = () => {
  return (
    <div className="">
      <div className="w-full md:grid hidden  grid-cols-4">
        <button className="flex flex-col justify-center items-center gap-2 ">
          <img
            src="/images/invite.png"
            alt="invite"
            className="lg:size-20 size-16 object-cover"
          />
          <p className="md:text-lg text-center font-medium text-[#000080]">
            Invite Participants
          </p>
        </button>
        <button className="flex flex-col justify-center items-center gap-2 ">
          <img
            src="/images/add-risk.png"
            alt="invite"
            className="lg:size-20 size-16 object-cover"
          />
          <p className="md:text-lg text-center font-medium text-[#000080]">
            Add New Risks
          </p>
        </button>
        <button className="flex flex-col justify-center items-center gap-2 ">
          <img
            src="/images/groups.png"
            alt="invite"
            className="lg:size-20 size-16 object-cover"
          />
          <p className="md:text-lg text-center font-medium text-[#000080]">
            Groups
          </p>
        </button>
        <button className="flex flex-col justify-center items-center gap-2 ">
          <img
            src="/images/create-group.png"
            alt="invite"
            className="lg:size-20 size-16 object-cover"
          />
          <p className="md:text-lg text-center font-medium text-[#000080]">
            Create New Group
          </p>
        </button>
      </div>
      <button className="bg-[#1D98F0] ml-auto block md:hidden rounded-lg px-6 py-2.5 text-sm font-medium text-white">
        Add Risk
      </button>
    </div>
  );
};

export default TableFooterBtn;
