import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

export default function EditShiftModal({data, show, handleClose}) {
    const [isLoading, setIsLoading] = useState(true);
    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Required'),
        startDate: Yup.date().required('Required'),
        endDate: Yup.date().min(Yup.ref('startDate'), 'End Date must be later than Start Date').required('Required'),
        startTime: Yup.string().required('Required'),
        endTime: Yup.string().required('Required'),
        client: Yup.string().required('Required'),
        site: Yup.string().required('Required'),
        case: Yup.string().required('Required'),
        position: Yup.string().required('Required'),
        quantity: Yup.number().min(1, 'Quantity must be atleast 1'),
        payRate: Yup.number().required('Required').test(
            "maxDigitsAfterDecimal",
            "Pay Rate must have 2 digits after decimal or less",
            (number) => /^\d+(\.\d{1,2})?$/.test(number)
          ),
        chargeRate: Yup.number().required('Required').test(
            "maxDigitsAfterDecimal",
            "Charge Rate must have 2 digits after decimal or less",
            (number) => /^\d+(\.\d{1,2})?$/.test(number)
          ),
        extraRate: Yup.number().test(
            "maxDigitsAfterDecimal",
            "Extra Rate must have 2 digits after decimal or less",
            (number) => /^\d+(\.\d{1,2})?$/.test(number)
          ),
    })
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, [isLoading]);

    return (
        <Modal
            show={show} 
            onHide={handleClose}
            className='view-shift-modal max-modal-height'
            size='xl'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Shift ({data.client} - {data.site})</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        type: data.type,
                        startDate: data.startDate,
                        endDate: data.endDate,
                        startTime: data.startTime,
                        endTime: data.endTime,
                        client: data.client,
                        site: data.site,
                        subsite: data.subsite,
                        case: data.case,
                        position: data.position,
                        quantity: data.quantity,
                        payRate: data.payRate,
                        chargeRate: data.chargeRate,
                        extraRate: data.extraRate,
                        siteAssets: data.siteAssets
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 1500);
                    }}>
                        {({values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            isSubmitting}) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>
                                            Select Job Type
                                        </Form.Label>
                                        <label htmlFor='type-shift'>
                                            <Field
                                                name="type"
                                                id="type-shift"
                                                value="shift"
                                                type="radio"
                                            />
                                            Shift
                                        </label>
                                        <label htmlFor='type-response'>
                                            <Field
                                                name="type"
                                                id="type-response"
                                                value="response"
                                                type="radio"
                                            />
                                            Response
                                        </label>
                                    </Form.Group>
                                </Form>
                            )}
                    </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary'>Cancel</Button>
                <Button variant='primary'>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}
