import React from 'react';
import { Topbar, Sidebar, Bottombar } from '../Components/LayoutBars';

export default function LoginLayout({children}) {
  return (
    <div className='container-fluid login-layout p-0'>
        <div className='row g-0'>
            <div className='col-md-12'>
                <div className='d-flex'>
                    <Sidebar />
                    <div className='main-content-wrap flex-grow-1 py-2 px-3'>
                        <Topbar />
                        <div className='main-content p-3'>
                            {children}
                        </div>
                        <Bottombar />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
