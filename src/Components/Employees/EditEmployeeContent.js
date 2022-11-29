import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI';

export default function EditEmployeeContent() {
    const data = {
        empId: '2342',
        firstName: 'Micheal',
        lastName: 'Clark',
        email: 'michealclark@example.com',
        mobile: '00000000000',
        dob: '2022-11-23',
        gender: 'male',
        countryOfBirth: 'UK',
        cityOfBirth: 'Gujranwala',
        nationality: 'Pakistani',
        niNo: '3984sdf',
        sia: '9i30dsf',
        license: 'yes',
        visaRequired: 'no',
        subcontractor: 'coca-cola-co',
        accessPortal: true,
        departments: [
            'BT Key Account',
            'CCHD'
        ],
        positions: [
            'Car Parking Officer',
            'CCEP Manager'
        ],
        contract: {
            type: 'full-time',
            contractNo: '34672',
            start: '2022-09-03',
            end: '2022-11-03'
        },
        street: 'street 23',
        postcode: 'swa2aa',
        country: 'UK',
        state: 'Oxfordshire',
        city: 'Oxford'
    };
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
    const subcontractorsOpts = [
        {value: 'coca-cola-co', label: 'Coca Cola Co.'},
        {value: 'european-mail', label: 'European Mail'}
    ];
    const empTypeOpts = [
        {value: 'full-time', label: 'Full Time'},
        {value: 'part-time', label: 'Part Time'},
        {value: 'restricted-hours', label: 'Restricted Hours'},
        {value: 'self-employed', label: 'Self Empolyed'},
        {value: 'standard', label: 'Standard'},
        {value: 'temporary-staff', label: 'Temporary Staff'},
        {value: 'volunteers', label: 'Volunteers'},
        {value: 'zero-hours-contract', label: 'Zero Hours Contract'},
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

    const editEmployee = (values) => {
        console.log(values);
        navigate('/employees');
    };
    
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='edit-employee-content content-max-height custom-scrollbar'>
        {
            isLoading ? (
            <div className='d-flex justify-content-center'>
                <Loader />
            </div>
            ) : (
            <Formik
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={editEmployee}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <h5 className='mb-3'>Edit Employee</h5>
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
                                    defaultValue={
                                        values.gender ?
                                        {value: values.gender, label: genderOpts.find(obj => obj.value === values.gender).label} :
                                        undefined
                                    }
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
                                    defaultValue={
                                        values.countryOfBirth ?
                                        {value: values.countryOfBirth, label: countryOpts.find(obj => obj.value === values.countryOfBirth).label} :
                                        undefined
                                    }
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
                                    defaultValue={
                                        values.license ?
                                        {value: values.license, label: boolOpts.find(obj => obj.value === values.license).label} :
                                        undefined
                                    }
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
                                    defaultValue={
                                        values.visaRequired ?
                                        {value: values.visaRequired, label: boolOpts.find(obj => obj.value === values.visaRequired).label} :
                                        undefined
                                    }
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
                                    defaultValue={
                                        values.subcontractor ?
                                        {value: values.subcontractor, label: subcontractorsOpts.find(obj => obj.value === values.subcontractor).label} :
                                        undefined
                                    }
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('subcontractor', opt.value)}
                                />
                                <ErrorMessage name='subcontractor' className='error-feedback' component='p' />
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
                        <h6>Contract</h6>
                        <hr />
                        <div className='row g-0 mb-5'>
                            <div className='col-md-3 pe-2'>
                                <Form.Label>
                                    Employement Type
                                </Form.Label>
                                <Select
                                    options={empTypeOpts}
                                    defaultValue={
                                        values.contract.type ?
                                        {value: values.contract.type, label: empTypeOpts.find(obj => obj.value === values.contract.type).label} :
                                        undefined
                                    }
                                    isSearchable={false}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('contract.type', opt.value)}
                                />
                                <ErrorMessage name='contract.type' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-3 ps-2 pe-2'>
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
                            <div className='col-md-3 ps-2 pe-2'>
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
                            <div className='col-md-3 ps-2'>
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
                        <h6>Location</h6>
                        <hr />
                        <div className='row g-0 mb-3'>
                            <div className='col-md-4 pe-2'>
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
                            <div className='col-md-4 ps-2 pe-2'>
                                <Form.Label>
                                    Postcode
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
                            <div className='col-md-4 ps-2 pe-2'>
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
                                    isSearchable={true}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('country', opt.value)}
                                />
                                <ErrorMessage name='country' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-5'>
                            <div className='col-md-4 pe-2'>
                                <Form.Label>
                                    State
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='state'
                                    value={values.state}
                                    placeholder='Enter state'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='state' className='error-feedback' component='p' />
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
