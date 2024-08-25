import { Button, Modal, Input, notification } from 'antd';
import { useState } from "react";
import { createUserAPI } from "../../services/api.services";

const UserForm = (props) => {
    const { loaderUser } = props
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmitAddUser = async () => {
        try {
            const response = await createUserAPI(fullname, email, phone, password)
            if (response.data) {
                notification.success({
                    message: 'Create success',
                    description: 'Tạo mới thành công !'
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

    /**
     * The function `resetForm` clears input fields and closes a modal in a React component.
     */
    const resetForm = () => {
        setFullname('')
        setEmail('')
        setPhone('')
        setPassword('')
        setIsModalOpen(false)
    }

    return (
        <div className="form_user">
            <Modal title="CREATE USER"
                open={isModalOpen}
                onOk={handleSubmitAddUser}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText={'SAVE'}
                >
                <div>
                    <p className='mb10'>Full name</p>
                    <Input className='mb10' value={fullname} onChange={(event) => setFullname(event.target.value)} />
                </div>
                <div>
                    <p className='mb10'>Email</p>
                    <Input className='mb10' value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <p className='mb10'>Password</p>
                    <Input.Password className='mb10' value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <p className='mb10'>Phone</p>
                    <Input className='mb10' value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
            </Modal>

            <div className="btn_show--modal" >
                <p>Table Users</p>
                <Button onClick={() => setIsModalOpen(true)}>CREATE USER</Button>
            </div>

        </div>
    )
}
export default UserForm