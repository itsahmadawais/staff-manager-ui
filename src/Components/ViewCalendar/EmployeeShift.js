import React, { useState } from 'react';
import ViewShiftModal from './ViewShiftModal';

export default function EmployeeShift({data, employee}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  
  return (
    <>
      <div className='employee-shift mb-1 p-1' onClick={handleClose}>
        <span>{data.client}</span>
        <span> - </span>
        <span>{data.site}</span>
        <span> - </span>
        <span>{data.startTime}</span>
        <span> - </span>
        <span>{data.endTime}</span>
        {
          !data.published ? <p className='status mb-0 mt-1 px-1'>{data.status}</p> : ''
        }
      </div>
      <ViewShiftModal data={data} employee={employee} show={show} handleClose={handleClose} />
    </>
  )
}
