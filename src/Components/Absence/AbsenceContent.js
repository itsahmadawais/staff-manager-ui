import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Loader, Pagination, SearchFilter } from '../UI';

export default function AbsenceContent() {
    const absences = [
        {
            id: '1',
            firstName: 'Micheal',
            lastName: 'Clark',
            startDate: '20-11-2022',
            endDate: '21-11-2022'
        },
        {
            id: '2',
            firstName: 'Micheal',
            lastName: 'Clark',
            startDate: '20-11-2022',
            endDate: '21-11-2022'
        },
        {
            id: '3',
            firstName: 'Micheal',
            lastName: 'Clark',
            startDate: '20-11-2022',
            endDate: '21-11-2022'
        }
    ];
    const [currentAbsences, setCurrentAbsences] = useState(absences);
    const [searchAbsence, setSearchAbsence] =  useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='absence-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'>
                    <h5>Absences</h5>
                </div>
                <div className='col-md-3'>
                    <SearchFilter 
                        placeholder={'Search User Name'} 
                        handleSearch={setSearchAbsence} 
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
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    absences.length ? (
                                        currentAbsences.filter((item) => {
                                            if(searchAbsence === '') {
                                                return item;
                                            } else if (item.firstName.toLowerCase().includes(searchAbsence.toLowerCase())) {
                                                return item;
                                            } else if (item.lastName.toLowerCase().includes(searchAbsence.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.firstName+' '+item.lastName}</td>
                                                    <td>{item.startDate}</td>
                                                    <td>{item.endDate}</td>
                                                    <td>
                                                        <Button variant='icon' className='me-2'>
                                                            <AiOutlineEye size={20} />
                                                        </Button>
                                                        <Button variant='icon'>
                                                            <AiOutlineEdit size={20} />
                                                        </Button>
                                                    </td>
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
                            !isLoading && absences.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={absences}
                                        setCurrentItems={setCurrentAbsences}
                                        perPageItems={perPageItems}
                                    />
                                </div>
                        }
                    </>
                )
            }
        </div>
    )
}
