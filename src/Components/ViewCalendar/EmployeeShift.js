import React, { useState } from 'react';
import EditShiftModal from './EditShiftModal';
import ViewShiftModal from './ViewShiftModal';

export default function EmployeeShift({data, employee}) {
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseView = () => setShowView(!showView);
  const handleCloseEdit = () => setShowEdit(!showEdit);
  
  return (
    <>
      <div className='employee-shift mb-1 p-1' onClick={handleCloseView}>
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
      <ViewShiftModal data={data} employee={employee} show={showView} handleCloseView={handleCloseView} handleCloseEdit={handleCloseEdit} />
      <EditShiftModal data={data} employee={employee} show={showEdit} handleClose={handleCloseEdit} />
    </>
  )
}
