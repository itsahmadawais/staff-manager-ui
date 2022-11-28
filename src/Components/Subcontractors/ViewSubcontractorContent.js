import React, { useState, useEffect } from 'react'
import { Button, Tab, Table, Tabs } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { v4 as uuid } from 'uuid';
import { Loader } from '../UI';
import UploadDocModal from '../Modals/UploadDocModal';

export default function ViewSubcontractorContent() {
    const [data, setData] = useState({
        id: '1',
        firstName: 'Micheal',
        lastName: 'Clark',
        email: 'micheal.clark@example.com',
        phone: '',
        mobile: '',
        street: '',
        zipcode: '',
        city: '',
        country: '',
        accessPortal: true,
        departments: [
          'BT Company',
          'Security'
        ],
        positions: [
          'Security Officer',
          'Manager'
        ],
        docs: [
          {
            id: '1',
            file: {
              object: window.location.pathname,
              name: 'MyCV.pdf'
            },
            description: 'My CV File',
            uploader: 'Micheal Clark'
          }
        ]
      });
      const [docToEdit, setDocToEdit] = useState({});
      const [actionType, setActionType] = useState('');
      const [isLoading, setIsLoading] = useState(true);
      const [show, setShow] = useState(false);
      const currentUser = 'Current User';
    
      const handleClose = () => setShow(!show);
    
      const checkValue = (value) => value ? value : 'N/A';
    
      const setEditValues = (data) => {
        setActionType('edit');
        setDocToEdit(data);
        handleClose();
      };
    
      const setCreateValues = () => {
        setActionType('create');
        handleClose();
      };
    
      const editDoc = (docId, values) => {
        let newData = {...data};
        let index = newData.docs.findIndex(obj => obj.id === docId);
        newData.docs[index].file = values.file;
        newData.docs[index].description = values.description;
        newData.docs[index].uploader = currentUser;
        setData(newData);
        handleClose();
      };
    
      const createNewDoc = (values) => {
        let newData = {...data};
        newData.docs.push({
          id: uuid().slice(0,3),
          file: values.file,
          description: values.description,
          uploader: currentUser
        });
        setData(newData);
        handleClose();
      };
    
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }, [isLoading]);

    return (
        <div className='view-subcontractor-content content-max-height custom-scrollbar'>
            <h5 className='mb-3'>Subcontractor Details</h5>
            {
                isLoading ? (
                <div className='d-flex justify-content-center'>
                    <Loader />
                </div>
                ) : (
                    <>
                        <div className='row g-0 details p-3 pb-0 mb-3'>
                            <div className='col-md-4'>
                                <p className='heading-label'>First Name</p>
                                <p>{data.firstName}</p>
                                <p className='heading-label'>Phone</p>
                                <p>{checkValue(data.phone)}</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='heading-label'>Last Name</p>
                                <p>{data.lastName}</p>
                                <p className='heading-label'>Mobile</p>
                                <p>{checkValue(data.mobile)}</p>
                            </div>
                            <div className='col-md-4'>
                                <p className='heading-label'>Email</p>
                                <p>{data.email}</p>
                                <p className='heading-label'>Access Portal</p>
                                <p>{data.accessPortal ? 'Allowed' : 'Not Allowed'}</p>
                            </div>
                        </div>
                        <Tabs defaultActiveKey='location'>
                            <Tab eventKey='location' title='Location' className='p-3'>
                                <div className='row g-0'>
                                    <div className='col-md-6'>
                                        <p className='heading-label'>Street Address</p>
                                        <p>{checkValue(data.street)}</p>
                                        <p className='heading-label'>Zipcode</p>
                                        <p>{checkValue(data.zipcode)}</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p className='heading-label'>City/Town</p>
                                        <p>{checkValue(data.city)}</p>
                                        <p className='heading-label'>Country</p>
                                        <p>{checkValue(data.country)}</p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey='additional' title='Additional Details' className='p-3'>
                                <div className='row g-0'>
                                <div className='col-md-4'>
                                    <p className='heading-label'>Departments</p>
                                    {
                                    data.departments ? (
                                        <ul>
                                        {
                                            data.departments.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                            })
                                        }
                                        </ul>
                                    ) : (
                                        'N/A'
                                    )
                                    }
                                </div>
                                <div className='col-md-8'>
                                    <p className='heading-label'>Positions</p>
                                    {
                                    data.positions ? (
                                        <ul>
                                        {
                                            data.positions.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                            })
                                        }
                                        </ul>
                                    ) : (
                                        'N/A'
                                    )
                                    }
                                </div>
                                </div>
                            </Tab>
                            <Tab eventKey='docs' title='Docs' className='p-3'>
                                <div className='text-end'>
                                    <Button variant='primary' onClick={setCreateValues}>
                                        Upload Doc
                                    </Button>
                                </div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                        <th>File</th>
                                        <th>Description</th>
                                        <th>Uploaded by</th>
                                        <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        !data.docs.length ? (
                                            <tr className='text-center'>
                                            <td colSpan={4}>No data</td>
                                            </tr>
                                        ) : (
                                            data.docs.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                <td>
                                                    {item.file.name}
                                                </td>
                                                <td>
                                                    {item.description}
                                                </td>
                                                <td>
                                                    {item.uploader}
                                                </td>
                                                <td>
                                                    <Button variant='icon' className='me-2' onClick={() => setEditValues(item)}>
                                                    <AiOutlineEdit size={20} />
                                                    </Button>
                                                    <Button variant='icon' className='me-2'>
                                                    <AiOutlineDelete size={20} />
                                                    </Button>
                                                </td>
                                                </tr>
                                            )
                                            })
                                        )
                                        }
                                    </tbody>
                                </Table>

                                {/***** Upload Doc Modal *****/}
                                <UploadDocModal 
                                    data={docToEdit}
                                    show={show}
                                    handleClose={handleClose}
                                    actionType={actionType}
                                    editDoc={editDoc}
                                    createNewDoc={createNewDoc}
                                />
                            </Tab>
                        </Tabs>
                    </>
                )
            }
        </div>
    )
}
