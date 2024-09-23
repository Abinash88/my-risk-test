import React from 'react'
import SubscriptionPlan from '../Subscriptions/SubscriptionPlans'
import AddFeature from './AddFeature'
import { Switch, Table, TableColumnsType } from 'antd'
import { Euro } from 'lucide-react'
const features = [
  {
    name: "AI Generated risk profile",
    price: 20,
    visibility: true,
    action: "",
  },
  {
    name: "Upload to T&O Standings (Main or Private)",
    price: 10,
    visibility: true,
    action: "",
  },
  {
    name: "Hold private T&O groups",
    price: 30,
    visibility: true,
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
        <>
        <button
              className="text-white border bg-[#3838F0] rounded-lg py-2 px-4"
              
            >
              Edit
            </button>
        </>
      ),
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
  ];

  return (
    <div className="flex flex-col bg-white rounded-lg mt-5">
    <div className="w-full flex items-center p-5">
      <p className="text-xl text-medium text-black">4 Items</p>

      <div className="flex ml-auto">
        <AddFeature />
      </div>
    </div>
    <div className="px-3 pb-3">
      <Table
      columns={columns}
      dataSource={features}
      className='rounded-lg border  border-grey w-[calc(100% - 6px)] mb-3' 
      scroll={{ x: true }}
      />
    </div>
  </div>
  )
}

export default index