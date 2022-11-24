import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { ButtonLoader } from '../../UI';

export default function CreateUserContent() {
    const roleOpts = [
        {value: 'Employee', label: 'Employee'},
        {value: 'Client', label: 'Client'},
        {value: 'Admin', label: 'Admin'}
    ];
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid').required('Required'),
        pass: Yup.string().required('Required'),
        confirmPass: Yup.string().required('Required').oneOf([Yup.ref('pass'), null], 'This must match with password'),
        role: Yup.string().required('Required')
    });
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const confPassRef = useRef(null);
    const [selectedRole, setSelectedRole] = useState(null);

    const createNewUser = (values, {setSubmitting, setFieldValue}) => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setFieldValue('firstName', '');
            setFieldValue('lastName', '');
            setFieldValue('email', '');
            setFieldValue('pass', '');
            setFieldValue('confirmPass', '');
            setFieldValue('role', '');
            fnameRef.current.value = '';
            lnameRef.current.value = '';
            emailRef.current.value = '';
            passRef.current.value = '';
            confPassRef.current.value = '';
            setSelectedRole(null);
        }, 1500);
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                pass: '',
                confirmPass: '',
                role: ''
            }}
            validationSchema={validationSchema}
            onSubmit={createNewUser}
        >
            {({
                values,
                setFieldValue,
                handleChange,
                handleSubmit,
                isSubmitting
            }) => (
                <Form onSubmit={handleSubmit}>
                    <h5 className='mb-3'>Create New User</h5>
                    <div className='row g-0 mb-3'>
                        <div className='col-md-6 pe-2'>
                            <Form.Label>
                                First Name
                            </Form.Label>
                            <Form.Control
                                ref={fnameRef}
                                type='text'
                                name='firstName'
                                value={values.firstName}
                                placeholder='Enter first name'
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name='firstName' className='error-feedback' component='p' />
                        </div>
                        <div className='col-md-6 ps-2'>
                            <Form.Label>
                                Last Name
                            </Form.Label>
                            <Form.Control
                                ref={lnameRef}
                                type='text'
                                name='lastName'
                                value={values.lastName}
                                placeholder='Enter last name'
                                onChange={handleChange}
                                disabled={isSubmitting}
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
                                ref={emailRef}
                                type='email'
                                name='email'
                                value={values.email}
                                placeholder='Enter email'
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name='email' className='error-feedback' component='p' />
                        </div>
                        <div className='col-md-6 ps-2'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                ref={passRef}
                                type='password'
                                name='pass'
                                value={values.pass}
                                placeholder='Enter password'
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name='pass' className='error-feedback' component='p' />
                        </div>
                    </div>
                    <div className='row g-0 mb-3'>
                        <div className='col-md-6 pe-2'>
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control
                                ref={confPassRef}
                                type='password'
                                name='confirmPass'
                                value={values.confirmPass}
                                placeholder='Enter password again'
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            <ErrorMessage name='confirmPass' className='error-feedback' component='p' />
                        </div>
                        <div className='col-md-6 ps-2'>
                            <Form.Label>
                                Role
                            </Form.Label>
                            <Select
                                options={roleOpts}
                                isSearchable={false}
                                isClearable={false}
                                value={selectedRole}
                                onChange={(opt) => {setFieldValue('role', opt.value); setSelectedRole(opt)}}
                                isDisabled={isSubmitting}
                            />
                            <ErrorMessage name='role' className='error-feedback' component='p' />
                        </div>
                    </div>
                    <div className='text-end'>
                        <Button variant='primary' type='submit' disabled={isSubmitting}>
                            Create User
                            {
                                isSubmitting &&
                                <ButtonLoader />
                            }
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
