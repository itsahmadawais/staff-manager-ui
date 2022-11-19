import React from 'react';
import { CreateUserContent } from '../../Components/Users';
import LoginLayout from '../../Layouts/LoginLayout';

export default function CreateUser() {
  return (
    <LoginLayout>
        <CreateUserContent />
    </LoginLayout>
  )
}
