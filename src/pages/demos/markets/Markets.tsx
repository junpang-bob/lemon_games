import type { TableColumnsType } from 'antd'
import { Button, Table,Pagination } from 'antd'
import type { MouseEvent } from 'react'
const {Column} =Table
export default function Markets() {
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ]

  const columns: TableColumnsType<DataType> = [
    {
      title: '序号',
      dataIndex: 'index',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
  ]

  function handleCellClick(cell:DataType,event:MouseEvent) {
    event.stopPropagation()
    console.log(cell.address,'cell');
    
  }
  function handleRowClick(record:any){
    console.log(record,'record')
  }

  return (
    <div>
      <Table bordered dataSource={data} onRow={(record)=>{return {onClick:()=>handleRowClick(record)}}} pagination={false}>
        <Column title="姓名" dataIndex="name" onCell={(cell:DataType)=>{return {onClick:(event:MouseEvent)=>handleCellClick(cell,event)}}}/>
        <Column title="年龄" dataIndex="age" />
        <Column title="地址" dataIndex="address" />
      </Table>
      <div style={{display:'flex',justifyContent:'flex-end',margin:'10px 0'}}>
        <Pagination pageSize={10} total={100}  />
      </div>
      <Button type="primary">
        test
      </Button>
    </div>
  )
}
