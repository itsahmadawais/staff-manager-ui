import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function RoleModal({data, show, handleClose, actionType, editUserRole, createNewRole}) {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required')
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
                        actionType === 'edit' ? 'Edit Role' : 'Add New Role'
                    }
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={
                    actionType === 'edit' ? data : {role: '', description: ''}
                }
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    actionType === 'edit' ? editUserRole(data.id, values) : createNewRole(values)
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <div className='mb-3'>
                                <Form.Label>
                                    Role Name
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    value={values.name}
                                    placeholder='Enter role name'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='name' className='error-feedback' component='p' />
                            </div>
                            <div className='mb-3'>
                                <Form.Label>
                                    Role Description
                                </Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={5}
                                    name='description'
                                    value={values.description}
                                    placeholder='Enter role description'
                                    onChange={handleChange}
                                />
                                <ErrorMessage name='description' className='error-feedback' component='p' />
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
