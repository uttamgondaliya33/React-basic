
import Header from "./components/Header/Header.jsx";
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <Layout>
        <Header />
        <Outlet />
        <footer />
    </Layout>
  )
}

export default Layout