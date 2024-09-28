import { Table, TableColumnsType } from 'antd';
import { Expand } from 'lucide-react';
import React from 'react'

import { DragHandle,DragableRow } from '@/components/shared/ReuseAble/DragableTable';
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface DataType {
  key: string;
  title: string;
  deleted_date: string;
  deleted_by:string;
  action:string
}

const columns: TableColumnsType<DataType> = [
  { key: 'sort', align: 'center', width: 80, render: () => <DragHandle /> },
  {
    title: "Page Title",
    dataIndex: "title",
  },

  {
    title: "Deleted Date",
    dataIndex: "deleted_date",
  },
  {
    title: "Deleted By",
    dataIndex: "deleted_by",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (value, record) => (
      <button className="bg-[#000080] text-white rounded-md px-4 py-2">
        Restore
      </button>
    ),
  },
];

const initialData: DataType[] = [
    {
      key:"1",
      title: "Terms And Conditions",
      deleted_date: "July 22, 2024 - 10:45pm",
      deleted_by: "mashoodadam@gmail.com",
      action: "",
    },
    {
      key:"2",
      title: "Terms And Conditions",
      deleted_date: "July 22, 2024 - 10:45pm",
      deleted_by: "mashoodadam@gmail.com",
      action: "",
    },
    {
      key:"3",
      title: "Terms And Conditions",
      deleted_date: "July 22, 2024 - 10:45pm",
      deleted_by: "mashoodadam@gmail.com",
      action: "",
    },
    {
      key:"4",
      title: "Terms And Conditions",
      deleted_date: "July 22, 2024 - 10:45pm",
      deleted_by: "mashoodadam@gmail.com",
      action: "",
    },
  ];

export default function MenuHeaders() {
    
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
  return (
    <div className="mt-6">
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
  )
}
