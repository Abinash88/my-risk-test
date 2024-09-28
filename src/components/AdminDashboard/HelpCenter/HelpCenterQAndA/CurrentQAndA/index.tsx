import React from 'react'
import { Switch, Table } from 'antd'
import AddNewQAndA from '../AddNewQAndA'
import { SearchOutlined } from '@ant-design/icons'
import { ChevronDown, ChevronUp } from 'lucide-react'
import EditQAndA from '../../EditQAndA'

const dataSource=[
    {
        key: '1',
        question: 'Question Question Question Question Question Question Question Question',
    answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
        visibility: false,
      },
      {
          key: '2',
          question: 'Question Question Question Question Question Question Question Question',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
          visibility: false,
        },

    {
      key: '3',
      question: 'Question Question Question Question Question Question Question Question',
  answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
      visibility: false,
    },
]
const CurrentQAndA = () => {
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
            <EditQAndA/>
        </>
      }
]
    
  return (
    <div className='flex flex-col mt-5'> 
        <div className='flex justify-end mb-3'>
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
              // pagination={false} 
              className="no-divider no-hover-effect border border-grey-200 rounded-md"
              rowClassName={() => 'border-none hover:bg-transparent'}
            />
        </div>
    </div>
  )
}

export default CurrentQAndA