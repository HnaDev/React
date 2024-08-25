import Header from './components/layouts/header'
import Footer from './components/layouts/footer'
import { Outlet } from 'react-router-dom'


const App = () => {

  return (
    <>
      {/* `<Outlet/>` is a special component provided by React Router that is used to render child routes
    within a parent route. It acts as a placeholder where child routes will be rendered based on the
    route configuration defined in the parent component. */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
