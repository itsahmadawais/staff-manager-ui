import React, { useState } from 'react';
import { Topbar, Sidebar, Bottombar } from '../Components/LayoutBars';
import { AppContext } from '../Contexts';

export default function LoginLayout({children}) {
    const bottomBar = {
        copyrightText: 'Copyright © 2022 Staff Manager. All rights reserved.',
        versionText: 'Version 1.0'
    };
    const [userData, setUserData] = useState({
        image: '/images/user.jpg',
        firstName: 'Micheal',
        lastName: 'Clark',
        email: 'micheal.clark@example.com'
    });
    const [companyData, setCompanyData] = useState({
        logo: '/images/logo.png',
        name: 'Company Name'
    });

    const dispatchEvents = (actionType, payLoad) => {
        switch (actionType) {
            case 'UPDATE_USER':
                setUserData(payLoad);
                break;
            case 'UPDATE_COMPANY':
                setCompanyData({payLoad});
                break;
            default:
                break;
        }
    };
    
    return (
        <div className='container-fluid login-layout p-0'>
            <div className='row g-0'>
                <div className='col-md-12'>
                    <div className='d-flex'>
                        {
                            <AppContext.Provider value={{bottomBar, userData, companyData, dispatchEvents}}>
                                <Sidebar />
                                <div className='main-content-wrap flex-grow-1 py-2 px-3'>
                                    <Topbar />
                                    <div className='main-content p-3'>
                                        {children}
                                    </div>
                                    <Bottombar />
                                </div>
                            </AppContext.Provider>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
