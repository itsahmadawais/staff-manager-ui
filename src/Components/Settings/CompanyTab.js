import React, { useContext, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../../Contexts';
import { Button, Form } from 'react-bootstrap';
import { Loader } from '../UI';
import Select from 'react-select';

export default function CompanyTab() {
    const countryOpts = [
        {value: 'AFG', label: 'Afghanistan'},
        {value: 'ALB', label: 'Albania'},
        {value: 'US', label: 'United States'},
        {value: 'UK', label: 'United Kindom'}
    ];
    const {companyData, dispatchEvents} = useContext(AppContext);
    const companyValues = {
        logo: companyData.logo,
        name: companyData.name,
        address: '',
        email: '',
        phone: '',
        officeHours: '',
        country: ''
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required')
    });
    const [isLoading, setIsLoading] = useState(false);

    const findCountryLabel = (value) => {
        let found = countryOpts.find((item) => item.value === value);
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
                        initialValues={companyValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setIsLoading(true);
                            setTimeout(() => {
                                dispatchEvents('UPDATE_COMPANY', {logo: values.logo, name: values.name});
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
                                            Company Logo
                                        </Form.Label>
                                        <Form.Control
                                            type='file'
                                            name='logo'
                                            accept='image/*'
                                            onChange={(e) => setFieldValue('logo', URL.createObjectURL(e.target.files[0]))}
                                        />
                                        <ErrorMessage name='logo' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Company Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='name'
                                            value={values.name}
                                            placeholder='Enter company name'
                                            onChange={handleChange}
                                        />
                                        <ErrorMessage name='name' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Comapny Address
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='address'
                                            value={values.address}
                                            placeholder='Enter comapny address'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Company Email
                                        </Form.Label>
                                        <Form.Control
                                            type='email'
                                            name='email'
                                            value={values.email}
                                            placeholder='Enter company email'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Comapny Phone
                                        </Form.Label>
                                        <Form.Control
                                            type='tel'
                                            name='phone'
                                            value={values.phone}
                                            placeholder='Enter company phone'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Company Office Hours
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            name='officeHours'
                                            value={values.officeHours}
                                            placeholder='Enter company office hours'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Country of Operations
                                        </Form.Label>
                                        <Select
                                            options={countryOpts}
                                            defaultValue={
                                                values.country !== '' ? 
                                                {value: values.country, label: findCountryLabel(values.country)} :
                                                undefined
                                            }
                                            isSearchable={true}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('country', opt.value)}
                                        />
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
