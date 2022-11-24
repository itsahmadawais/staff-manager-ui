import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

export default function CreateDocumentContent() {
    const userOpts = [
        {value: '1', label: 'Micheal Clark'},
        {value: '2', label: 'Aalam Zaib'},
        {value: '3', label: 'Malik Shahzad'}
    ];
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        user: Yup.string().required('Required'),
        title: Yup.string().required('Required'),
        file: Yup.string().required('Required')
    });

    return (
        <div className='create-document-content'>
            <h5 className='mb-3'>Create New Document</h5>
            <Formik
                initialValues={{
                    user: '',
                    title: '',
                    description: '',
                    file: '',
                    public: false
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    navigate('/documents');
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
                                    User
                                </Form.Label>
                                <Select 
                                    options={userOpts}
                                    name='user'
                                    isSearchable={true}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('user', opt.value)} />
                                <ErrorMessage name='user' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-6 ps-2'>
                                <Form.Label>
                                    Title
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='title'
                                    value={values.title}
                                    placeholder='Enter document title'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='title' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-6 pe-2'>
                                <Form.Label>
                                    Description
                                </Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={5}
                                    name='description'
                                    value={values.description}
                                    placeholder='Enter document description'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='col-md-6 ps-2'>
                                <div className='mb-3'>
                                    <Form.Label>
                                        File
                                    </Form.Label>
                                    <Form.Control
                                        type='file'
                                        accept='image/*'
                                        name='file'
                                        onChange={(e) => setFieldValue('file', URL.createObjectURL(e.target.files[0]))}
                                    />
                                    <ErrorMessage name='file' className='error-feedback' component='p' />
                                </div>
                                <div className='mb-3'>
                                    <Form.Check
                                        type='checkbox'
                                        name='public'
                                        label='Visible to Public'
                                        value={values.public}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage name='public' className='error-feedback' component='p' />
                                </div>
                            </div>
                        </div>
                        <div className='text-end'>
                            <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/documents')}>
                                Cancel
                            </Button>
                            <Button variant='primary' type='submit'>
                                Save Document
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
