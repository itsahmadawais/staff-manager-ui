import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { Loader } from '../UI';

export default function ChangePasswordTab() {
    const validationSchema = Yup.object().shape({
        currentPass: Yup.string().required('Required'),
        newPass: Yup.string().required('Required').min(8, 'Must be 8 characters long'),
        confirmPass: Yup.string().required('Required')
        .oneOf([Yup.ref('newPass'), null], 'This must match with new password')
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePass = (values) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };
    
    return (
        <>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                    <Formik
                        initialValues={{
                            currentPass: '',
                            newPass: '',
                            confirmPass: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleChangePass}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Current Passowrd
                                        </Form.Label>
                                        <Form.Control
                                            type='password'
                                            name='currentPass'
                                            value={values.currentPass}
                                            placeholder='Enter current password'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='currentPass' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            New Password
                                        </Form.Label>
                                        <Form.Control
                                            type='password'
                                            name='newPass'
                                            value={values.newPass}
                                            placeholder='Enter new password'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='newPass' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Confirm New Password
                                        </Form.Label>
                                        <Form.Control
                                            type='password'
                                            name='confirmPass'
                                            value={values.confirmPass}
                                            placeholder='Enter new password again'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='confirmPass' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <Button variant='primary' type='submit'>Change Password</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )
            }
        </>
    )
}
