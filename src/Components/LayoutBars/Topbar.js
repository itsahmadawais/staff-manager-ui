import React, { useContext } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { BiEnvelope, BiBell } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Avatar } from '../UI';
import { AppContext } from '../../Contexts';

export default function Topbar() {
  const notifications = [
    {
      id: '1',
      content: 'Shift created successfully'
    },
    {
      id: '2',
      content: 'New employee created successfully'
    },
    {
      id: '3',
      content: 'New employee created successfully'
    }
  ];

  const {userData} = useContext(AppContext);

  return (
    <div className='topbar d-flex align-items-center justify-content-between p-3'>
      <div className='topbar-left'>
        <Link to={'/profile'} className='link d-flex align-items-center'>
          <Avatar image={userData.image} />
          <p className='ms-2 mb-0'>{userData.firstName+' '+userData.lastName}</p>
        </Link>
      </div>
      <div className='topbar-right d-flex align-items-center'>
        <Dropdown className='me-2'>
          <Dropdown.Toggle variant='icon'>
            <BiBell size={24} /><span className='badge'>1</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className='shadow-sm'>
            <p className='head-text text-center pb-2 mb-0'>Notifications</p>
            {
              notifications.length ?
              notifications.map((item) => {
                return <Dropdown.Item key={item.id} className='py-2'>{item.content}</Dropdown.Item>
              }) :
              <p className='text-center mt-4'>No New Notifications</p>
            }
          </Dropdown.Menu>
        </Dropdown>
        <Button variant='icon'>
          <BiEnvelope size={24} /><span className='badge'>1</span>
        </Button>
      </div>
    </div>
  )
}
