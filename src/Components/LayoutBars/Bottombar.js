import React, { useContext } from 'react';
import { AppContext } from '../../Contexts';

export default function Bottombar() {
  const {bottomBar} = useContext(AppContext);

  return (
    <div className='bottombar d-flex align-items-center justify-content-between py-3 px-4'>
      <p className='mb-0'>{bottomBar.copyrightText}</p>
      <p className='mb-0'>{bottomBar.versionText}</p>
    </div>
  )
}
