import { notify } from "../../../lib/fakedata";

const NewNotification = () => {
  return (
    <>
      <div className=" bg-white rounded-md px-9 py-3 h-[58vh] overflow-y-auto scrollBar">
        <h3 className="font-[600] text-xl mb-5">New</h3>
        <div className="flex flex-col gap-6">
          {notify.map((notice, i) => (
            <div
              className="flex items-start md:items-center gap-3 justify-between"
              key={i + notice.image}
            >
              <div className="flex gap-2 items-center w-[70%]">
                <img
                  src={notice.image}
                  alt="profile-image"
                  className="rounded-full aspect-square object-cover w-10"
                />
                <p className="font-[500] text-black text-sm ml-4">
                  {notice.name}
                </p>
              </div>
              <p className="text-sm">{notice.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end mt-5">
        <button className="bg-[#6666B3] text-white px-9 py-2 rounded-lg text-md">
          Clear Notification
        </button>
      </div>
    </>
  );
};

export default NewNotification;
