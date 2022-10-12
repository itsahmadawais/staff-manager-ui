import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '../UI';

export default function ResetPasswordStepTwo() {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Required'),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    
    return (
        <div className='public-content d-flex align-items-center justify-content-center'>
            <div className='public-form'>
                <div className='text-center'>
                <Avatar image='/images/logo.png' />
                <hr />
                <h2 className='mb-3'>Reset Password</h2>
                </div>
                <Formik
                initialValues={{
                    password: '',
                    passwordConfirm: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting}) => {
                    setSubmitting(true);
                    setTimeout(() => {
                    setSubmitting(false);
                    navigate('/login');
                    }, 1500);
                }}
                >
                {({values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting}) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>
                                New Password
                            </Form.Label>
                            <Form.Control 
                                type='password'
                                name='password'
                                placeholder='Enter New Password'
                                value={values.password}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            <p className='error-feedback'>
                                {errors.password && touched.password && errors.password}
                            </p>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control 
                                type='password'
                                name='passwordConfirm'
                                placeholder='Enter Password Again'
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            <p className='error-feedback'>
                                {errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}
                            </p>
                        </Form.Group>
                        <Button type='submit' variant='primary' className='w-100' disabled={isSubmitting}>
                        Reset
                        {
                            isSubmitting &&
                            <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className='ms-2'
                            />
                        }
                        </Button>
                    </Form>
                    )}
                </Formik>
                <div className='text-end mt-2'>
                <Link to={'/login'} className='link'>Back to Login?</Link>
                </div>
            </div>
        </div>
    )
}
