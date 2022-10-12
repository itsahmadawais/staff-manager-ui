import React from 'react';
import LoginLayout from '../Layouts/LoginLayout';
import DashboardContent from '../Components/Dashboard/DashboardContent';

export default function Dashboard() {
  return (
    <LoginLayout>
        <DashboardContent />
    </LoginLayout>
  )
}
