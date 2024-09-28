import {
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Popover,
  Select,
  Switch,
  Table,
  TableColumnsType,
} from "antd";
import { Expand } from "lucide-react";
import React, { useState } from "react";
import EditMenu from "./EditMenu";
import MenuList from "../../MenuList";
import AddNewPage from "./AddNewPage";

import { DragHandle,DragableRow } from '@/components/shared/ReuseAble/DragableTable';
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface DataType {
  key: string;
  title: string;
  owner: string;
  visibility:boolean;
  action:string
}

const columns: TableColumnsType<DataType> = [
  { key: 'sort', align: 'center', width: 80, render: () => <DragHandle /> },
  {
    title: "Title",
    dataIndex: "title",
  },

  {
    title: "Visibility",
    dataIndex: "visibility",
    render: (value, record) => (
      <>
        <Switch defaultValue={record.visibility} />
      </>
    ),
  },
  {
    title: "Owner",
    dataIndex: "owner",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (value, record) => (
      <>
        <EditOutlined className="w-10 h-10  text-[#000080]" />
        <DeleteOutlined className="w-10 h-10 text-[#F24E1E]" />
      </>
    ),
  },
];

const initialData: DataType[] = [
  {
    key:'1',
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },

  {
    key:'2',
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key:'3',
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key:'4',
    title: "Terms And Condition",
    owner: "System",
    visibility: true,
    action: "",
  },
];
export default function index() {
  const [dataSource, setDataSource] = React.useState<DataType[]>(initialData);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex((record) => record.key === active?.id);
        const overIndex = prevState.findIndex((record) => record.key === over?.id);
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-between md:justify-end">
      <EditMenu />
        <button
          className="rounded-md px-6 py-2 text-white bg-[#3838F0]"
          onClick={() => showModal()}
        >
          Add Footer
        </button>
      </div>

      <div className="mt-5 mx-5">
      <MenuList />
     </div>
      <div className="flex flex-col mt-8">
        <AddNewPage />
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext items={dataSource.map((i) => i.key)} strategy={verticalListSortingStrategy}>
        <Table<DataType>
          rowKey="key"
          components={{ body: { row: DragableRow } }}
          columns={columns}
          dataSource={dataSource}
         className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3" 
         scroll={{ x: true }}
        />
      </SortableContext>
      </DndContext>
      </div>

      <Modal
        title="Add Footer"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // okButtonProps={{ title: "Suspend" }}
        // cancelButtonProps={{ disabled: true }}
        footer={[
          <div className="flex justify-center mb-7">
            <button
              className="rounded-md text-white bg-[#3838F0] py-2 px-3"
              onClick={handleOk}
            >
              Save Changes
            </button>
          </div>,
        ]}
      >
        <div className="flex flex-col">
          <Divider type="horizontal" className="mt-0" />
          <Form
            layout="vertical"
            initialValues={{
              pages: "Select Pages",
            }}
          >
            <Form.Item label="Footer Title" name="menu_title">
              <Input className="p-2 bg-[#F9F9F9]" placeholder="Menu Title" />
            </Form.Item>
            <Form.Item label="Link(available)" name="link">
              <Input
                className="p-2 bg-[#F9F9F9]"
                placeholder="Enter link/url"
              />
            </Form.Item>
            <div className="flex justify-between items-center">
              <Switch defaultChecked />
              <Form.Item label="Add created pages" name="pages">
                <Select>
                  <Select.Option value="Select Pages">
                    Select Pages
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
