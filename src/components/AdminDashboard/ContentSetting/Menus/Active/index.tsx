/* eslint-disable react-hooks/rules-of-hooks */
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
  Select,
  Switch,
  Table,
  TableColumnsType,
} from "antd";
import Context from "../../../../../context";
import { Expand } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import EditMenu from "./EditMenu";
import MenuList from "../../MenuList";
import AddNewPage from "./AddNewPage";
import { DataContext } from "../../DataContext";

import {
  DragHandle,
  DragableRow,
} from "@/components/shared/ReuseAble/DragableTable";
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { useMediaQuery, useTheme } from "@mui/material";

interface DataType {
  key: string;
  title: string;
  owner: string;
  visibility: boolean;
  action: string;
}

const columns: TableColumnsType<DataType> = [
  { key: "sort", align: "center", width: 80, render: () => <DragHandle /> },
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
    key: "1",
    title: "Our Services",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key: "2",
    title: "Premium Features",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key: "3",
    title: "Subscription Services",
    owner: "System",
    visibility: true,
    action: "",
  },
];
const initialData2: DataType[] = [
  {
    key: "1",
    title: "Risk Management Concept",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key: "2",
    title: "Integrated AI Services",
    owner: "System",
    visibility: true,
    action: "",
  },
];
const initialData3: DataType[] = [
  {
    key: "1",
    title: "How It Works",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key: "2",
    title: "Help Center",
    owner: "System",
    visibility: true,
    action: "",
  },
  {
    key: "3",
    title: "User Tips",
    owner: "System",
    visibility: true,
    action: "",
  },
];
export default function index() {
  const { data, setData } = useContext(Context);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // True if screen is small

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const sensors = useSensors(useSensor(isMobile ? TouchSensor : PointerSensor));
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [dataSource, setDataSource] = React.useState<DataType[]>(initialData);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex(
          (record) => record.key === active?.id
        );
        const overIndex = prevState.findIndex(
          (record) => record.key === over?.id
        );
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };
  useEffect(() => {
    if (data === "Product") {
      setDataSource(initialData);
    } else if (data === "Learn") {
      setDataSource(initialData2);
    } else {
      setDataSource(initialData3);
    }
  }, [data]);

  return (
    <div className="flex flex-col mt-6">
      <div className="flex justify-between md:justify-end">
        <EditMenu />
        <button
          className="rounded-md px-6 py-2 text-white bg-[#3838F0]"
          onClick={() => showModal()}
        >
          Add Menu
        </button>
      </div>
      <div className="mt-5 mx-5">
        <MenuList />
      </div>

      <div className="flex flex-col mt-8">
        <AddNewPage />
        <DndContext
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={onDragEnd}
          sensors={sensors}
        >
          <SortableContext
            items={dataSource.map((i) => i.key)}
            strategy={verticalListSortingStrategy}
          >
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
        title="Add Menu"
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
            <Form.Item label="Menu Title" name="menu_title">
              <Input className="p-2 bg-[#EEF5F9]" placeholder="Menu Title" />
            </Form.Item>
            <Form.Item label="Link(available)" name="link">
              <Input
                className="p-2 bg-[#EEF5F9]"
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
