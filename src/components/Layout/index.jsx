import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import FooterBar from '../FooterBar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">

        <Outlet />

      </div>
      <FooterBar />
    </div>
  )
}

export default Layout