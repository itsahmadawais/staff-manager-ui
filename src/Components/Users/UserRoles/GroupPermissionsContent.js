import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Loader } from '../../UI';
import { Form, Table } from 'react-bootstrap';

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
                    absences_edit: true,
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
                    miscellaneous_settings: true
                }
            ]
        }
    ];
    const [permissions, setPermissions] = useState(rolePermissions[0].permissions);
    const [isLoading, setIsLoading] = useState(true);
    const validationSchema = Yup.object().shape({});

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [isLoading]);

    const setInitialValues = () => {
        let returnObj;
        permissions.forEach(object => {
            for (const key in object) {
                if (key !== 'moduleName') {
                    returnObj[key] = object[key];
                }
            }
        });
        return returnObj;
    };

    const savePermissions = (values) => {};

    return (
        <div className='group-permissions-content'>
            <h5 className='mb-3'>{rolePermissions[0].name} Group Permissions</h5>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                     <Formik
                        initialValues={setInitialValues}
                        // initialValues={{
                        //     departments_view: false,
                        //     departments_add: false,
                        //     departments_edit: false,
                        //     departments_delete: false,
                        //     locations_view: false,
                        //     locations_add: false,
                        //     locations_edit: false,
                        //     locations_delete: false,
                        //     documents_view: false,
                        //     documents_add: false,
                        //     documents_edit: false,
                        //     documents_delete: false,
                        //     employees_view: false,
                        //     employees_add: false,
                        //     employees_edit: false,
                        //     employees_delete: false,
                        //     subcontractors_view: false,
                        //     subcontractors_add: false,
                        //     subcontractors_edit: false,
                        //     subcontractors_delete: false,
                        //     clients_view: false,
                        //     clients_add: false,
                        //     clients_edit: false,
                        //     clients_delete: false,
                        //     schedules_view: false,
                        //     schedules_add: false,
                        //     schedules_edit: false,
                        //     schedules_delete: false,
                        //     absences_view: false,
                        //     absences_add: false,
                        //     absences_edit: false,
                        //     absences_delete: false,
                        //     absenceAllowances_view: false,
                        //     absenceAllowances_add: false,
                        //     absenceAllowances_edit: false,
                        //     absenceAllowances_delete: false,
                        //     users_view: false,
                        //     users_add: false,
                        //     users_edit: false,
                        //     users_delete: false,
                        //     miscellaneous_rolePermissions: false,
                        //     miscellaneous_settings: false
                        // }}
                        validationSchema={validationSchema}
                        onSubmit={savePermissions}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Table responsive>
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
                                            permissions.map((item, index) => {
                                                let keysValues = Object.entries(item);
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            {item.moduleName}
                                                        </td>
                                                        {
                                                            keysValues.map((obj, index) => {
                                                                return (
                                                                    obj[0] !== 'moduleName' ? (
                                                                        <td key={index}>
                                                                            <Form.Check 
                                                                                type='checkbox'
                                                                                name={obj[0]}
                                                                                value={values[obj[0]]}
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
                                    </tbody>
                                </Table>
                            </Form>
                        )}
                    </Formik>
                )
            }
        </div>
    )
}
