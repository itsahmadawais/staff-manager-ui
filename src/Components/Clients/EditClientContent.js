import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI';

export default function EditClientContent() {
    const data = {
        id: '1',
        firstName: 'Micheal',
        lastName: 'Clark',
        email: 'michealclark@example.com',
        phone: '00000000000',
        regNo: '387482',
        vatNo: '233',
    };
    const [isLoading, setIsLoading] = useState(true);
    const navigate =  useNavigate();
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required')
    });

    const editClient = (values) => {
        console.log(values);
        navigate('/clients');
    };
    
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='edit-client-content content-max-height custom-scrollbar'>
        {
            isLoading ? (
            <div className='d-flex justify-content-center'>
                <Loader />
            </div>
            ) : (
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={editClient}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <h5 className='mb-3'>Edit Client</h5>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
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
                            <div className='col-md-4 ps-2 pe-2'>
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
                            <div className='col-md-4 ps-2'>
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
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
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
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Reg No.
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='regNo'
                                    value={values.regNo}
                                    placeholder='Enter registration no.'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='regNo' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    VAT No.
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='vatNo'
                                    value={values.vatNo}
                                    placeholder='Enter VAT no.'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='vatNo' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='text-end'>
                            <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/clients')}>
                                Cancel
                            </Button>
                            <Button variant='primary' type='submit'>
                                Update
                            </Button>
                        </div>
                    </Form>
                    </>
                )}
            </Formik>
            )
        }
        </div>
    )
}
