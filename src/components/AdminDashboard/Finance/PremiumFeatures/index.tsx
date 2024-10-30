import { Switch, Table, TableColumnsType } from "antd";
import { Euro } from "lucide-react";

type FeaturesType = {
  name: string;
  price: number;
  visibility: boolean;
};

const features: FeaturesType[] = [
  {
    name: "AI Generated risk profile",
    price: 20,
    visibility: true,
  },
  {
    name: "Upload to T&O Standings (Main or Private)",
    price: 10,
    visibility: true,
  },
  {
    name: "Hold private T&O groups",
    price: 30,
    visibility: true,
  },

  {
    name: "Add Team member",
    price: 20,
    visibility: true,
  },
  {
    name: "Upload Risk",
    price: 30,
    visibility: true,
  },
  {
    name: "Create a Group",
    price: 30,
    visibility: true,
  },
  {
    name: "Generate a risk",
    price: 30,
    visibility: true,
  },
];

const index = () => {
  const columns: TableColumnsType<FeaturesType> = [
    {
      title: "Feature Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => (
        <div className="flex items-center">
          <Euro className="w-4 h-4 mr-2" />
          {value}
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <>
          <button className="text-white border bg-[#3838F0] rounded-lg py-2 px-4">
            Edit
          </button>
        </>
      ),
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
      render: (_, record) => (
        <>
          <Switch defaultValue={record.visibility} />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
      <div className="w-full flex items-center p-5">
        <p className="text-xl text-medium text-black">
          {features.length} Items
        </p>

        {/* <div className="flex ml-auto">
          <AddFeature />
        </div> */}
      </div>
      <div className="px-3 pb-3">
        <Table
          columns={columns}
          dataSource={features}
          className="rounded-lg border  border-grey w-[calc(100% - 6px)] mb-3"
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default index;
