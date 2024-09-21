import React from 'react'
import { Switch, Table, TableColumnsType } from 'antd'
import { DollarSign, Euro } from 'lucide-react'
import { timeStamp } from 'console'

const payments = [
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    item: "Premium Subscription",
    amount: 20,
    timeStamp: 'July 1, 2024 - 10:30AM',
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    item: "Premium Subscription",
    amount: 20,
    timeStamp: 'July 1, 2024 - 10:30AM',
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    item: "Premium Subscription",
    amount: 20,
    timeStamp: 'July 1, 2024 - 10:30AM',
    action: "",
  },
  {
    name: "Mashood Adam",
    email: "mashood@gmail.com",
    item: "Premium Subscription",
    amount: 20,
    timeStamp: 'July 1, 2024 - 10:30AM',
    action: "",
  },
]
const index = () => {

  const columns: TableColumnsType<any> = [
    
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Item",
      dataIndex: "item",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (value, record) => (
        <div className='flex items-center'>
          <DollarSign className='w-4 h-4 mr-2' />
          {value}
        </div>
      ),
    },
    {
      title: "Timestamp",
      dataIndex: "timeStamp",
    },
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
    
    <div className="px-3 pb-3">
      <Table
      columns={columns}
      dataSource={payments}
      className='rounded-lg border  border-grey' 
      />
    </div>
  </div>
  )
}

export default index