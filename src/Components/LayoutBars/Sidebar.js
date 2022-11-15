import React, { useContext, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Avatar } from '../UI';
import NavMenu from './NavMenu';
import { AppContext } from '../../Contexts';

export default function Sidebar() {
  const {companyData} = useContext(AppContext);
  const [isMini, setIsMini] = useState(true);
  const sidebarRef = useRef(null);
  const [toggleMini, setToggleMini] = useState(false);

  const toggleSidebar = () => {
    if (toggleMini) {
      if (isMini) {
        sidebarRef.current.style.width = '250px';
        sidebarRef.current.style.overflow = 'auto';
        setIsMini(false);
      } else {
        sidebarRef.current.style.width = '65px';
        sidebarRef.current.style.overflow = 'hidden';
        setIsMini(true);
      }
    }
  };

  const sidebarToggleClick = () => {
    setToggleMini(!toggleMini);
    if (toggleMini) {
      sidebarRef.current.style.width = '250px';
      sidebarRef.current.style.overflow = 'auto';
      setIsMini(false);
    } else {
      sidebarRef.current.style.width = '65px';
      sidebarRef.current.style.overflow = 'hidden';
      setIsMini(true);
    }
  };

  return (
    <div style={{position: 'relative'}} className={toggleMini ? 'sidebar-wrap active' : 'sidebar-wrap'}>
      <Button className='toggle-arrow' onClick={sidebarToggleClick}>
        <BsArrowLeft size={16} />
      </Button>
      <div
        ref={sidebarRef} 
        className='sidebar px-2 py-3 custom-scrollbar'
        onMouseEnter={toggleSidebar} 
        onMouseLeave={toggleSidebar}
      >
        <div className='sidebar-top d-flex align-items-center'>
          <Avatar image={companyData.logo} />
          <p className='ms-3 mb-0'>{companyData.name}</p>
        </div>
        <div className='nav-menu mt-4'>
          <NavMenu />
        </div>
      </div>
    </div>
  )
}
