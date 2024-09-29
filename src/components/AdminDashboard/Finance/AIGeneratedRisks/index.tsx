import React from 'react'
import { Switch, Table, TableColumnsType } from 'antd'
import { Euro } from 'lucide-react'
import Edit from './Edit'

const risks = [
  {
    name: "View Profile",
    price: 20,
    action: "",
  },
  {
    name: "Download Profile", 
    price: 10,
    action: "",
  },
]
const index = () => {

  const columns: TableColumnsType<any> = [
    
    {
      title: "Feature Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value, record) => (
        <div className='flex items-center'>
          <Euro className='w-4 h-4 mr-2' />
          {value}
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (value, record, index) => (
        <Edit data={record}/>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
    <div className="px-3 pb-3">
      <Table
      columns={columns}
      dataSource={risks}
      className='rounded-lg border  border-grey w-[calc(100% - 6px)] mb-3' 
      scroll={{ x: true }}
      />
    </div>
    </div>
  )
}

export default index