import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEye,
  faThumbsDown,
  faThumbsUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const EngagementLog = () => {
  const testLogs = [
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You liked Risk (Heartburn) specific to Country under Sector A",
      type: "like",
    },
    {
      name: "You commented on Risk (Heartburn) specific to Country under Sector A",
      type: "comment",
    },
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You disliked Risk (Heartburn) specific to Country under Sector A",
      type: "dislike",
    },
    {
      name: "You liked Risk (Heartburn) specific to Country under Sector A",
      type: "like",
    },
    {
      name: "You commented on Risk (Heartburn) specific to Country under Sector A",
      type: "comment",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap pb-10">
        <h3 className="font-[600] text-[25px] mb-5">Engagement Log</h3>
        <div className="flex items-center gap-4">
          <select
            name="days"
            id="days"
            className="p-2 text-sm px-6 border-2 border-[#000080] rounded-lg bg-transparent outline-none"
          >
            <option value="most-recent">All</option>
          </select>
        </div>
      </div>
      <>
        <div className=" bg-white rounded-md px-9 py-3 lg:h-[58vh] overflow-y-auto scrollBar">
          <h3 className="font-[600] text-xl mb-5">Description</h3>
          <div className="flex flex-col gap-6">
            {testLogs.map((notice, i) => (
              <div
                className="flex items-start md:items-center gap-2 justify-between"
                key={i}
              >
                <div className="flex gap-2 items-center w-[70%]">
                  {notice.type === "like" && (
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="text-2xl text-blue-600"
                    />
                  )}
                  {notice.type === "dislike" && (
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      className="text-2xl text-red-600"
                    />
                  )}
                  {notice.type === "comment" && (
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-2xl text-green-600"
                    />
                  )}
                  <p className="font-[500] w-4/6 text-black text-sm ml-4">
                    {notice.name}
                  </p>
                </div>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faEye} />
                </p>
                <p className="text-sm">{i} mins ago</p>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default EngagementLog;
