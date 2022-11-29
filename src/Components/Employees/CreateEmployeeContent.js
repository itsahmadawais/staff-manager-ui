import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI';

export default function CreateEmployeeContent() {
    const boolOpts = [
        {value: 'yes', label: 'Yes'},
        {value: 'no', label: 'No'}
    ];
    const genderOpts = [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'},
        {value: 'no-to-specify', label: 'Not to Specify'}
    ];
    const countryOpts = [
        {value: 'AFG', label: 'Afghanistan'},
        {value: 'US', label: 'United States'},
        {value: 'UK', label: 'United Kingdom'},
        {value: 'IND', label: 'India'},
        {value: 'PK', label: 'Pakistan'}
    ];
    const subcontractorsOpts = [];
    const [isLoading, setIsLoading] = useState(true);
    const navigate =  useNavigate();
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required')
    });

    const createNewEmployee = () => {
        navigate('/employees');
    };
    
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='create-employee-content content-max-height custom-scrollbar'>
        {
            isLoading ? (
            <div className='d-flex justify-content-center'>
                <Loader />
            </div>
            ) : (
            <Formik
                initialValues={{
                    empId: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobile: '',
                    dob: '',
                    gender: '',
                    countryOfBirth: '',
                    cityOfBirth: '',
                    nationality: '',
                    niNo: '',
                    sia: '',
                    license: '',
                    visaRequired: '',
                    subcontractor: '',
                    accessPortal: true,
                    sendEmail: false
                }}
                validationSchema={validationSchema}
                onSubmit={createNewEmployee}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <h5 className='mb-3'>Create New Employee</h5>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
                                <Form.Label>
                                    ID
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='empId'
                                    value={values.empId}
                                    placeholder='Enter ID'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='empId' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
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
                            <div className='col-md-4 ps-2'>
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
                            <div className='col-md-4 pe-2'>
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
                                    Date of Birth
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='dob'
                                    value={values.dob}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='dob' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
                                <Form.Label>
                                    Gender
                                </Form.Label>
                                <Select
                                    options={genderOpts}
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('gender', opt.value)}
                                />
                                <ErrorMessage name='gender' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Country of Birth
                                </Form.Label>
                                <Select
                                    options={countryOpts}
                                    isSearchable={true}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('countryOfBirth', opt.value)}
                                />
                                <ErrorMessage name='countryOfBirth' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    City of Birth
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='cityOfBirth'
                                    value={values.cityOfBirth}
                                    placeholder='Enter city of birth'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='cityOfBirth' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
                                <Form.Label>
                                    Nationality
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='nationality'
                                    value={values.nationality}
                                    placeholder='Enter nationality'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='nationality' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Ni No
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='niNo'
                                    value={values.niNo}
                                    placeholder='Enter Ni No'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='niNo' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    SIA
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='sia'
                                    value={values.sia}
                                    placeholder='Enter SIA'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='sia' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
                                <Form.Label>
                                    Driver License
                                </Form.Label>
                                <Select
                                    options={boolOpts}
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('license', opt.value)}
                                />
                                <ErrorMessage name='license' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Visa Required
                                </Form.Label>
                                <Select
                                    options={boolOpts}
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('visaRequired', opt.value)}
                                />
                                <ErrorMessage name='visaRequired' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    Subcontractor
                                </Form.Label>
                                <Select
                                    options={subcontractorsOpts}
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('subcontractor', opt.value)}
                                />
                                <ErrorMessage name='subcontractor' className='error-feedback' component='p' />
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
                            <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/employees')}>
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
