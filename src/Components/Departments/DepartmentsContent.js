import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Loader, Pagination } from '../UI';

export default function DepartmentsContent() {
    const [depts, setDepts] = useState([
        {
            id: '1',
            name: 'BT Key Account',
            description: ''
        },
        {
            id: '2',
            name: 'CCHD',
            description: ''
        },
        {
            id: '3',
            name: 'EE Key Account',
            description: ''
        },
        {
            id: '4',
            name: 'MCU',
            description: ''
        },
        {
            id: '5',
            name: 'MET Police',
            description: ''
        },
        {
            id: '6',
            name: 'MRU',
            description: ''
        },
        {
            id: '7',
            name: 'Pure Gyms',
            description: ''
        },
        {
            id: '8',
            name: 'Reactive Security',
            description: ''
        },
        {
            id: '9',
            name: 'Risk & Resillience',
            description: ''
        }
    ]);
    const [currentDepts, setCurrentDepts] = useState(depts);
    const [searchDept, setSearchDept] =  useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);
    
    return (
        <div className='department-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'></div>
                <div className='col-md-3'>
                    <Form.Control
                        type='text'
                        name='search-input'
                        placeholder='Search Department Name'
                        onChange={(e) => setSearchDept(e.target.value)}
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
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    depts.length ? (
                                        currentDepts.filter((item) => {
                                            if(searchDept === '') {
                                                return item;
                                            } else if (item.name.toLowerCase().includes(searchDept.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.description}</td>
                                                    <td>
                                                        <Button variant='icon' className='me-2' onClick={() => navigate('/departments/edit')}>
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
                            !isLoading && depts.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={depts}
                                        setCurrentItems={setCurrentDepts}
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
