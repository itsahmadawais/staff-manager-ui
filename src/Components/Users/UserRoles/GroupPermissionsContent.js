import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Loader } from '../../UI';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function GroupPermissionsContent() {
    const rolePermissions = [
        {
            id: '1',
            name: 'Admin',
            permissions: [
                {
                    moduleName: 'Departments',
                    departments_view: true,
                    departments_add: true,
                    departments_edit: true,
                    departments_delete: true
                },
                {
                    moduleName: 'Locations',
                    locations_view: true,
                    locations_add: true,
                    locations_edit: true,
                    locations_delete: true
                },
                {
                    moduleName: 'Documents',
                    documents_view: true,
                    documents_add: true,
                    documents_edit: true,
                    documents_delete: true
                },
                {
                    moduleName: 'Employees',
                    employees_view: true,
                    employees_add: true,
                    employees_edit: true,
                    employees_delete: true
                },
                {
                    moduleName: 'Subcontractors',
                    subcontractors_view: true,
                    subcontractors_add: true,
                    subcontractors_edit: true,
                    subcontractors_delete: true
                },
                {
                    moduleName: 'Clients',
                    clients_view: true,
                    clients_add: true,
                    clients_edit: true,
                    clients_delete: true
                },
                {
                    moduleName: 'Schedules',
                    schedules_view: true,
                    schedules_add: true,
                    schedules_edit: true,
                    schedules_delete: true
                },
                {
                    moduleName: 'Absences',
                    absences_view: true,
                    absences_add: true,
                    absences_edit: false,
                    absences_delete: true
                },
                {
                    moduleName: 'Absence Allowances',
                    absenceAllowances_view: true,
                    absenceAllowances_add: true,
                    absenceAllowances_edit: true,
                    absenceAllowances_delete: true
                },
                {
                    moduleName: 'Users',
                    users_view: true,
                    users_add: true,
                    users_edit: true,
                    users_delete: true
                },
                {
                    moduleName: 'Miscellaneous',
                    miscellaneous_rolePermissions: true,
                    miscellaneous_settings: false
                }
            ]
        }
    ];
    const [permissions] = useState(rolePermissions[0].permissions);
    const [allPermissions] = useState([...permissions.slice(0, permissions.length-1), ...permissions.slice(permissions.length)]);
    const [lastPermission] = useState([permissions[permissions.length-1]]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [isLoading]);

    const setInitialValues = () => {
        let returnObj = {};
        permissions.forEach(object => {
            for (const key in object) {
                if (key !== 'moduleName') {
                    returnObj[key] = object[key];
                }
            }
        });
        return returnObj;
    };

    const savePermissions = (values) => {
        console.log(values);
        navigate(-1);
    };

    return (
        <div className='group-permissions-content content-max-height custom-scrollbar'>
            <h5 className='mb-3'>{rolePermissions[0].name} Group Permissions</h5>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                     <Formik
                        initialValues={setInitialValues()}
                        onSubmit={savePermissions}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                Module Name
                                            </th>
                                            <th>
                                                <Form.Check
                                                    type='checkbox'
                                                    name='viewAll'
                                                    id='viewAll'
                                                    label='View'
                                                />
                                            </th>
                                            <th>
                                                <Form.Check
                                                    type='checkbox'
                                                    name='addAll'
                                                    id='addAll'
                                                    label='Add'
                                                />
                                            </th>
                                            <th>
                                                <Form.Check
                                                    type='checkbox'
                                                    name='editAll'
                                                    id='editAll'
                                                    label='Edit'
                                                />
                                            </th>
                                            <th>
                                                <Form.Check
                                                    type='checkbox'
                                                    name='deleteAll'
                                                    id='deleteAll'
                                                    label='Delete'
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allPermissions.map((item, index) => {
                                                let keysValues = Object.entries(item);
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            {item.moduleName}
                                                        </td>
                                                        {
                                                            keysValues.map((obj, index) => {
                                                                let keyName = obj[0];
                                                                return (
                                                                    obj[0] !== 'moduleName' ? (
                                                                        <td key={index}>
                                                                            <Form.Check 
                                                                                type='checkbox'
                                                                                name={obj[0]}
                                                                                defaultChecked={values[keyName]}
                                                                                value={values[keyName]}
                                                                                onChange={handleChange}
                                                                            />
                                                                        </td>
                                                                    ) : (
                                                                        null
                                                                    )
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                )
                                            })
                                        }
                                        {
                                            lastPermission.map((item, index) => {
                                                let keysValues = Object.entries(item);
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            {item.moduleName}
                                                        </td>
                                                        <td colSpan={4}>
                                                            {
                                                                keysValues.map((obj, index) => {
                                                                    let keyName = obj[0];
                                                                    return (
                                                                        obj[0] !== 'moduleName' ? (
                                                                            <Form.Check 
                                                                                key={index}
                                                                                type='checkbox'
                                                                                name={obj[0]}
                                                                                defaultChecked={values[keyName]}
                                                                                value={values[keyName]}
                                                                                label={obj[0] === 'miscellaneous_rolePermissions' ?
                                                                                        'Role Permissions' : 
                                                                                        'Settings'}
                                                                                onChange={handleChange}
                                                                            />
                                                                        ) : (
                                                                            null
                                                                        )
                                                                    )
                                                                })
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                <div className='text-end mb-3'>
                                    <Button variant='secondary' type='button' className='me-2' onClick={() => navigate(-1)}>
                                        Cancel
                                    </Button>
                                    <Button variant='primary' type='submit'>
                                        Save Permissions
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )
            }
        </div>
    )
}
