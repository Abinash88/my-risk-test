import React, { useContext, useMemo } from "react";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Switch, Table } from "antd";
import type { TableColumnsType } from "antd";
import { Expand } from "lucide-react";
import Preview from "./Preview";
import Setting from "./Setting";
import {
  DragableRow,
  DragHandle,
} from "@/components/shared/ReuseAble/DragableTable";

interface DataType {
  key: string;
  item: string;
  button_title: string;
  link: string;
  date_deleted: string;
  visibility: boolean;
  action: string;
}

const columns: TableColumnsType<DataType> = [
  { key: "sort", align: "center", width: 80, render: () => <DragHandle /> },
  {
    title: "Item",
    dataIndex: "item",
    render: (text: string) => (
      <img src="/images/background.png" className="w-15 h-10" />
    ),
  },
  {
    title: "Preview",
    dataIndex: "preview",
    render: (text: string, record: any) => <Preview record={record} />,
  },
  {
    title: "Date Deleted",
    dataIndex: "date_deleted",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (value, record, index) => (
      <button className="bg-[#3838F0] text-white px-5 py-1.5 rounded-md">
        Restore
      </button>
    ),
  },
];

const initialData: DataType[] = [
  {
    key: "1",
    item: "Mashood Adam 1",
    button_title: "Get Started",
    link: "",
    date_deleted: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    key: "2",
    item: "Mashood Adam 2",
    button_title: "Get Started",
    link: "",
    date_deleted: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    key: "3",
    item: "Mashood Adam 3",
    button_title: "Get Started",
    link: "",
    date_deleted: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
  {
    key: "4",
    item: "Mashood Adam 4",
    button_title: "Get Started",
    link: "",
    date_deleted: "July 22, 2024 - 10:45pm",
    visibility: false,
    action: "",
  },
  {
    key: "5",
    item: "Mashood Adam 5",
    button_title: "Get Started",
    link: "",
    date_deleted: "July 22, 2024 - 10:45pm",
    visibility: true,
    action: "",
  },
];

const Deleted: React.FC = () => {
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
    <div className="mx-2 flex flex-col">
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <SortableContext
          items={dataSource.map((i) => i.key)}
          strategy={verticalListSortingStrategy}
        >
          <div className="zzga">
            <Table<DataType>
              rowKey="key"
              components={{ body: { row: DragableRow } }}
              columns={columns}
              dataSource={dataSource}
              className="rounded-lg border border-gray w-[calc(100% - 6px)] mb-3"
              scroll={{ x: true }}
            />
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Deleted;
