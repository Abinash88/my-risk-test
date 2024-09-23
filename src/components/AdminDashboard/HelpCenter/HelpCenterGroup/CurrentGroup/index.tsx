import React from 'react'
import GroupCarousel from '../GroupCarousel'
import { Switch, Table } from 'antd'
import AddGroup from '../AddGroup'
import EditGroup from '../EditGroup'
const dataSource=[
    {
        key: '1',
        question: 'Question Question Question Question Question Question Question Question',
    answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
        visibility: false,
      },
]
const CurrentGroup = () => {
    const columns=[
        {
            dataIndex: 'name',
            key: 'key',
            width: '100%',
            render: (text: string,record:any) =>  
            <div className="w-full border rounded-lg shadow-md p-4 space-y-2">
            {/* Question Row */}
            <div className="flex items-center justify-between w-full">
              <div className="w-full flex items-center justify-between space-x-4">
                <p className=" border border-purple-400 rounded-lg p-2">
                  {record.question}
                </p>
                <Switch defaultChecked={record.visibility}/>
                <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                  Archive
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                  Delete
                </button>
              </div>
  
              {/* Toggle Expand/Collapse Arrow */}
              {/* <button onClick={() => toggleExpand(id)}>
                {expandedId === id ? (
                  <UpOutlined className="text-blue-600" />
                ) : (
                  <DownOutlined className="text-blue-600" />
                )}
              </button> */}
            </div>
  
            {/* Answer Section (Collapsible) */}
            {/* {expandedId === id && (
              <div className="bg-gray-300 p-4 rounded-lg">
                <p>{answer}</p>
              </div>
            )} */}
          </div>
          },
    ]
    
  return (
    <div className='flex flex-col mt-5'> 
        <div className='flex justify-end'>
            <EditGroup/>
           <AddGroup/>
        </div>
        <div className='mt-10'>
            <GroupCarousel/>
        </div>
        <button className='w-full bg-[#000080] text-[#FFFFFF] font-semibold text-lg px-5 py-3 my-5 rounded-lg'>Group 1 Help center</button>
        <div>
            <Table dataSource={dataSource} columns={columns} showHeader={false} />;
        </div>
    </div>
  )
}

export default CurrentGroup