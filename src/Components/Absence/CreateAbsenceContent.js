import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

export default function CreateAbsenceContent() {
    const userOpts = [
        {value: '1', label: 'Micheal Clark'},
        {value: '2', label: 'Aalam Zaib'},
        {value: '3', label: 'Malik Shahzad'}
    ];
    const typeOpts = [
        {value: 'blowout', label: 'Blowout'},
        {value: 'maternity-leave', label: 'Maternity Leave'},
    ];
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        user: Yup.string().required('Required'),
        type: Yup.string().required('Required'),
        startDate: Yup.date().required('Required'),
        endDate: Yup.date().min(Yup.ref('startDate'), 'End Date must not be earlier than Start Date').required('Required'),
        startTime: Yup.string().required('Required'),
        endTime: Yup.string().required('Required').test(
            'minimumEndTime',
            'End Time must not be earlier than Start Time',
            function (value) {
                const {startDate, endDate, startTime} = this.parent;
                if (startDate?.getTime() === endDate?.getTime()) {
                    return moment(value, 'HH:mm').isAfter(moment(startTime, 'HH:mm'));
                } else {
                    return true;
                }
            }
        ),
        comment: Yup.string().required('Required')
    });

    return (
        <div className='create-absence-content'>
            <h5 className='mb-3'>Add Absence</h5>
            <Formik
                initialValues={{
                    user: '',
                    type: '',
                    startDate: '',
                    endDate: '',
                    startTime: '',
                    endTime: '',
                    comment: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    navigate('/absence');
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
                                    onChange={(opt) => setFieldValue('user', opt.value)} 
                                />
                                <ErrorMessage name='user' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-6 ps-2'>
                                <Form.Label>
                                    Absence Type
                                </Form.Label>
                                <Select 
                                    options={typeOpts}
                                    name='type'
                                    isSearchable={true}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('type', opt.value)} 
                                />
                                <ErrorMessage name='type' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-3 pe-2'>
                                <Form.Label>
                                    Start Time
                                </Form.Label>
                                <Form.Control
                                    type='time'
                                    name='startTime'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='startTime' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-3 ps-2 pe-2'>
                                <Form.Label>
                                    Start Date
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='startDate'
                                    defaultValue={values.startDate}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='startDate' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-3 ps-2 pe-2'>
                                <Form.Label>
                                    End Time
                                </Form.Label>
                                <Form.Control
                                    type='time'
                                    name='endTime'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='endTime' className='error-feedback' component='p' />
                            </div>
                            <div className='col-md-3 ps-2'>
                                <Form.Label>
                                    End Date
                                </Form.Label>
                                <Form.Control
                                    type='date'
                                    name='endDate'
                                    defaultValue={values.endDate}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='endDate' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='row g-0 mb-3'>
                            <div className='col-md-12'>
                                <Form.Label>
                                    Comment
                                </Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={5}
                                    name='comment'
                                    placeholder='Enter a comment'
                                    value={values.comment}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='comment' className='error-feedback' component='p' />
                            </div>
                        </div>
                        <div className='text-end'>
                            <Button variant='secondary' type='button' className='me-2' onClick={() => navigate('/absence')}>
                                Cancel
                            </Button>
                            <Button variant='primary' type='submit'>
                                Save Absence
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
