import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

export default function EditShiftModal({data, employee, show, handleClose}) {
    const clients = [
        { value: 'Coca Cola European Partner', label: 'Coca Cola European Partner' },
        { value: 'Profile Security Services Limited', label: 'Profile Security Services Limited' }
    ];
    const sites = [
        { value: 'CCEP Uxbridge', label: 'CCEP Uxbridge' },
        { value: 'KGV - Cruise', label: 'KGV - Cruise' },
        { value: 'Hydrasun Gateway Business Park', label: 'Hydrasun Gateway Business Park' }
    ];
    const subsites = [];
    const cases = [
        { value: 'uxbridge (New) - 00002334', label: 'uxbridge (New) - 00002334' }
    ];
    const positions = [
        { value: 'Core Officer', label: 'Core Officer' }
    ];
    const employees = [
        { value: 'Abdullah', label: 'Abdullah' },
        { value: 'Aalam Zaib', label: 'Aalam Zaib' },
        { value: 'Amir Shafique', label: 'Amir Shafique' }
    ];

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
            className='shift-modal max-modal-height'
            size='xl'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Shift ({data.client} - {data.site})</Modal.Title>
            </Modal.Header>
            <Modal.Body className='custom-scrollbar'>
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
                        employee: employee !== '' ? employee.name : '',
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
                                    <div className='row g-0 mb-3'>
                                        <Form.Label>
                                            Select Job Type *
                                        </Form.Label>
                                        <div className='col-md-6 pe-2'>
                                            <label 
                                                htmlFor='type-shift' 
                                                className={'job-type-radio p-2 text-center '+ (values.type === 'shift' ? 'active' : '')} 
                                            >
                                                <Field
                                                    name="type"
                                                    id="type-shift"
                                                    value="shift"
                                                    type="radio"
                                                />
                                                Shift
                                            </label>
                                        </div>
                                        <div className='col-md-6 ps-2'>
                                            <label 
                                                htmlFor='type-response' 
                                                className={'job-type-radio p-2 text-center '+ (values.type === 'response' ? 'active' : '')}
                                            >
                                                <Field
                                                    name="type"
                                                    id="type-response"
                                                    value="response"
                                                    type="radio"
                                                />
                                                Response
                                            </label>
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Start Date *</Form.Label>
                                            <Form.Control
                                                type='date'
                                                name='startDate'
                                                defaultValue={values.startDate.split("-").reverse().join("-")}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='col-md-6 ps-2'>
                                            <Form.Label>End Date *</Form.Label>
                                            <Form.Control
                                                type='date'
                                                name='endDate'
                                                defaultValue={values.endDate.split("-").reverse().join("-")}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Start Time *</Form.Label>
                                            <Form.Control
                                                type='time'
                                                name='startTime'
                                                defaultValue={values.startTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='col-md-6 ps-2'>
                                            <Form.Label>End Time *</Form.Label>
                                            <Form.Control
                                                type='time'
                                                name='endTime'
                                                defaultValue={values.endTime}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Client *</Form.Label>
                                            <Select
                                                name='client'
                                                defaultValue={values.client}
                                                isSearchable={true}
                                                options={clients} 
                                            />
                                            {values.client}
                                        </div>
                                        <div className='col-md-6 ps-2'>
                                            <Form.Label>Site *</Form.Label>
                                            <Select
                                                name='site'
                                                defaultValue={values.site}
                                                isSearchable={true}
                                                options={sites} 
                                            />
                                            {values.site}
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Subsite</Form.Label>
                                            <Select
                                                name='subsite'
                                                defaultValue={values.subsite}
                                                isSearchable={true}
                                                options={subsites} 
                                            />
                                            {values.subsite}
                                        </div>
                                        <div className='col-md-6 ps-2'>
                                            <Form.Label>Case *</Form.Label>
                                            <Select
                                                name='case'
                                                defaultValue={values.case}
                                                isSearchable={true}
                                                options={cases} 
                                            />
                                            {values.case}
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Position *</Form.Label>
                                            <Select
                                                name='position'
                                                defaultValue={values.position}
                                                isSearchable={true}
                                                options={positions} 
                                            />
                                            {values.position}
                                        </div>
                                        <div className='col-md-6 ps-2'></div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-12'>
                                            <p className='fw-bold mb-0'>Assign Employee</p>
                                            <hr className='mt-1' />
                                            <Form.Label>Employee</Form.Label>
                                            <Select
                                                name='employee'
                                                defaultValue={values.employee}
                                                isSearchable={true}
                                                isClearable={true}
                                                options={employees} 
                                            />
                                            {values.employee}
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Pay Rate *</Form.Label>
                                            <Form.Control
                                                type='number'
                                                name='payRate'
                                                value={values.payRate}
                                                onChange={handleChange}
                                            />
                                            {values.payRate}
                                        </div>
                                        <div className='col-md-6 ps-2'>
                                            <Form.Label>Charge Rate *</Form.Label>
                                            <Form.Control
                                                type='number'
                                                name='chargeRate'
                                                value={values.chargeRate}
                                                onChange={handleChange}
                                            />
                                            {values.chargeRate}
                                        </div>
                                    </div>
                                    <div className='row g-0 mb-3'>
                                        <div className='col-md-6 pe-2'>
                                            <Form.Label>Extra Charge</Form.Label>
                                            <Form.Control
                                                type='number'
                                                name='extraRate'
                                                value={values.extraRate}
                                                onChange={handleChange}
                                            />
                                            {values.extraRate}
                                        </div>
                                        <div className='col-md-6 ps-2'></div>
                                    </div>
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
