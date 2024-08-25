import { Input, Modal, notification } from "antd"
import { useEffect, useState } from "react"
import { updateUserAPI } from '../../services/api.services'

const UserUpdateModal = (props) => {
    const [id, setId] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')

    const {
        isModalUpdateUserOpen,
        setIsModalUpdateUserOpen,
        dataUserUpdate,
        setDataUserUpdate,
        loaderUser
    } = props

    useEffect(() => {
        if (dataUserUpdate) {
            setId(dataUserUpdate._id)
            setFullname(dataUserUpdate.fullName)
            setPhone(dataUserUpdate.phone)
        }
    }, [dataUserUpdate])

    const handleSubmitUpdateUser = async () => {
        try {
            const response = await updateUserAPI(id, fullname, phone)
            if (response.data) {
                notification.success({
                    message: 'Update success',
                    description: 'Cập nhật thành công !'
                })
            }
            resetForm()
            await loaderUser()
        } catch (error) {
            notification.error({
                message: 'delete success',
                description: JSON.stringify(error.response.data.message)
            })
        }
    }

    const resetForm = () => {
        setFullname('')
        setPhone('')
        setIsModalUpdateUserOpen(false)
        setDataUserUpdate(null)
    }

    return (
        <div className="form_user">
            <Modal title="UPDATE USER"
                open={isModalUpdateUserOpen}
                onOk={handleSubmitUpdateUser}
                onCancel={() => resetForm()}
                maskClosable={false}
                okText={'SAVE'}
            >
                <div>
                    <p className='mb10'>ID</p>
                    <Input className='mb10' value={id} disabled />
                </div>
                <div>
                    <p className='mb10'>Full name</p>
                    <Input className='mb10' value={fullname} onChange={(event) => setFullname(event.target.value)} />
                </div>
                <div>
                    <p className='mb10'>Phone</p>
                    <Input className='mb10' value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
            </Modal>
        </div>
    )
}

export default UserUpdateModal