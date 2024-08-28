import UserForm from "../components/users/user.form"
import UserTable from "../components/users/user.table"
import { getAllUsers } from '../services/api.services';
import { useEffect, useState } from 'react';

const UserPage = () => {

    const [dataTable, setDataTable] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState()

    useEffect(() => {
        loaderUser()
    }, [currentPage, pageSize])

    const loaderUser = async () => {
        const response = await getAllUsers(currentPage, pageSize, total)

        if (response) {
            setDataTable(response.data.result)
            setCurrentPage(response.data.meta.current)
            setPageSize(response.data.meta.pageSize)
            setTotal(response.data.meta.total)

        }
    }
    return (
        <div style={{ marginTop: "30px", marginBottom: '100px' }}>
            <UserForm loaderUser={loaderUser} />
            <UserTable loaderUser={loaderUser} dataTable={dataTable}
                currentPage={currentPage}
                pageSize={pageSize}
                total={total}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
            />
        </div>
    )
}
export default UserPage
