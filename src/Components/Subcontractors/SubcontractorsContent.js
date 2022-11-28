import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Loader, Pagination, SearchFilter } from '../UI';

export default function SubcontractorsContent() {
    const subcontractors = [
        {
            id: '1',
            firstName: 'Micheal',
            lastName: 'Clark',
            email: 'micheal.clark@example.com',
            mobile: '00000000000'
        },
        {
            id: '2',
            firstName: 'Micheal',
            lastName: 'Clark',
            email: 'micheal.clark@example.com',
            mobile: '00000000000'
        },
        {
            id: '3',
            firstName: 'Micheal',
            lastName: 'Clark',
            email: 'micheal.clark@example.com',
            mobile: '00000000000'
        }
    ];
    const [currentSubs, setCurrentSubs] = useState(subcontractors);
    const [searchSub, setSearchSub] =  useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='subcontractors-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'>
                    <h5>Subcontractors</h5>
                </div>
                <div className='col-md-3'>
                    <SearchFilter 
                        placeholder={'Search User Name'} 
                        handleSearch={setSearchSub} 
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subcontractors.length ? (
                                        currentSubs.filter((item) => {
                                            if(searchSub === '') {
                                                return item;
                                            } else if (item.firstName.toLowerCase().includes(searchSub.toLowerCase())) {
                                                return item;
                                            } else if (item.lastName.toLowerCase().includes(searchSub.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.firstName+' '+item.lastName}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.mobile}</td>
                                                    <td>
                                                        <Button variant='icon' className='me-2' onClick={() => navigate('/subcontractors/detail')}>
                                                            <AiOutlineEye size={20} />
                                                        </Button>
                                                        <Button variant='icon' className='me-2' onClick={() => navigate('/subcontractors/edit')}>
                                                            <AiOutlineEdit size={20} />
                                                        </Button>
                                                        <Button variant='icon'>
                                                            <AiOutlineDelete size={20} />
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
                            !isLoading && subcontractors.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={subcontractors}
                                        setCurrentItems={setCurrentSubs}
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
