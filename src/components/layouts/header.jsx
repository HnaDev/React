import { HomeOutlined, UserOutlined, BookFilled, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: '/',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/users">Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to="/books">Books</Link>,
            key: 'books',
            icon: <BookFilled />,
        },
        {
            label: <Link to="/login">login</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        },
        {
            label: <Link to="/register">register</Link>,
            key: 'register',
            icon: <UsergroupAddOutlined />,
        }
    ];

    const [current, setCurrent] = useState('/')

    const onClick = (e) => {
        setCurrent(e.key);
    }

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header 