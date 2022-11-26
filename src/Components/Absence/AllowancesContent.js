import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Loader, Pagination, SearchFilter } from '../UI';
import AllowanceModal from './AllowanceModal';
import { v4 as uuid } from 'uuid';

export default function AllowancesContent() {
    const users = [
        {
            id: '1',
            firstName: 'Micheal',
            lastName: 'Clark'
        },
        {
            id: '2',
            firstName: 'Aalam',
            lastName: 'Zaib'
        },
        {
            id: '3',
            firstName: 'Malik',
            lastName: 'Shahzad'
        }
    ];
    const [allowances, setAllowances] = useState([
        {
            id: '1',
            user: {
                id: '1',
                firstName: 'Micheal',
                lastName: 'Clark'
            },
            allowance: '2'
        },
        {
            id: '2',
            user: {
                id: '2',
                firstName: 'Aalam',
                lastName: 'Zaib'
            },
            allowance: '4'
        },
        {
            id: '3',
            user: {
                id: '3',
                firstName: 'Malik',
                lastName: 'Shahzad'
            },
            allowance: '4'
        }
    ]);
    const [currentAllowances, setCurrentAllowances] = useState(allowances);
    const [searchAllowance, setSearchAllowance] =  useState('');
    const [show, setShow] = useState(false);
    const [allowanceToEdit, setAllowanceToEdit] = useState({});
    const [actionType, setActionType] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;

    const handleClose = () => setShow(!show);

    const setCreateNewValues = () => {
        setActionType('create');
        handleClose();
    };

    const setToEditValues = (role) => {
        setActionType('edit');
        setAllowanceToEdit({id: role.id, user: role.id, allowance: role.allowance})
        handleClose();
    };

    const editAllowance = (allowanceId, values) => {
        let newData = [...allowances];
        let index = newData.findIndex(item => item.id === allowanceId);
        let user = users.find(item => item.id === values.user);
        newData[index].user.id = user.id;
        newData[index].user.firstName = user.firstName;
        newData[index].user.lastName = user.lastName;
        newData[index].allowance = values.allowance.toString();
        setAllowances(newData);
        handleClose();
    };

    const createNewAllowance = (values) => {
        let newData = [...allowances];
        newData.push({
            id: uuid().slice(0,3),
            user: users.find(obj => obj.id === values.user),
            allowance: values.allowance.toString()
        });
        setAllowances(newData);
        handleClose();
        setIsLoading(true);
    };

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='allowances-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-7'>
                    <h5>Allowances</h5>
                </div>
                <div className='col-md-2 text-end pe-2'>
                    <Button variant='primary' onClick={setCreateNewValues}>
                        Add Allowance
                    </Button>
                </div>
                <div className='col-md-3'>
                    <SearchFilter 
                        placeholder={'Search User Name'} 
                        handleSearch={setSearchAllowance} 
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
                                    <th>Allowances</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allowances.length ? (
                                        currentAllowances.filter((item) => {
                                            if(searchAllowance === '') {
                                                return item;
                                            } else if (item.user.firstName.toLowerCase().includes(searchAllowance.toLowerCase())) {
                                                return item;
                                            } else if (item.user.lastName.toLowerCase().includes(searchAllowance.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.user.firstName+' '+item.user.lastName}</td>
                                                    <td>{item.allowance}</td>
                                                    <td>
                                                        <Button variant='icon' className='me-2' onClick={() => setToEditValues(item)}>
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
                            !isLoading && allowances.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={allowances}
                                        setCurrentItems={setCurrentAllowances}
                                        perPageItems={perPageItems}
                                    />
                                </div>
                        }

                        {/***** Allowance Edit/Create Modal *****/}
                        <AllowanceModal
                            data={allowanceToEdit}
                            users={users}
                            show={show}
                            handleClose={handleClose}
                            actionType={actionType}
                            editAllowance={editAllowance}
                            createNewAllowance={createNewAllowance}
                        />
                    </>
                )
            }
        </div>
    )
}
