import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function DepartmentAction({dept, submitValues, actionType}) {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required')
    });

    return (
        <Formik
            initialValues={
                actionType === 'edit' ? dept : {name: '', description: ''}
            }
            validationSchema={validationSchema}
            onSubmit={(values) => {
                actionType === 'edit' ? submitValues(dept.id, values) : submitValues(values)
            }}
        >
            {({
                values,
                handleChange,
                handleSubmit
            }) => (
                <Form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                value={values.name}
                                placeholder='Enter department name'
                                onChange={handleChange}
                            />
                            <ErrorMessage name='name' className='error-feedback' component='p' />
                        </div>
                        <div className='mb-3'>
                            <Form.Label>
                                Description
                            </Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={5}
                                name='description'
                                value={values.description}
                                placeholder='Enter department description'
                                onChange={handleChange}
                            />
                            <ErrorMessage name='description' className='error-feedback' component='p' />
                        </div>
                    <div className='text-end'>
                        <Button variant='secondary' type='button' className='me-2' onClick={() => navigate(-1)}>
                            Cancel
                        </Button>
                        <Button variant='primary' type='submit'>
                            Save
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
