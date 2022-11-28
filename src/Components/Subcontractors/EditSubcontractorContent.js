import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI';

export default function EditSubcontractorContent() {
    const data = {
        firstName: 'Micheal',
        lastName: 'Clark',
        email: 'michealclark@example.com',
        phone: '1111111111',
        mobile: '00000000000',
        accessPortal: true,
        street: 'street 23',
        zipcode: 'swa2aa',
        country: 'UK',
        city: 'Oxford',
        departments: [
            'BT Key Account',
            'CCHD'
        ],
        positions: [
            'Car Parking Officer',
            'CCEP Manager'
        ],
        contract: {
            contractNo: '34672',
            start: '2022-09-03',
            end: '2022-11-03'
        }
    };
    const countryOpts = [
        {value: 'AFG', label: 'Afghanistan'},
        {value: 'US', label: 'United States'},
        {value: 'UK', label: 'United Kingdom'},
        {value: 'IND', label: 'India'},
        {value: 'PK', label: 'Pakistan'}
    ];
    const departments = [
        'BT Key Account',
        'CCHD',
        'EE Key Account',
        'MCU',
        'MET Police',
        'MRU',
        'Pure Gyms',
        'Reactive Security',
        'Risk & Resillience'
    ];
    const positions = [
        'Car Parking Officer',
        'CCEP Manager',
        'CCEP Receptionist',
        'CCEP Relief Officer',
        'CCEP Security Officer',
        'CCEP Supervisor',
        'Close Protection Officers',
        'Cover Officer',
        'CTC Cleared Officer',
        'Dog Handler',
        'Events Officer',
        'ISS(Do not use)',
        'ISS EE PLO(Do not use)',
        'MCU Operator',
        'Mobile Response Driver',
        'Open Post (V)',
        'Relief Officer',
        'Retail Officer',
        'Security Guard',
        'Secuirty Supervisor',
        'Training (C)',
        'Training Shift (NC)'
    ];
    const [isLoading, setIsLoading] = useState(true);
    const navigate =  useNavigate();
    
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required')
    });

    const editSubcontractor = (values) => {
        console.log(values);
        navigate('/subcontractors');
    };
    
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='edit-subcontractor-content content-max-height custom-scrollbar'>
        {
            isLoading ? (
            <div className='d-flex justify-content-center'>
                <Loader />
            </div>
            ) : (
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={editSubcontractor}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <h5 className='mb-3'>Edit Subcontractor</h5>
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
                            <div className='col-md-4 ps-2'>
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
                        </div>
                        <div className='d-flex mb-5'>
                            <Form.Check
                                type='switch'
                                id='accessPortal'
                                className='me-3'
                                label='Access Portal'
                                checked={values.accessPortal}
                                onChange={handleChange}
                            />
                        </div>
                        <h6>Location</h6>
                        <hr />
                        <div className='row g-0 mb-5'>
                            <div className='col-md-3 pe-2'>
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
                            <div className='col-md-3 ps-2 pe-2'>
                                <Form.Label>
                                    Zipcode
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='postcode'
                                    value={values.postcode}
                                    placeholder='Enter postcode'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='postcode' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-3 ps-2 pe-2'>
                                <Form.Label>
                                    Country
                                </Form.Label>
                                <Select
                                    options={countryOpts}
                                    defaultValue={
                                        values.country ?
                                        {value: values.country, label: countryOpts.find(obj => obj.value === values.country).label} :
                                        undefined
                                    }
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('country', opt.value)}
                                />
                                <ErrorMessage name='country' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-3 ps-2'>
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
                        <h6>Contract</h6>
                        <hr />
                        <div className='row g-0 mb-5'>
                            <div className='col-md-4 pe-2'>
                                <Form.Label>
                                    Contract No.
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='contract.contractNo'
                                    value={values.contract.contractNo}
                                    placeholder='Enter contract no.'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='contract.contractNo' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Start Date
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='contract.start'
                                    value={values.contract.start}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='contract.start' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-4 ps-2'>
                                <Form.Label>
                                    End Date
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='contract.end'
                                    value={values.contract.end}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='contract.end' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <h6>Departments</h6>
                        <hr />
                        <div className='d-flex flex-wrap mb-5'>
                            {
                                departments.map((item, index) => {
                                    return (
                                        <Form.Check
                                            key={index}
                                            type='checkbox'
                                            className='me-3'
                                            label={item}
                                            checked={values.departments.includes(item)}
                                            onChange={(e) => {
                                                let temp = [...values.departments];
                                                if (e.target.checked) {
                                                    temp.push(item);
                                                    setFieldValue('departments', temp);
                                                } else {
                                                    let i = values.departments.indexOf(item);
                                                    if (i > -1) {
                                                        temp.splice(i, 1);
                                                        setFieldValue('departments', temp);
                                                    }
                                                }
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                        <h6>Positions</h6>
                        <hr />
                        <div className='d-flex flex-wrap mb-5'>
                            {
                                positions.map((item, index) => {
                                    return (
                                        <Form.Check
                                            key={index}
                                            type='checkbox'
                                            className='me-3'
                                            label={item}
                                            checked={values.positions.includes(item)}
                                            onChange={(e) => {
                                                let temp = [...values.positions];
                                                if (e.target.checked) {
                                                    temp.push(item);
                                                    setFieldValue('positions', temp);
                                                } else {
                                                    let i = values.positions.indexOf(item);
                                                    if (i > -1) {
                                                        temp.splice(i, 1);
                                                        setFieldValue('positions', temp);
                                                    }
                                                }
                                            }}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className='text-end'>
                            <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/employees')}>
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
