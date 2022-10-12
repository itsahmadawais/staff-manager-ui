import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Avatar } from '../UI';

export default function ResetPasswordStepOne() {
    const validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required')
    });

    return (
    <div className='public-content d-flex align-items-center justify-content-center'>
      <div className='public-form'>
        <div className='text-center'>
          <Avatar image='/images/logo.png' />
          <hr />
          <h2 className='mb-3'>Forgot Password</h2>
          <p>An email will be sent to you to reset password.</p>
        </div>
        <Formik
          initialValues={{
            email: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting}) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
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
                <Button type='submit' variant='primary' className='w-100' disabled={isSubmitting}>
                  Submit
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
