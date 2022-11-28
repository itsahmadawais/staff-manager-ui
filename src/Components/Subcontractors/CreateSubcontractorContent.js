import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI';

export default function CreateSubcontractorContent() {
    const countryOpts = [
        {value: 'AFG', label: 'Afghanistan'},
        {value: 'US', label: 'United States'},
        {value: 'UK', label: 'United Kingdom'},
        {value: 'IND', label: 'India'},
        {value: 'PK', label: 'Pakistan'}
    ];
    const [isLoading, setIsLoading] = useState(true);
    const navigate =  useNavigate();
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required')
    });

    const createNewSub = () => {
        navigate('/subcontractors');
    };
    
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='create-subcontractor-content content-max-height custom-scrollbar'>
        {
            isLoading ? (
            <div className='d-flex justify-content-center'>
                <Loader />
            </div>
            ) : (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    mobile: '',
                    street: '',
                    zipcode: '',
                    country: '',
                    city: '',
                    contractNo: '',
                    startDate: '',
                    endDate: '',
                    accessPortal: true,
                    sendEmail: false
                }}
                validationSchema={validationSchema}
                onSubmit={createNewSub}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <h5 className='mb-3'>Create New Subcontractor</h5>
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
                            <div className='col-md-4 ps-2 pe-2'>
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
                                    Mobile
                                </Form.Label>
                                <Form.Control
                                    type='tel'
                                    name='mobile'
                                    value={values.mobile}
                                    placeholder='Enter mobile'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='mobile' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    Street Address
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='street'
                                    value={values.street}
                                    placeholder='Enter street address'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='street' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Zipcode
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='zipcode'
                                    value={values.zipcode}
                                    placeholder='Enter zipcode'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='zipcode' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Country
                                </Form.Label>
                                <Select
                                    options={countryOpts}
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('country', opt.value)}
                                />
                                <ErrorMessage name='country' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    City/Town
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='city'
                                    value={values.city}
                                    placeholder='Enter city/town'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='city' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Contract No.
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='contractNo'
                                    value={values.contractNo}
                                    placeholder='Enter contract no.'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='contractNo' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Start Date
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='startDate'
                                    value={values.startDate}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='startDate' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    End Date
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='endDate'
                                    value={values.endDate}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='endDate' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='d-flex mb-3'>
                            <Form.Check
                                type='switch'
                                id='accessPortal'
                                className='me-3'
                                label='Access Portal'
                                checked={values.accessPortal}
                                onChange={handleChange}
                            />
                            <Form.Check
                                type='switch'
                                id='sendEmail'
                                label='Send Email'
                                checked={values.sendEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='text-end'>
                            <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/subcontractors')}>
                                Cancel
                            </Button>
                            <Button variant='primary' type='submit'>
                                Create
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
