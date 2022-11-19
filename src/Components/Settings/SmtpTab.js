import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { Loader } from '../UI';
import Select from 'react-select';

export default function SmtpTab() {
    const encryptionOpts = [
        {value: 'tls', label: 'TLS'},
        {value: 'ssl', label: 'SSL'}
    ];
    const [smtpValues, setSmtpValues] = useState({
        host: '',
        email: '',
        name: '',
        password: '',
        encryption: ''
    });
    const validationSchema = Yup.object().shape({
        host: Yup.string().required('Required'),
        email: Yup.string().email('Invalid').required('Required'),
        name: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        encryption: Yup.string().required('Required')
    });
    const [isLoading, setIsLoading] = useState(false);

    const findLabel = (value) => {
        let found = encryptionOpts.find((item) => item.value === value);
        return found.label;
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
                        initialValues={smtpValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setIsLoading(true);
                            setTimeout(() => {
                                setSmtpValues(values);
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
                                            Mail Host
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='host'
                                            value={values.host}
                                            placeholder='Enter mail host'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='host' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Mail Address
                                        </Form.Label>
                                        <Form.Control
                                            type='email'
                                            name='email'
                                            value={values.email}
                                            placeholder='Enter mail address'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='email' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Mail from Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='name'
                                            value={values.name}
                                            placeholder='Enter mail from name'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='name' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Password
                                        </Form.Label>
                                        <Form.Control
                                            type='password'
                                            name='password'
                                            value={values.password}
                                            placeholder='Enter mail password'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='password' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Encryption
                                        </Form.Label>
                                        <Select
                                            options={encryptionOpts}
                                            defaultValue={
                                                values.encryption !== '' ? 
                                                {value: values.encryption, label: findLabel(values.encryption)} :
                                                undefined
                                            }
                                            isSearchable={true}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('encryption', opt.value)}
                                        />
                                        <ErrorMessage name='encryption' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <Button variant='primary' type='submit'>Save Details</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )
            }
        </>
    )
}
