import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function AddClientModal({show, handleClose, addClient}) {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid').required('Required')
    });

    return (
        <Modal
            show={show} 
            onHide={handleClose}
            className='max-modal-height'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add New Client</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    addClient(values);
                    handleClose();
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
                                <div className='mb-3'>
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
                                <div className='mb-3'>
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
                                <div className='mb-3'>
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
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='secondary' type='button' onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant='primary' type='submit'>
                                    Add Client
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </>
                )}
            </Formik>
        </Modal>
    )
}
