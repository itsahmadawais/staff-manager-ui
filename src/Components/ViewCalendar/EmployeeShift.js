import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded } from "react-icons/bi";
import EditShiftModal from './EditShiftModal';
import ViewShiftModal from './ViewShiftModal';

export default function EmployeeShift({data, employee, dayIndex, shiftIndex, handleShiftEdit, deleteShift, changeShiftStatus}) {
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseView = () => setShowView(!showView);
  const handleCloseEdit = () => setShowEdit(!showEdit);

  const editStatus = (status) => {
    let newData = {...data, status};
    changeShiftStatus(newData, employee !== '' ? employee.id : 'Unassigned', dayIndex, shiftIndex);
  };
  
  return (
    <>
      <Dropdown className='shift-menu'>
        <Dropdown.Toggle variant='action'>
          <BiDotsVerticalRounded size={18} color='#fff' />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            data.status !== 'Awaiting' ? (
              <Dropdown.Item onClick={() => editStatus('Awaiting')}>
                Awaiting
              </Dropdown.Item>
            ): (
              null
            )
          }
          {
            data.status !== 'Confirmed' ? (
              <Dropdown.Item onClick={() => editStatus('Confirmed')}>
                Confirmed
              </Dropdown.Item>
            ): (
              null
            )
          }
          {
            data.status !== 'Declined' ? (
              <Dropdown.Item onClick={() => editStatus('Declined')}>
                Declined
              </Dropdown.Item>
            ): (
              null
            )
          }
          {
            data.status !== 'Failed to Confirm' ? (
              <Dropdown.Item onClick={() => editStatus('Failed to Confirm')}>
                Failed to Confirm
              </Dropdown.Item>
            ): (
              null
            )
          }
          <Dropdown.Item onClick={() => deleteShift(employee !== '' ? employee.id : 'Unassigned', dayIndex, shiftIndex)}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className='employee-shift mb-1 p-1' onClick={handleCloseView}>
        <span>{data.client}</span>
        <span> - </span>
        <span>{data.site}</span>
        <span> - </span>
        <span>{data.startTime}</span>
        <span> - </span>
        <span>{data.endTime}</span>
        {
          data.status !== 'Confirmed' ? <p className='status mb-0 mt-1 px-1'>{data.status}</p> : ''
        }
      </div>
      <ViewShiftModal 
        data={data} 
        employee={employee} 
        show={showView} 
        handleCloseView={handleCloseView} 
        handleCloseEdit={handleCloseEdit} 
      />
      <EditShiftModal 
        data={data} 
        employee={employee} 
        dayIndex={dayIndex}
        shiftIndex={shiftIndex} 
        show={showEdit} 
        handleClose={handleCloseEdit} 
        handleShiftEdit={handleShiftEdit} 
      />
    </>
  )
}
