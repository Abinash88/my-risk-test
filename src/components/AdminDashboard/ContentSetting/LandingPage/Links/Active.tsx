import { SettingFilled, SettingTwoTone } from "@ant-design/icons";
import { Gear, GearFine } from "@phosphor-icons/react";
import { Switch, TableColumnsType, Table, Popover } from "antd";
import { Expand, Eye } from "lucide-react";
import { useState } from "react";
import RemoveContent from "../../RemoveContent";
import Setting from "./Setting";
import React from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  DragableRow,
  DragHandle,
} from "@/components/shared/ReuseAble/DragableTable";

interface DataType {
  key: string;
  item: string;
  title: string;
  link: string;
  last_modified: string;
  visibility: boolean;
  action: string;
}

const columns: TableColumnsType<DataType> = [
  { key: "sort", align: "center", width: 80, render: () => <DragHandle /> },
  {
    title: "Item",
    dataIndex: "item",
    render: (text: string) => <Gear className="w-10 h-10" />,
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Last Modified",
    dataIndex: "last_modified",
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
    title: "Action",
    dataIndex: "action",
    render: (value, record, index) => <Setting index={index} />,
  },
];
const initialData: DataType[] = [
  {
    key: "1",
    item: "",
    link: "",
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },

  {
    key: "2",
    item: "",
    link: "",
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    key: "3",
    item: "",
    link: "",
    title: "AI Risk Profile",
    last_modified: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
];
export default function Active() {
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

  return (
    <div className="mt-3 mx-2 flex flex-col">
      <div className="flex justify-end">
        <a
          className="rounded-lg py-2 px-8 my-2 bg-[#3838F0] text-white"
          href="/admin/dashboard/content-setting/landing-page/add-link"
        >
          Add
        </a>
      </div>

      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
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

      {/* <Table columns={columns} dataSource={activeLinks} 
      className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3" 
      scroll={{ x: true }}
      /> */}
    </div>
  );
}
