import React from 'react'
import { Switch, Table } from 'antd'
import AddNewQAndA from '../AddNewQAndA'
import { SearchOutlined } from '@ant-design/icons'

const dataSource=[
    {
        key: '1',
        question: 'Question Question Question Question Question Question Question Question',
    answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
        visibility: false,
      },
]
const ArchivedQAndA = () => {
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
            
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-64">
      <SearchOutlined className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent w-full text-gray-500"
      />
    </div>
           <AddNewQAndA/>
        </div>
       
        <div>

        <Table 
              dataSource={dataSource} 
              columns={columns} 
              showHeader={false} 
              bordered={false} 
              // pagination={false} 
              className="no-divider no-hover-effect"
              rowClassName={() => 'border-none hover:bg-transparent'}
            />        </div>
    </div>
  )
}

export default ArchivedQAndA