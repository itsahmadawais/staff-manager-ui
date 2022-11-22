import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentAction from './DepartmentAction';

export default function EditDepartmentContent() {
  const dept = {
    id: '1',
    name: 'BT Key Account',
    description: ''
  };
  const navigate = useNavigate();

  const editDept = (deptId, values) => {
    navigate('/departments');
  };

  return (
    <div className='create-department-content'>
      <h5 className='mb-3'>Edit Department</h5>
      <DepartmentAction 
        dept={dept}
        submitValues={editDept}
        actionType='edit'
      />
    </div>
  )
}
