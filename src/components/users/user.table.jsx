import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Space, Table } from 'antd';
import { useState } from 'react'
import UserUpdateModal from './user.update.modal';
import UserView from './user.view';
import { deleteUserAPI } from '../../services/api.services';


const UserTable = (props) => {

    const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState(false)
    const [isViewUserOpen, setIsViewUserOpen] = useState(false)
    const [dataUserUpdate, setDataUserUpdate] = useState(null)
    const [dataViewUser, setDataViewUser] = useState(null)

    const { dataTable, loaderUser } = props
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => <a onClick={() => {
                setDataViewUser(record)
                setIsViewUserOpen(true)
            }}>{record._id}</a>,
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
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <EditOutlined style={{ color: 'blue', fontSize: '18px', cursor: 'pointer' }}
                            onClick={() => {
                                setDataUserUpdate(record)
                                setIsModalUpdateUserOpen(true)
                            }} />
                        <Popconfirm
                            placement="left"
                            title="Delete User"
                            description="Are you sure to delete this user ?"
                            onConfirm={() => handleDeleteUser(record._id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{ color: 'red', fontSize: '18px', cursor: 'pointer' }} />
                        </Popconfirm>

                    </Space>
                )
            }
        },
    ];

    const handleDeleteUser = async (id) => {
        try {
            const response = await deleteUserAPI(id);
            if (response.data) {
                notification.warning({
                    message: 'delete success',
                    description: 'Xóa thành công !'
                })
            }
            await loaderUser()
        } catch (error) {
            notification.error({
                message: 'delete success',
                description: JSON.stringify(error.response.data.message)
            })
        }
    };

    return (
        <>
            <Table columns={columns} dataSource={dataTable} rowKey={"_id"} style={{ margin: "0px 20px" }} />
            <UserUpdateModal
                isModalUpdateUserOpen={isModalUpdateUserOpen}
                setIsModalUpdateUserOpen={setIsModalUpdateUserOpen}
                dataUserUpdate={dataUserUpdate}
                setDataUserUpdate={setDataUserUpdate}
                loaderUser={loaderUser}
            />
            <UserView
                isViewUserOpen={isViewUserOpen}
                setIsViewUserOpen={setIsViewUserOpen}
                dataViewUser={dataViewUser}
                loaderUser={loaderUser}
            />
        </>
    )
}

export default UserTable