import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Loader, Pagination, SearchFilter } from '../UI';
import DeleteUserModal from './DeleteUserModal';
import EditUserModal from './EditUserModal';

export default function UsersContent() {
    const [users, setUsers] = useState([
        {
            id: '1',
            firstName: 'Aalam',
            lastName: 'Zaib',
            email: 'aalam.zaib@example.com',
            role: 'Employee'
        },
        {
            id: '2',
            firstName: 'Aalam',
            lastName: 'Zaib',
            email: 'aalam.zaib@example.com',
            role: 'Employee'
        },
        {
            id: '3',
            firstName: 'Malik',
            lastName: 'Shahzad',
            email: 'malik.shahzad@example.com',
            role: 'Client'
        },
        {
            id: '4',
            firstName: 'Admin',
            lastName: 'Admin',
            email: 'admin.admin@example.com',
            role: 'Admin'
        },
        {
            id: '5',
            firstName: 'Admin',
            lastName: 'Admin',
            email: 'admin.admin@example.com',
            role: 'Admin'
        },
        {
            id: '6',
            firstName: 'Admin',
            lastName: 'Admin',
            email: 'admin.admin@example.com',
            role: 'Admin'
        },
        {
            id: '7',
            firstName: 'Babar',
            lastName: 'Ahmad',
            email: 'babar.ahamd@example.com',
            role: 'Employee'
        }
    ]);
    const [currentUsers, setCurrentUsers] = useState(users);
    const [searchUser, setSearchUser] =  useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;
    const [showEdit, setShowEdit] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    const [userToDelete, setUserToDelete] = useState('');
    
    const handleCloseEdit = () => setShowEdit(!showEdit);
    const handleCloseDelete = () => setShowDelete(!showDelete);

    const setToEditValues = (data) => {
        setUserToEdit(data);
        handleCloseEdit();
    };

    const setToDeleteValues = (userId) => {
        setUserToDelete(userId);
        handleCloseDelete();
    };

    const handleUserEdit = (userId, values) => {
        let newData = [...users];
        let index = newData.findIndex(item => item.id === userId);
        newData[index].firstName = values.firstName;
        newData[index].lastName = values.lastName;
        newData[index].email = values.email;
        newData[index].role = values.role;
        setUsers(newData);
        setIsLoading(true);
    };
    
    const deleteUser = () => {
        let newData = [...users];
        let index = newData.findIndex(item => item.id === userToDelete);
        newData.splice(index, 1);
        setUsers(newData);
        handleCloseDelete();
        setIsLoading(true);
    };

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [isLoading]);

    return (
        <div className='users-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'>
                    <h5>Users</h5>
                </div>
                <div className='col-md-3'>
                    <SearchFilter
                        placeholder={'Search User Name'}
                        handleSearch={setSearchUser}
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
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length ? (
                                        currentUsers.filter((item) => {
                                            if(searchUser === '') {
                                                return item;
                                            } else if (item.firstName.toLowerCase().includes(searchUser.toLowerCase())) {
                                                return item;
                                            } else if (item.lastName.toLowerCase().includes(searchUser.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.firstName+' '+item.lastName}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.role}</td>
                                                    <td>
                                                        <Button variant='icon' className='me-2' onClick={() => setToEditValues(item)}>
                                                            <AiOutlineEdit size={20} />
                                                        </Button>
                                                        <Button variant='icon' onClick={() => setToDeleteValues(item.id)}>
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
                            !isLoading && users.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={users}
                                        setCurrentItems={setCurrentUsers}
                                        perPageItems={perPageItems}
                                    />
                                </div>
                        }

                        {/***** Edit User Modal *****/}
                        <EditUserModal
                            data={userToEdit}
                            handleUserEdit={handleUserEdit}
                            show={showEdit}
                            handleClose={handleCloseEdit}
                        />

                        {/***** Delete User Modal *****/}
                        <DeleteUserModal
                            show={showDelete}
                            handleClose={handleCloseDelete}
                            deleteUser={deleteUser}
                        />
                    </>
                )
            }
        </div>
    )
}
