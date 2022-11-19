import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

export default function EditUserModal({data, handleUserEdit, show, handleClose}) {
    const roleOpts = [
        {value: 'Employee', label: 'Employee'},
        {value: 'Client', label: 'Client'},
        {value: 'Admin', label: 'Admin'}
    ];
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid').required('Required'),
        role: Yup.string().required('Required')
    });

    return (
        <Modal
            show={show} 
            onHide={handleClose}
            className='max-modal-height'
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleUserEdit(data.id, values);
                    handleClose();
                }}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            First Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='firstName'
                                            value={values.firstName}
                                            placeholder='Enter first name'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='firstName' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Last Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='lastName'
                                            value={values.lastName}
                                            placeholder='Enter last name'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='lastName' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            type='email'
                                            name='email'
                                            value={values.email}
                                            placeholder='Enter email'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='email' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Role
                                        </Form.Label>
                                        <Select
                                            options={roleOpts}
                                            defaultValue={{value: values.role, label: values.role}}
                                            isSearchable={false}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('role', opt.value)}
                                        />
                                        <ErrorMessage name='role' className='error-feedback' component='p' />
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='secondary' type='button' onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant='primary' type='submit'>
                                    Update
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </>
                )}
            </Formik>
        </Modal>
    )
}
