import React from 'react'
import { Avatar } from '../UI'
import NavMenu from './NavMenu'

export default function Sidebar() {
  return (
    <div className='sidebar px-2 py-3 custom-scrollbar'>
      <div className='sidebar-top d-flex flex-wrap align-items-center'>
        <Avatar image='/images/logo.png' />
        <p className='ms-3 mb-0'>Company Name</p>
      </div>
      <div className='nav-menu mt-4'>
        <NavMenu />
      </div>
    </div>
  )
}
