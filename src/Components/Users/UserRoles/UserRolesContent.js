import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit } from "react-icons/ai";
import { Loader } from '../../UI';
import RoleModal from './RoleModal';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function UserRolesContent() {
    const [roles, setRoles] = useState([
        {
            id: '1',
            name: 'Admin',
            description: 'Admin can access everything'
        },
        {
            id: '2',
            name: 'Employee',
            description: 'Employee can access dome parts'
        },
        {
            id: '3',
            name: 'Client',
            description: 'Client can access dome parts'
        }
    ]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [roleToEdit, setRoleToEdit] = useState({});
    const [actionType, setActionType] = useState('');

    const handleClose = () => setShow(!show);

    const setToEditValues = (role) => {
        setActionType('edit');
        setRoleToEdit(role);
        handleClose();
    };

    const setCreateNewValues = () => {
        setActionType('create');
        handleClose();
    };

    const editUserRole = (roleId, values) => {
        let newData = [...roles];
        let index = newData.findIndex(item => item.id === roleId);
        newData[index].name = values.name;
        newData[index].description = values.description;
        setRoles(newData);
        handleClose();
    };
    const createNewRole = (values) => {
        let newData = [...roles];
        newData.push({
            id: uuid().slice(0,3),
            name: values.name,
            description: values.description
        });
        setRoles(newData);
        handleClose();
    };

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [isLoading]);
    
    
    return (
        <div className='user-roles-content'>
            <div className='row g-0 mb-3'>
                <div className='col-md-6'>
                    <h5>Roles</h5>
                </div>
                <div className='col-md-6 text-end'>
                    <Button variant='primary' onClick={setCreateNewValues}>
                        Add New Role
                    </Button>
                </div>
            </div>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roles.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.description}
                                            </td>
                                            <td>
                                                <Button variant='icon' className='me-2' onClick={() => setToEditValues(item)}>
                                                    <AiOutlineEdit size={20} />
                                                </Button>
                                                <Button variant='primary' onClick={() => navigate('/users/roles/permissions')}>
                                                    Change Permissions
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                )
            }

            {/***** User Role Edit/Create Modal *****/}
            <RoleModal 
                data={roleToEdit}
                show={show}
                handleClose={handleClose}
                actionType={actionType}
                editUserRole={editUserRole}
                createNewRole={createNewRole}
            />
        </div>
    )
}
