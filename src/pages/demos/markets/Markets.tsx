import { Button, Table, TableColumnsType } from "antd"

export default function Markets() {

	interface DataType {
		key: React.Key;
		name: string;
		age: number;
		address: string;
	}

	const columns: TableColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
	];

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
	];

	return <div>
		<Table bordered columns={columns} dataSource={data}></Table>
		<Button type="primary">
			test
		</Button>
	</div>
}
