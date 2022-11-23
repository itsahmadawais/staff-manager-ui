import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Loader, Pagination, SearchFilter } from '../UI';

export default function LocationsContent() {
    const locations = [
        {
            id: '1',
            name: 'Rah Wali Cantt',
            clientFirstName: 'Asim',
            clientLastName: 'Azhar',
            country: 'PK'
        },
        {
            id: '2',
            name: 'Rah Wali Cantt',
            clientFirstName: 'Asim',
            clientLastName: 'Azhar',
            country: 'PK'
        },
        {
            id: '3',
            name: 'Rah Wali Cantt',
            clientFirstName: 'Asim',
            clientLastName: 'Azhar',
            country: 'PK'
        }
    ];
    const [currentLocs, setCurrentLocs] = useState(locations);
    const [searchLoc, setSearchLoc] =  useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='locations-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'></div>
                <div className='col-md-3'>
                    <SearchFilter 
                        placeholder={'Search Location Name'} 
                        handleSearch={setSearchLoc} 
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
                                    <th>Client</th>
                                    <th>Country</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    locations.length ? (
                                        currentLocs.filter((item) => {
                                            if(searchLoc === '') {
                                                return item;
                                            } else if (item.name.toLowerCase().includes(searchLoc.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.clientFirstName+' '+item.clientLastName}</td>
                                                    <td>{item.country}</td>
                                                    <td>
                                                        <Button variant='icon' className='me-2' onClick={() => navigate('/locations/detail')}>
                                                            <AiOutlineEye size={20} />
                                                        </Button>
                                                        <Button variant='icon' onClick={() => navigate('/locations/edit')}>
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
                            !isLoading && locations.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={locations}
                                        setCurrentItems={setCurrentLocs}
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
