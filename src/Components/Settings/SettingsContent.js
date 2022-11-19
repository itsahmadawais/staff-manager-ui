import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CompanyTab from './CompanyTab';
import SmtpTab from './SmtpTab';
import SystemTab from './SystemTab';

export default function SettingsContent() {
  return (
    <div className='settings-content'>
        <Tabs defaultActiveKey='company'>
            <Tab eventKey='company' title='Company Details' className='p-3'>
                <CompanyTab />
            </Tab>
            <Tab eventKey='system' title='System Details' className='p-3'>
                <SystemTab />
            </Tab>
            <Tab eventKey='smtp' title='SMTP Details' className='p-3'>
                <SmtpTab />
            </Tab>
        </Tabs>
    </div>
  )
}
