import React, { useState, useEffect } from 'react';
import { Button, Tabs, Tab, Table } from 'react-bootstrap';
import { Loader } from '../UI';
import { v4 as uuid } from 'uuid';
import AddContactModal from '../Modals/AddContactModal';

export default function ViewClientContent() {
    const client = {
        id: '1',
        firstName: 'Micheal',
        lastName: 'Clark',
        email: 'micheal.clark@example.com',
        phone: '',
        accessPortal: true
    };
    const [location, setLocation] = useState({
        id: '1',
        name: 'Rah Wali Cantt',
        description: 'This is a city in Pakistan',
        street: 'Street 12',
        city: 'Gujranwala',
        state: 'Punjab',
        country: 'PK',
        contacts: [
          {
            id: '1',
            title: 'mr',
            name: 'No Man',
            email: 'noman@noman.co',
            phone: '00000000000',
            jobTitle: 'No Job'
          }
        ]
    });
    const titleOpts = [
        {value: 'mr', label: 'Mr.'},
        {value: 'ms', label: 'Ms.'},
        {value: 'mrs', label: 'Mrs.'},
        {value: 'miss', label: 'Miss.'}
    ];
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const handleClose = () => setShow(!show);
    
    const addContact = (values) => {
        let newData = {...location};
        newData.contacts.push({
          id: uuid().slice(0,3),
          title: values.title,
          name: values.name,
          email: values.email,
          phone: values.phone,
          jobTitle: values.jobTitle
        });
        setLocation(newData);
    };
    
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='view-client-content content-max-height custom-scrollbar'>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className='row g-0 details p-3 pb-0 mb-3'>
                            <div className='col-md-5'>
                                <p className='heading-label'>Name</p>
                                <p>{client.firstName+' '+client.lastName}</p>
                                <p className='heading-label'>Email</p>
                                <p>{client.email}</p>
                            </div>
                            <div className='col-md-5'>
                                <p className='heading-label'>Phone</p>
                                <p>{client.phone.length ? client.phone : 'N/A'}</p>
                                <p className='heading-label'>Access Portal</p>
                                <p>{client.accessPortal ? 'Allowed' : 'Not Allowed'}</p>
                            </div>
                            <div className='col-md-2'>
                                <Button variant='primary' onClick={handleClose}>
                                    Add Location Contact
                                </Button>
                                <AddContactModal 
                                    show={show}
                                    handleClose={handleClose}
                                    titleOpts={titleOpts}
                                    addContact={addContact}
                                />
                            </div>
                        </div>
                        <Tabs
                            defaultActiveKey='location'
                        >
                            <Tab eventKey='location' title='Location' className='p-3'>
                                <h5>{location.name}</h5>
                                <p>{location.street+', '+location.city+', '+location.state+', '+location.country}</p>
                            </Tab>
                            <Tab eventKey='contacts' title='Contacts' className='p-3'>
                                <Table responsive>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Job Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    location.contacts.length ? (
                                        location.contacts.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                            <td>{titleOpts.find(obj => obj.value === item.title).label+' '+item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.jobTitle}</td>
                                            </tr>
                                        )
                                        })
                                    ) : (
                                        <tr className='text-center'>
                                        <td colSpan={4}>No data</td>
                                        </tr>
                                    )
                                    }
                                </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </>
                )
            }
        </div>
    )
}
