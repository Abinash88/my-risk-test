import React from 'react'
import GroupCarousel from './GroupCarousel'
import { Switch, Table } from 'antd'
import AddGroup from '../AddGroup'
import { ChevronDown, ChevronUp } from 'lucide-react'
const dataSource=[
    {
        key: '1',
        question: 'Question Question Question Question Question Question Question Question',
    answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
        visibility: false,
      },
]
const ArchivedGroup = () => {
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
              UnArchive
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
            {/* <button className='bg-[#007AFF] text-white font-lg px-5 py-2'>
             Edit Group
            </button> */}
            <AddGroup/>
        </div>
        <div className='mt-10'>
            <GroupCarousel/>
        </div>
        <button className='w-full bg-[#000080] text-[#FFFFFF] font-semibold text-lg px-5 py-3 my-5 rounded-lg'>Group 1 Help center</button>
        <div>
            <Table dataSource={dataSource} 
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
            showHeader={false} />
        </div>
    </div>
  )
}

export default ArchivedGroup