import React, { useContext, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../../Contexts';
import { Button, Form } from 'react-bootstrap';
import { Loader } from '../UI';

export default function ProfileTab() {
    const {userData, dispatchEvents} = useContext(AppContext);
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email().required('Required')
    });
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                    <Formik
                        initialValues={userData}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setIsLoading(true);
                            setTimeout(() => {
                                dispatchEvents('UPDATE_USER', values);
                                setIsLoading(false);
                            }, 1500);
                        }}
                    >
                        {({
                            values,
                            setFieldValue,
                            handleChange,
                            handleSubmit
                        }) => (
                            <Form onSubmit={handleSubmit}>
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
                                            Profile Picture
                                        </Form.Label>
                                        <Form.Control
                                            type='file'
                                            name='image'
                                            accept='image/*'
                                            onChange={(e) => setFieldValue('image', URL.createObjectURL(e.target.files[0]))}
                                        />
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <Button variant='primary' type='submit'>Update</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )
            }
        </>
    )
}
