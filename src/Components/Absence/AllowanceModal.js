import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

export default function AllowanceModal({data, users, show, handleClose, actionType, editAllowance, createNewAllowance}) {
    const userOpts = users.map((item) => {
        return {value: item.id, label: item.firstName+' '+item.lastName}
    });
    const validationSchema = Yup.object().shape({
        user: Yup.string().required('Required'),
        allowance: Yup.number().min(1, 'Allowances cannot be less than 1').required('Required')
    });

    return (
        <Modal
            show={show} 
            onHide={handleClose}
            className='max-modal-height'
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    {
                        actionType === 'edit' ? 'Edit Allowance' : 'Add New Allowance'
                    }
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={
                    actionType === 'edit' ? data : {user: '', allowance: '1'}
                }
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    actionType === 'edit' ? editAllowance(data.id, values) : createNewAllowance(values)
                }}
            >
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <div className='mb-3'>
                                <Form.Label>
                                    User
                                </Form.Label>
                                <Select 
                                    options={userOpts}
                                    name='user'
                                    defaultValue={
                                        values.user !== '' ?
                                        {value: values.user, label: userOpts.find(obj => obj.value === values.user).label} :
                                        null
                                    }
                                    isSearchable={true}
                                    isClearable={false}
                                    onChange={(opt) => setFieldValue('user', opt.value)}
                                />
                                <ErrorMessage name='user' className='error-feedback' component='p' />
                            </div>
                            <div className='mb-3'>
                                <Form.Label>
                                    Allowances per Month
                                </Form.Label>
                                <Form.Control
                                    type='number'
                                    name='allowance'
                                    value={values.allowance}
                                    placeholder='Enter no. of allowances'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='allowance' className='error-feedback' component='p' />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' type='button' onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant='primary' type='submit'>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}
