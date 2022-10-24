import React, { useState, useEffect } from 'react'
import { Modal, Button, Table, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Loader, Pagination } from '../UI';

export default function ViewShiftModal({data, employee, show, handleCloseView, handleCloseEdit}) {
    const [searchEmp, setSearchEmp] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [currentSuggestedEmps, setCurrentSuggestedEmps] = useState(data.suggestedEmployees);

    const openEditModal = () => {
        handleCloseView();
        handleCloseEdit();
    };
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }, [isLoading]);
    
    return (
        <Modal 
            show={show} 
            onHide={handleCloseView}
            className='shift-modal max-modal-height'
            size='xl'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Shift Details ({data.client} - {data.site})</Modal.Title>
            </Modal.Header>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center my-3'>
                        <Loader />
                    </div>
                ) : (
                    <Modal.Body className='custom-scrollbar'>
                        <div className='row g-0'>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Client</p>
                                <p>{data.client}</p>
                                <p className='field-name mb-0'>Position</p>
                                <p>{data.position}</p>
                                <p className='field-name mb-0'>Case</p>
                                <p>{data.case}</p>
                                <p className='field-name mb-0'>Type</p>
                                <p>{data.type}</p>
                            </div>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Site</p>
                                <p>{data.site}</p>
                                <p className='field-name mb-0'>Employee</p>
                                {
                                    employee !== '' ? (
                                        <Link to={'#'} className='link'>{employee.name}</Link>
                                    ) : (
                                        <p>Unassigned</p>
                                    )
                                }
                                <p className='field-name mb-0'>Past Employees</p>
                                {
                                    data.pastEmployees.length ?
                                    <div className='past-employees d-flex flex-wrap'>
                                        {
                                            data.pastEmployees.map((item) => {
                                                return(
                                                    <Link key={item.id} to={'#'} className='link me-1'>
                                                        {item.name}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div> :
                                    <p>No past employees on this shift</p>
                                }
                            </div>
                        </div>
                        <hr className='mt-0' />
                        <div className='row g-0'>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Start Date</p>
                                <p>{data.startDate}</p>
                                <p className='field-name mb-0'>Start Time</p>
                                <p>{data.startTime}</p>
                            </div>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>End Date</p>
                                <p>{data.endDate}</p>
                                <p className='field-name mb-0'>End Time</p>
                                <p>{data.endTime}</p>
                            </div>
                        </div>
                        <hr className='mt-0' />
                        <div className='row g-0'>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Pay Rate</p>
                                <p>${data.payRate}</p>
                                <p className='field-name mb-0'>Extra Rate</p>
                                <p>${data.extraRate}</p>
                            </div>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Charge Rate</p>
                                <p>${data.chargeRate}</p>
                            </div>
                        </div>
                        <hr className='mt-0' />
                        <div className='row g-0'>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Cancelled</p>
                                <p>{data.cancelled ? 'Yes' : 'No'}</p>
                            </div>
                            <div className='col-md-6'>
                                <p className='field-name mb-0'>Published</p>
                                <p>{data.published ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                        <hr className='mt-0' />
                        {
                            data.hasOwnProperty('suggestedEmployees') &&
                            <div className='suggested-employees'>
                                <p className='field-name'>Suggested Employees</p>
                                <Form.Control
                                    type='text'
                                    name='suggested-employee-search'
                                    placeholder='Search Employee'
                                    onChange={(e) => setSearchEmp(e.target.value)}
                                />
                                <Table className='mt-3' bordered>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Shift Count</th>
                                            <th>Smallest Distance</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.suggestedEmployees.length ? (
                                                currentSuggestedEmps.filter((item) => {
                                                    if (searchEmp === '') {
                                                        return item;
                                                    } else if (item.firstName.toLowerCase().includes(searchEmp.toLowerCase())) {
                                                        return item;
                                                    } else if (item.lastName.toLowerCase().includes(searchEmp.toLowerCase())) {
                                                        return item;
                                                    } else if (item.email.toLowerCase().includes(searchEmp.toLowerCase())) {
                                                        return item;
                                                    }
                                                }).map((item) => {
                                                    return(
                                                        <tr key={item.id}>
                                                            <td>{item.firstName}</td>
                                                            <td>{item.lastName}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.shiftCount}</td>
                                                            <td>{item.smallestDistance}</td>
                                                            <td>
                                                                <Link to={'#'} className='link'>View</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan={'6'}>No data</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                                {
                                    !isLoading && data.suggestedEmployees.length > 5 &&
                                    <div className='d-flex justify-content-end'>
                                        <Pagination 
                                            data={data.suggestedEmployees}
                                            setCurrentItems={setCurrentSuggestedEmps}
                                            perPageItems={5}
                                        />
                                    </div>
                                }
                            </div>
                        }
                    </Modal.Body>
                )
            }
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseView}>
                    View Shift
                </Button>
                <Button variant="secondary" onClick={handleCloseView}>
                    Close
                </Button>
                <Button variant="primary" onClick={openEditModal}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
