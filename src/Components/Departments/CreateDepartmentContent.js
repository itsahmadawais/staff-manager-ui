import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentAction from './DepartmentAction';

export default function CreateDepartmentContent() {
  const navigate = useNavigate();

  const createNewDept = (values) => {
    navigate('/departments');
  };

  return (
    <div className='create-department-content'>
      <h5 className='mb-3'>Create New Department</h5>
      <DepartmentAction 
        dept={{name: '', description: ''}}
        submitValues={createNewDept}
        actionType='create'
      />
    </div>
  )
}
