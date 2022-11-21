import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Form, Table } from 'react-bootstrap';
import { Loader, Pagination } from '../UI';

export default function AbsenceReportsContent() {
    const [reports, setReports] = useState([
        {
            id: '1',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '05-11-2022',
            endDate: '08-11-2022',
            status: 'Approved'
        },
        {
            id: '2',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '10-11-2022',
            endDate: '11-11-2022',
            status: 'Approved'
        },
        {
            id: '3',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '06-11-2022',
            endDate: '07-11-2022',
            status: 'Approved'
        },
        {
            id: '4',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '13-11-2022',
            endDate: '20-11-2022',
            status: 'Approved'
        },
        {
            id: '5',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '13-11-2022',
            endDate: '20-11-2022',
            status: 'Approved'
        },
        {
            id: '6',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '10-11-2022',
            endDate: '11-11-2022',
            status: 'Approved'
        },
        {
            id: '7',
            firstName: 'Aalam',
            lastName: 'Zaib',
            type: 'Holiday',
            startDate: '05-11-2022',
            endDate: '08-11-2022',
            status: 'Approved'
        }
    ]);
    const [currentReports, setCurrentReports] =  useState(reports);
    const [searchReport, setSearchReport] =  useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);
    
    return (
        <div className='absence-reports-content'>
            <div className='row g-0 filters p-3 mb-4'>
                <h6>Filters</h6>
                <div className='col-md-6 pe-2'>
                    <Form.Label>
                        Start Date
                    </Form.Label>
                    <Form.Control
                        type='date'
                        name='start-date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className='col-md-6 ps-2'>
                    <Form.Label>
                        End Date
                    </Form.Label>
                    <Form.Control
                        type='date'
                        name='end-date'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'></div>
                <div className='col-md-3'>
                    <Form.Control
                        type='text'
                        name='search-input'
                        placeholder='Search User Name'
                        onChange={(e) => setSearchReport(e.target.value)}
                    />
                </div>
            </div>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center align-items-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Type</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reports.length ? (
                                        currentReports.filter((item) => {
                                            if(searchReport === '') {
                                                return item;
                                            } else if (item.firstName.toLowerCase().includes(searchReport.toLowerCase())) {
                                                return item;
                                            } else if (item.lastName.toLowerCase().includes(searchReport.toLowerCase())) {
                                                return item;
                                            }
                                        }).filter((item) => {
                                            let fromDate = moment(item.startDate, 'DD-MM-YYYY');
                                            if(startDate === '') {
                                                return item;
                                            } else if (moment(fromDate).isSameOrAfter(startDate)) {
                                                return item;
                                            }
                                        }).filter((item) => {
                                            let toDate = moment(item.endDate, 'DD-MM-YYYY');
                                            if(endDate === '') {
                                                return item;
                                            } else if (moment(toDate).isSameOrBefore(endDate)) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.firstName+' '+item.lastName}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.startDate}</td>
                                                    <td>{item.endDate}</td>
                                                    <td>{item.status}</td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={'5'} className='text-center'>No data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        {
                            !isLoading && reports.length > 5 &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={reports}
                                        setCurrentItems={setCurrentReports}
                                        perPageItems={5}
                                    />
                                </div>
                        }
                    </>
                )
            }
        </div>
    )
}
