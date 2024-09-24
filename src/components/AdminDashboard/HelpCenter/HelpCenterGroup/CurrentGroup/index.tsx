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
      },{
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
            width: '700',
            render: (text: string,record:any) =>  
            // <div className="w-full border rounded-lg shadow-md p-4 space-y-2">
            <div className="flex items-center justify-between w-full">
              <div className="w-full flex items-center justify-between space-x-4">
                <p className=" border border-purple-400 rounded-xl p-1">
                  {record.question}
                </p>
                
              </div>
            </div>
  
          //  Answer Section (Collapsible) 
          //   {expandedId === id && (
          //     <div className="bg-gray-300 p-4 rounded-lg">
          //       <p>{answer}</p>
          //     </div>
          //   )} 
          // </div>
          },
          {
            dataIndex: 'name',
            key: 'key',
            width: '100',
            render: (text: string,record:any) =><>
            <Switch defaultChecked={record.visibility}/>
            </>
          },
          {
            dataIndex: 'name',
            key: 'key',
            width: '100',
            render: (text: string,record:any) =><>
            <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                  Archive
                </button>
                
            </>
          },
          {
            dataIndex: 'name',
            key: 'key',
            width: '100',
            render: (text: string,record:any) =><>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                  Delete
                </button>
            </>
          }
    ]
    
  return (
    <div className='flex flex-col mt-5'> 
        <div className='flex justify-end'>
            <EditGroup/>
           <AddGroup/>
        </div>
        <div className='mt-10'>
            <GroupCarousel />
        </div>
        <button className='w-full bg-[#000080] text-[#FFFFFF] font-semibold text-lg px-5 py-3 my-5 rounded-lg'>Group 1 Help center</button>
        <div className='w-full'>
            <Table dataSource={dataSource} columns={columns} 
            showHeader={false} 
            className='mt-3 rounded-lg border border-gray w-[calc(100% - 6px)] mb-3'
            scroll={{ x: true }}
            />
        </div>
    </div>
  )
}

export default CurrentGroup