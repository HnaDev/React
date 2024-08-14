import { Table } from 'antd';
import { getAllUsers } from '../../services/api.services';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataTable, setDataTable] = useState([])

    useEffect(() => {
        loaderUser()
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        }
    ];

    const loaderUser = async () => {
        const response = await getAllUsers()
        setDataTable(response.data)
        console.log(response)
    }

    return (
        <Table columns={columns} dataSource={dataTable} rowKey={"_id"} />
    )
}

export default UserTable