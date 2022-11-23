import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

export default function AddContactModal({show, handleClose, titleOpts, addContact}) {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required'),
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid').required('Required'),
        phone: Yup.string().required('Required'),
        jobTitle: Yup.string().required('Required')
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
                <Modal.Title>Add New Contact</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{
                    title: '',
                    name: '',
                    email: '',
                    phone: '',
                    jobTitle: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    addContact(values);
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
                                            Title
                                        </Form.Label>
                                        <Select
                                            options={titleOpts}
                                            isSearchable={false}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('title', opt.value)}
                                        />
                                        <ErrorMessage name='title' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='name'
                                            value={values.name}
                                            placeholder='Enter name'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='name' className='error-feedback' component='p' />
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
                                            Phone
                                        </Form.Label>
                                        <Form.Control
                                            type='tel'
                                            name='phone'
                                            value={values.phone}
                                            placeholder='Enter phone'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='phone' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-12'>
                                        <Form.Label>
                                            Job Title
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='jobTitle'
                                            value={values.jobTitle}
                                            placeholder='Enter job title'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='jobTitle' className='error-feedback' component='p' />
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='secondary' type='button' onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant='primary' type='submit'>
                                    Create
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </>
                )}
            </Formik>
        </Modal>
    )
}
