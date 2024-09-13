import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TableColumnsType, Table } from "antd";
import { useState } from "react";

const requests = [
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
  {
    name: "Mashood Adam",
    email: "mashoodadam@gmail.com",
    jobTitle: "Talent Acquisition Manager",
    employer: "Samusa Enterprise",
    employement: "",
    action: (
      <>
        <Button type="primary" danger>
          Decline
        </Button>
        <Button className="bg-[#3838F0]">Approve</Button>
      </>
    ),
  },
];

export default function VerificationRequest() {
  const columns: TableColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      title: "Employer/ Company Name",
      dataIndex: "employer",
    },
    {
      title: "Employement Proof",
      dataIndex: "employement",
      render: (value, record) => (
        <>
          <FontAwesomeIcon icon={faFilePdf} className="text-[#6666B3] w-5 h-5"/>
        </>
      ),
    },
    {
      title: "Action",
      render: (value, record) => (
        <>
          <Button type="primary" danger>
            Decline
          </Button>
          <Button className="bg-[#3838F0] text-white ml-2">Approve</Button>
        </>
      ),
      // dataIndex: "action",
    },
  ];
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium">New Verification Requests</p>
        <Button className="bg-[#3838F0] text-white">View All Requests</Button>
      </div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={requests}
      />
    </div>
  );
}
