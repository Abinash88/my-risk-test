import { Button } from "@/components/shared/ReuseAble/button";
import { cn } from "@/lib/utils";
import { Pagination, Table, type TableProps } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export const ColumnType = {};

interface DataType {
  riskTitle: string;
  riskDescription: string;
}

const requests = [
  {
    riskTitle: "loremillum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
  {
    riskTitle: "illum magni dolorum sapiente tenetur!",
    riskDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consectetur, incidunt, doloremque excepturi corporis enim sit facere fugit cum ipsum voluptates quis explicabo commodi voluptatibus, illum magni dolorum sapiente tenetur!",
  },
];

const RisksTable = () => {
  const [toggle, setToggle] = useState<{ [key: number]: boolean }>();

  const toggleButton = (key: number) => {
    setToggle((prevState) => ({
      ...prevState,
      [key]: !prevState?.[key], // Toggle the specific row’s state
    }));
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: () => (
        <div className="font-medium text-center text-[#666666] text-sm md:text-base">
          Risk Title and Description
        </div>
      ),
      dataIndex: "name",
      render: (_, { riskTitle, riskDescription }, index) => {
        return (
          <div className=" ">
            <h3 className="font-medium md:text-base text-sm ">{riskTitle} </h3>
            <p className=" text-gray-600 md:text-sm text-xs ">
              {!toggle?.[index] && riskDescription.slice(0, 50) + "..."}
              {toggle?.[index] && riskDescription}
              <Button
                onClick={() => {
                  toggleButton(index);
                }}
                variant={"ghost"}
                className="hover:bg-transparent shadow-none h-0 inline-block"
              >
                {toggle?.[index] ? "Read Less" : "Read More"}
              </Button>
            </p>
          </div>
        );
      },
      width: "80%",
    },

    {
      title: () => (
        <div className="font-medium text-center text-[#666666] text-sm md:text-base">
          Action
        </div>
      ),
      render: () => (
        <div className="flex gap-4 lg:flex-row flex-col items-center">
          <Button
            className="rounded-none h-9 w-[120px] md:w-[150px]"
            variant={"secondary"}
            onClick={() => {}}
          >
            View Risk
          </Button>
          <Button className="rounded-none h-9 w-[120px] md:w-[150px]">
            Download Risk
          </Button>
        </div>
      ),
      width: "20%",
      // dataIndex: "action",
    },
  ];

  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  const [pagination, setPagination] = useState<{
    current: number;
    pageSize: number;
  }>({
    current: 1,
    pageSize: 5, // Number of items per page
  });

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: React.Key[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: { name: string }) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const startIndex = (pagination.current - 1) * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const paginatedData = requests.slice(startIndex, endIndex);

  const Footer = () => (
    <div>
      <CustomPagination
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={requests.length}
        onChange={(page: number, pageSize?: number) => {
          setPagination({
            current: page,
            pageSize: pageSize || pagination.pageSize,
          });
        }}
      />
    </div>
  );

  const CustomPagination = ({
    current,
    pageSize,
    total,
    onChange,
  }: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize?: number) => void;
  }) => {
    const totalPages = Math.ceil(total / pageSize);

    const handleNext = () => {
      if (current < totalPages) {
        onChange(current + 1);
      }
    };

    const handlePrevious = () => {
      if (current > 1) {
        onChange(current - 1);
      }
    };

    return (
      <div className=" flex justify-between md:flex-row flex-col md:space-y-0 space-y-3 w-full items-center">
        <span className="text-gray-600 md:text-base text-sm">
          Showing {paginatedData.length} of {requests.length} items
        </span>
        <div className="flex gap-3 border px-2 rounded-md border-gray-400">
          <button
            onClick={handlePrevious}
            disabled={current === 1}
            style={{
              marginRight: "8px",
              cursor: current === 1 ? "not-allowed" : "pointer",
            }}
            className=" flex items-center md:text-sm text-xs  text-gray-500 gap-3"
          >
            <ArrowLeft className="size-5 text-gray-500" />
            <span>Previous</span>
          </button>
          <Pagination
            current={current}
            pageSize={pageSize}
            total={total}
            showSizeChanger={false} // Optional: Show size changer if needed
            itemRender={(page, type) => {
              // Customize the rendering of each page item
              const isSelected = current === page;
              if (type === "page") {
                return (
                  <span
                    style={{ boxShadow: "0 0 1px 1px rgb(191,196,203)" }}
                    className={cn(
                      `!rounded-none  px-[15px] py-[6px] hover: bg-gray-50 `,
                      isSelected && "bg-blue-500  text-white"
                    )}
                  >
                    {page}
                  </span>
                );
              }
            }}
            className="flex items-center px-2 rounded-lg  "
            onChange={onChange}
          />
          <button
            onClick={handleNext}
            disabled={current === totalPages}
            style={{
              cursor: current === totalPages ? "not-allowed" : "pointer",
            }}
            className=" flex items-center md:text-sm text-xs  text-gray-500 gap-3"
          >
            <span>Next</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" space-y-8">
      <div className="bg-white">
        <Table
          className="w-[calc(100% - 10px)]  px-3"
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          pagination={false}
          columns={columns}
          dataSource={requests}
          scroll={{ x: true }}
        />
      </div>
      <div className=" p-5 bg-white">{Footer()}</div>
    </div>
  );
};

export default RisksTable;
