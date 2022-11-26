import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function UploadDocModal({data, show, handleClose, actionType, editDoc, createNewDoc}) {
    const validationSchema = Yup.object().shape({
        file: Yup.mixed().required('Required')
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
                        actionType === 'edit' ? 'Edit Doc' : 'Add New Doc'
                    }
                </Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={
                    actionType === 'edit' ? {file: data.file, description: data.description} : {file: '', description: ''}
                }
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    actionType === 'edit' ? editDoc(data.id, values) : createNewDoc(values)
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
                                    File
                                </Form.Label>
                                <Form.Control
                                    type='file'
                                    name='file'
                                    onChange={(e) => setFieldValue('file', {object: URL.createObjectURL(e.target.files[0]), name: e.target.files[0].name})}
                                />
                                <ErrorMessage name='file' className='error-feedback' component='p' />
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
