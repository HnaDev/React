import UserForm from "../components/users/user.form"
import UserTable from "../components/users/user.table"
import { getAllUsers } from '../services/api.services';
import { useEffect, useState } from 'react';

const UserPage = () => {

    const [dataTable, setDataTable] = useState([])

    useEffect(() => {
        loaderUser()
    }, [])

    const loaderUser = async () => {
        const response = await getAllUsers()
        setDataTable(response.data)
    }

    return (
        <div style={{ marginTop: "30px" }}>
            <UserForm loaderUser={loaderUser} />
            <UserTable loaderUser={loaderUser} dataTable={dataTable} />
        </div>
    )
}
export default UserPage
