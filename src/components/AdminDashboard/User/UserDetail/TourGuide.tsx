import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  date: string
  status: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Date Tour Was Taken',
    dataIndex: 'date',
    key: 'date',
    width: '80%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span
        className={`px-2 py-1 rounded ${
          status === 'Completed' ? 'bg-green-500 text-white' : ''
        }`}
      >
        {status}
      </span>
    ),
  },
]

const data: DataType[] = [
  {
    key: '1',
    date: ' 1st August, 2023 - 10:20 PM',
    status: 'Completed',
  },
  {
    key: '2',
    date: '1st August, 2023 - 10:20 PM',
    status: 'Pending',
  },
]

export default function TourGuide() {
  return (
    <div className=''>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        className="border border-gray-200 rounded-lg"
      />
    </div>
  )
}
