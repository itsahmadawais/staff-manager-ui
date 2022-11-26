import React from 'react';
import EmployeesContent from '../../Components/Employees/EmployeesContent';
import LoginLayout from '../../Layouts/LoginLayout';

export default function Employees() {
  return (
    <LoginLayout>
        <EmployeesContent />
    </LoginLayout>
  )
}
