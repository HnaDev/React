import { Input, notification } from "antd";
import { Button, Flex } from 'antd';
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../services/api.services";

const UserForm = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        const response = await createUserAPI(fullname, email, phone, password)
        if (response.data) {
            notification.success({
                message: 'Create success',
                description: 'Tạo mới thành công !'
            })
        }
    }
    return (
        <div className="form_user">
            <div>
                <p>Full name</p>
                <Input value={fullname} onChange={(event) => setFullname(event.target.value)} />
            </div>
            <div>
                <p>Email</p>
                <Input value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
                <p>Password</p>
                <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div>
                <p>Phone</p>
                <Input value={phone} onChange={(event) => setPhone(event.target.value)} />
            </div>
            <div>
                <Button onClick={handleClick}>CREATE USER</Button>
            </div>
        </div>
    )
}
export default UserForm