import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../UI';

export default function EditLocationContent() {
  const location = {
    id: '1',
    name: 'Rah Wali Cantt',
    description: 'This is a city in Pakistan',
    street: 'Street 12',
    city: 'Gujranwala',
    state: 'Punjab',
    country: 'PK'
  };
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
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required')
  });

  const editLocation = () => {
    navigate('/locations');
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [isLoading]);
  

  return (
    <div className='edit-location-content content-max-height custom-scrollbar'>
      {
        isLoading ? (
          <div className='d-flex justify-content-center'>
            <Loader />
          </div>
        ) : (
          <Formik
            initialValues={location}
            validationSchema={validationSchema}
            onSubmit={editLocation}
          >
            {({
                values,
                setFieldValue,
                handleChange,
                handleSubmit
            }) => (
                <>
                  <Form onSubmit={handleSubmit}>
                    <h5 className='mb-3'>Edit Location</h5>
                    <div className='row g-0 mb-3'>
                      <div className='col-md-12'>
                        <Form.Label>
                          Name
                        </Form.Label>
                        <Form.Control
                          type='text'
                          name='name'
                          value={values.name}
                          placeholder='Enter name'
                          onChange={handleChange}
                        />
                        <ErrorMessage name='name' className='error-feedback' component='p' />
                      </div>
                    </div>
                    <div className='row g-0 mb-3'>
                      <div className='col-md-12'>
                        <Form.Label>
                          Description
                        </Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={5}
                          name='description'
                          value={values.description}
                          placeholder='Enter description'
                          onChange={handleChange}
                        />
                        <ErrorMessage name='description' className='error-feedback' component='p' />
                      </div>
                    </div>
                    <div className='row g-0 mb-3'>
                      <div className='col-md-6 pe-2'>
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
                      <div className='col-md-6 ps-2'>
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
                      <div className='col-md-6 pe-2'>
                        <Form.Label>
                          County/State
                        </Form.Label>
                        <Form.Control
                          type='text'
                          name='state'
                          value={values.state}
                          placeholder='Enter county/state'
                          onChange={handleChange}
                        />
                        <ErrorMessage name='state' className='error-feedback' component='p' />
                      </div>
                      <div className='col-md-6 ps-2'>
                        <Form.Label>
                          Country
                        </Form.Label>
                        <Select
                          options={countryOpts}
                          defaultValue={{value: values.country, label: countryOpts.find(obj => obj.value === values.country).label}}
                          isSearchable={false}
                          isClearable={false}
                          onChange={(opt) => setFieldValue('country', opt.value)}
                        />
                        <ErrorMessage name='country' className='error-feedback' component='p' />
                      </div>
                    </div>
                    <div className='text-end'>
                      <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/locations')}>
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
