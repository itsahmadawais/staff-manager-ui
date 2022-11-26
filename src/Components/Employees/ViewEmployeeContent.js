import React, { useState, useEffect } from 'react'
import { Button, Tab, Table, Tabs } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { v4 as uuid } from 'uuid';
import { Loader } from '../UI';
import UploadDocModal from './UploadDocModal';

export default function ViewEmployeeContent() {
  const [data, setData] = useState({
    id: '1',
    empId: '',
    firstName: 'Micheal',
    lastName: 'Clark',
    email: 'micheal.clark@example.com',
    mobile: '',
    street: '',
    city: '',
    state: '',
    country: '',
    dob: '10-11-1989',
    gender: 'male',
    nationality: '',
    sia: '',
    subcontractor: '',
    accessPortal: true,
    departments: [
      'BT Company',
      'Security'
    ],
    positions: [
      'Security Officer',
      'Manager'
    ],
    contract: {
      contractNo: '34672',
      start: '03-09-2022',
      end: '03-11-2022'
    },
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
    <div className='view-employee-content content-max-height custom-scrollbar'>
      <h5 className='mb-3'>Employee Details</h5>
      {
        isLoading ? (
          <div className='d-flex justify-content-center'>
            <Loader />
          </div>
        ) : (
          <>
            <div className='row g-0 details p-3 pb-0 mb-3'>
              <div className='col-md-4'>
                <p className='heading-label'>Name</p>
                <p>{data.firstName+' '+data.lastName}</p>
                <p className='heading-label'>Address</p>
                <p>{
                  data.street+data.city+data.state+data.country ?
                  data.street+' '+data.city+' '+data.state+' '+data.country :
                  'N/A'
                  }</p>
                <p className='heading-label'>Nationality</p>
                <p>{checkValue(data.nationality)}</p>
                <p className='heading-label'>Access Portal</p>
                <p>{data.accessPortal ? 'Allowed' : 'Not Allowed'}</p>
              </div>
              <div className='col-md-4'>
                <p className='heading-label'>Email</p>
                <p>{data.email}</p>
                <p className='heading-label'>DOB</p>
                <p>{checkValue(data.dob)}</p>
                <p className='heading-label'>SIA</p>
                <p>{checkValue(data.sia)}</p>
              </div>
              <div className='col-md-4'>
                <p className='heading-label'>Mobile</p>
                <p>{checkValue(data.mobile)}</p>
                <p className='heading-label'>Gender</p>
                <p>{checkValue(data.gender)}</p>
                <p className='heading-label'>Subcontractor</p>
                <p>{checkValue(data.subcontractor)}</p>
              </div>
            </div>
            <Tabs defaultActiveKey='additional'>
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
              <Tab eventKey='employment' title='Employment' className='p-3'>
                <p className='heading-label'>Contract No</p>
                <p>{checkValue(data.contract.contractNo)}</p>
                <p className='heading-label'>Period</p>
                <p>{checkValue(data.contract.start)+' to '+checkValue(data.contract.end)}</p>
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
