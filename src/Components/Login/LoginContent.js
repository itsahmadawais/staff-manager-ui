import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../UI/Avatar';

export default function LoginContent() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });

  return (
    <div className='public-content d-flex align-items-center justify-content-center'>
      <div className='public-form'>
        <div className='text-center'>
          <Avatar image='/images/logo.png' />
          <hr />
          <h2 className='mb-3'>Login</h2>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting}) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              navigate('/');
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
                    Email
                  </Form.Label>
                  <Form.Control 
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    value={values.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <p className='error-feedback'>
                    {errors.email && touched.email && errors.email}
                  </p>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Password
                  </Form.Label>
                  <Form.Control 
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={values.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  <p className='error-feedback'>
                    {errors.password && touched.password && errors.password}
                  </p>
                </Form.Group>
                <Button type='submit' variant='primary' className='w-100' disabled={isSubmitting}>
                  Login
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
          <Link to={'/forgot-password'} className='link'>Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}
