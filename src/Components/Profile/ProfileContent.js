import React, { useContext } from 'react';
import { AppContext } from '../../Contexts';
import { Avatar } from '../UI';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileTab from './ProfileTab';
import ChangePasswordTab from './ChangePasswordTab';

export default function ProfileContent() {
    const {userData} = useContext(AppContext);

    return (
        <div className='profile-content'>
            <div className='row g-0'>
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                    <div className='user-box text-center'>
                        <Avatar image={userData.image} imageClass='profile-image' />
                        <p className='name mt-2 mb-0'>{userData.firstName+' '+userData.lastName}</p>
                        <p>{userData.email}</p>
                    </div>
                </div>
                <div className='col-md-8 tabs-wrap ps-3'>
                <Tabs defaultActiveKey='profile'>
                    <Tab eventKey='profile' title='Profile' className='p-3'>
                        <ProfileTab />
                    </Tab>
                    <Tab eventKey='change-pass' title='Change Passowrd' className='p-3'>
                        <ChangePasswordTab />
                    </Tab>
                </Tabs>
                </div>
            </div>
        </div>
    )
}
