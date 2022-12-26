import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
const AdminLayout = () => {
  const [isVisible, setOpen] = useState(false);
  const toggleSideBar = ()=>{
    setOpen(!isVisible);
  }
  return (
    <div style={{display:'flex', height:'100vh', width:'100vw'}}>
    <SideBar sidebar={isVisible}/>
    <div style={{display:'flex', flexDirection:'column', width:'100vw'}}>
    <div style={{display:'flex', width:'100%', background:'purple', alignItems:'center', padding:'16px 16px'}}> 
    <i className="ri-menu-line" style={{fontSize:'30px'}} onClick={toggleSideBar}></i></div>
    <Outlet/>
    </div>
    </div>
  )
}

export default AdminLayout