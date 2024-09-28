import React from 'react'
import GroupCarousel from '../GroupCarousel'
import { Switch, Table } from 'antd'
import AddGroup from '../AddGroup'
import EditGroup from '../EditGroup'
import { MinusCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { ChevronDown, ChevronUp } from 'lucide-react'
const dataSource=[
    {
        key: 1,
        question: 'Question Question Question Question Question Question Question Question',
        answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
        visibility: false,
      },
      {
        key: 2,
        question: 'Question Question Question Question Question Question Question Question',
        answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
        visibility: false,
      },
]
const CurrentGroup = () => {
    const columns=[
        {
            dataIndex: 'name',
            key: 'name',
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
            dataIndex: 'visibility',
            key: 'visibility',
            width: '100',
            render: (text: string,record:any) =><>
            <Switch defaultChecked={record.visibility}/>
            </>
          },
          {
            dataIndex: 'name',
            key: 'test',
            width: '100',
            render: (text: string,record:any) =><>
            <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                  Archive
                </button>
                
            </>
          },
          {
            dataIndex: 'test2',
            key: 'test2',
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
        <div className='flex flex-col md:flex-row justify-end'>
              <div className="w-full md:w-auto mb-2 md:mb-0 mr-2 flex items-center border border-gray-300 rounded-md px-3">
              <SearchOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent w-full text-gray-500 p-2"
              />
            </div>
            <div className="flex w-full justify-between md:justify-end">
              <EditGroup/>
              <AddGroup/>
            </div>
        </div>
        <div className='mt-10'>
            <GroupCarousel />
        </div>
        <button className='w-full bg-[#000080] text-[#FFFFFF] font-semibold text-lg px-5 py-3 my-5 rounded-lg'>Group 1 Help center</button>
        <div className='w-full'>
            <Table 
            dataSource={dataSource} 
            columns={columns} 
            expandable={{
              expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.answer}</p>,
              rowExpandable: (record) => record.question !== 'Not Expandable',
              expandIcon: ({ expanded, onExpand, record }) => (
                <div 
                // style={{marginLeft:'0px', paddingRight: '16px' }}
                className='flex justify-end'
                >
                  {expanded ? (
                    <ChevronUp onClick={(e:any) => onExpand(record, e)} style={{ fontSize: '24px' }} />
                  ) : (
                    <ChevronDown onClick={(e:any) => onExpand(record, e)} style={{ fontSize: '24px' }} />
                  )}
                </div>
              ),
            }}
            showHeader={false} 
            className='mt-3 rounded-lg border border-gray w-[calc(100% - 6px)] mb-3'
            scroll={{ x: true }}
            />
        </div>
    </div>
  )
}

export default CurrentGroup