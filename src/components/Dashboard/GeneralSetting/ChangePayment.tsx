import { paymentActivities } from "@/lib/fakedata";
import { Hammer } from "@phosphor-icons/react";
import { Table, type TableProps } from "antd";
import { useNavigate } from "react-router-dom";

type PaymentTypes = {
  date: string;
  activity: string;
  digit: string;
};

const columns: TableProps<PaymentTypes>["columns"] = [
  {
    title: "Date",
    render: (record) => (
      <div className="flex gap-2  h-full items-center ">
        <p className="font-[500] text-black text-sm ml-4">
          {record.date}
        </p>
      </div>
    ),
    width: "15%",
  },
  {
    title: () => <div className="text-center">Activity</div>,
    render: (record) => <p className="text-sm">{record.activity}</p>,
    width: "70%",
  },

  {
    title: "Last 4 Digits",
    render: (__, _, index: number) => (
      <p className="text-sm">{index} mins ago</p>
    ),
    width: "15%",
  },
];

const ChangePayment = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 flex-col md:gap-2">
      <h4 className="font-[600] text-lg">Select Payment Method</h4>
      <div className="flex flex-col gap-2 items-start justify-center mt-4">
        <p className=" text-md">
          Your default payment method is highlighted below, you can also change
          your payment method
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <input
          type="radio"
          className="p-8 w-6 h-6 specifyColor mt-4"
          id="allowLikes"
          defaultChecked
          readOnly
        />
        <div className="border border-[#000080] p-1 md:p-4 flex items-center rounded-xl justify-between gap-3 w-[90vw] md:w-[50%] mt-6">
          <div className="flex items-center justify-center gap-3 flex-nowrap">
            <img
              src="/images/master-card.png"
              className="w-10"
              alt="master-card"
            />
            <h4 className="font-[600] text-sm">
              Master Card
              <span className="font-[400] text-sm ml-3">Ends with 7389</span>
            </h4>
          </div>
        </div>
        <div>
          <button className="border mt-4 scale-75 border-purple-400 w-24 px-3 text-purple-400 shadow-lg  p-2 rounded-full">
            <div className="flex font-bold justify-between ">
              <div>Default </div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex items-start justify-start">
        <p className="text-[#6666B3] py-3 ml-2 text-lg font-bold rounded-lg mt-6 text-center">
          +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Payment Method
        </p>
      </div>
      <div className="flex items-center my-6">
        <button
          className="text-white p-3 bg-[#6666B3] rounded-lg flex flex-nowrap"
          onClick={() => navigate("./edit-team")}
        >
          Manage Team Members <Hammer className="mx-4" />
        </button>
      </div>
      <div className="w-full flex-col items-start flex  justify-start mt-10">
        <h3 className="text-left py-2 md:text-lg text-base font-medium w-full">
          Payment Activities
        </h3>
        <div className="max-h-[500px] overflow-y-auto scrollBar w-full">
          <Table
            dataSource={paymentActivities}
            pagination={false}
            bordered={true}
            columns={columns}
            // rowKey={(record, index) => index}
            // showHeader={false}
            scroll={{ x: "max-content" }}
            className=" rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePayment;
