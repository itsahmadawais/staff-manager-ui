import React from 'react';
import ViewEmployeeContent from '../../Components/Employees/ViewEmployeeContent';
import LoginLayout from '../../Layouts/LoginLayout';

export default function ViewEmployee() {
  return (
    <LoginLayout>
        <ViewEmployeeContent />
    </LoginLayout>
  )
}
