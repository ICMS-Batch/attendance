import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
const AdminLayout = () => {
  return (
    <div style={{display:'flex', height:'100vh', width:'100vw'}}>
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default AdminLayout