import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import UserPage from './pages/user.jsx';
import BookPage from './pages/book.jsx';
import TodoApp from './components/todos/TodoAppComponent.jsx';
import ErrorPage from "./pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        // url mặc định sẽ dẫn tới
        element: <TodoApp/>,
      },
      {
        path: "/users",
        element: <UserPage />,
      }, {
        path: "/books",
        element: <BookPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
