import { NavLink } from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <ul className="ulHeader">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/register">register</NavLink></li>
        </ul>
    )
}
export {Header}