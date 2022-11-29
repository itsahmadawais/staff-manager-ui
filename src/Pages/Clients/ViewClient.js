import React from 'react';
import ViewClientContent from '../../Components/Clients/ViewClientContent';
import LoginLayout from '../../Layouts/LoginLayout';

export default function ViewClient() {
  return (
    <LoginLayout>
        <ViewClientContent />
    </LoginLayout>
  )
}
