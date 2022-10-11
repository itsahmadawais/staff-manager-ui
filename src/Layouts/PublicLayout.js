import React from 'react';

export default function PublicLayout({children}) {
  return (
    <div className='container-fluid public-layout'>
        <div className='row g-0'>
            <div className='col-md-12'>
                {children}
            </div>
        </div>
    </div>
  )
}
