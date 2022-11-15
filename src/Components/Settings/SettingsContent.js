import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CompanyTab from './CompanyTab';

export default function SettingsContent() {
  return (
    <div className='settings-content'>
        <Tabs defaultActiveKey='company'>
            <Tab eventKey='company' title='Company Details' className='p-3'>
                <CompanyTab />
            </Tab>
            <Tab eventKey='smtp' title='SMTP Details' className='p-3'>
                
            </Tab>
        </Tabs>
    </div>
  )
}
