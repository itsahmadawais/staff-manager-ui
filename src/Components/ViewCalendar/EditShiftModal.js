import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
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
    const siteAssetsList = [
        {
            id: '101',
            name: 'Nottingham CCEP Set',
            type: 'key',
            currentLoc: 'BLACK TERMINATED FORD RANGER FD18 UAS (Vehicle)',
            handBackLoc: ''
        },
        {
            id: '102',
            name: 'Nottingham CCEP Set',
            type: 'key',
            currentLoc: 'BLACK TERMINATED FORD RANGER FD18 UAS (Vehicle)',
            handBackLoc: ''
        }
    ];

    const [isLoading, setIsLoading] = useState(true);
    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Required'),
        startDate: Yup.date().required('Required'),
        endDate: Yup.date().min(Yup.ref('startDate'), 'End Date must not be earlier than Start Date').required('Required'),
        startTime: Yup.string().required('Required'),
        endTime: Yup.string().min(Yup.ref('startTime'), 'End Time must not be earlier than Start Time').required('Required'),
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
    
    const matchAsset = (assetId) => {
        let matched = false;
        data.siteAssets.forEach(asset => {
            if (assetId === asset.id) {
                matched = true;
            }
        });
        return matched;
    };

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
                            setFieldValue,
                            handleChange,
                            handleSubmit,
                            isSubmitting}) => (
                                <Form onSubmit={handleSubmit}>
                                    <Modal.Body className='custom-scrollbar'>
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
                                                <p className='error-feedback'>
                                                    {errors.type && touched.type && errors.type}
                                                </p>
                                            </div>
                                            {
                                                values.type === 'shift' ? (
                                                    <>
                                                        <div className='row g-0 mb-3'>
                                                            <div className='col-md-6 pe-2'>
                                                                <Form.Label>Start Date *</Form.Label>
                                                                <Form.Control
                                                                    type='date'
                                                                    name='startDate'
                                                                    defaultValue={values.startDate.split("-").reverse().join("-")}
                                                                    onChange={handleChange}
                                                                />
                                                                <p className='error-feedback'>
                                                                    {errors.startDate && touched.startDate && errors.startDate}
                                                                </p>
                                                            </div>
                                                            <div className='col-md-6 ps-2'>
                                                                <Form.Label>End Date *</Form.Label>
                                                                <Form.Control
                                                                    type='date'
                                                                    name='endDate'
                                                                    defaultValue={values.endDate.split("-").reverse().join("-")}
                                                                    onChange={handleChange}
                                                                />
                                                                <p className='error-feedback'>
                                                                    {errors.endDate && touched.endDate && errors.endDate}
                                                                </p>
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
                                                                <p className='error-feedback'>
                                                                    {errors.startTime && touched.startTime && errors.startTime}
                                                                </p>
                                                            </div>
                                                            <div className='col-md-6 ps-2'>
                                                                <Form.Label>End Time *</Form.Label>
                                                                <Form.Control
                                                                    type='time'
                                                                    name='endTime'
                                                                    defaultValue={values.endTime}
                                                                    onChange={handleChange}
                                                                />
                                                                <p className='error-feedback'>
                                                                    {errors.endTime && touched.endTime && errors.endTime}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className='row g-0 mb-3'>
                                                        <div className='col-md-6 pe-2'>
                                                            <Form.Label>Start Date *</Form.Label>
                                                            <Form.Control
                                                                type='date'
                                                                name='startDate'
                                                                defaultValue={values.startDate.split("-").reverse().join("-")}
                                                                onChange={handleChange}
                                                            />
                                                            <p className='error-feedback'>
                                                                {errors.startDate && touched.startDate && errors.startDate}
                                                            </p>
                                                        </div>
                                                        <div className='col-md-6 pe-2'>
                                                            <Form.Label>Start Time *</Form.Label>
                                                            <Form.Control
                                                                type='time'
                                                                name='startTime'
                                                                defaultValue={values.startTime}
                                                                onChange={handleChange}
                                                            />
                                                            <p className='error-feedback'>
                                                                {errors.startTime && touched.startTime && errors.startTime}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <div className='row g-0 mb-3'>
                                                <div className='col-md-6 pe-2'>
                                                    <Form.Label>Client *</Form.Label>
                                                    <Select
                                                        name='client'
                                                        defaultValue={{value: values.client, label: values.client}}
                                                        isSearchable={true}
                                                        options={clients} 
                                                        onChange={(opt) => setFieldValue('client', opt.value)}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.client && touched.client && errors.client}
                                                    </p>
                                                </div>
                                                <div className='col-md-6 ps-2'>
                                                    <Form.Label>Site *</Form.Label>
                                                    <Select
                                                        name='site'
                                                        defaultValue={{value: values.site, label: values.site}}
                                                        isSearchable={true}
                                                        options={sites}
                                                        onChange={(opt) => setFieldValue('site', opt.value)} 
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.site && touched.site && errors.site}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='row g-0 mb-3'>
                                                <div className='col-md-6 pe-2'>
                                                    <Form.Label>Subsite</Form.Label>
                                                    <Select
                                                        name='subsite'
                                                        defaultValue={
                                                            values.subsite !== '' ?
                                                            {value: values.subsite, label: values.subsite} :
                                                            undefined
                                                        }
                                                        isSearchable={true}
                                                        options={subsites} 
                                                        onChange={(opt) => setFieldValue('subsite', opt.value)}
                                                    />
                                                </div>
                                                <div className='col-md-6 ps-2'>
                                                    <Form.Label>Case *</Form.Label>
                                                    <Select
                                                        name='case'
                                                        defaultValue={{value: values.case, label: values.case}}
                                                        isSearchable={true}
                                                        options={cases}
                                                        onChange={(opt) => setFieldValue('case', opt.value)} 
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.case && touched.case && errors.case}
                                                    </p>
                                                </div>
                                            </div>
                                            {
                                                values.type === 'shift' &&
                                                <div className='row g-0 mb-3'>
                                                    <div className='col-md-6 pe-2'>
                                                        <Form.Label>Position *</Form.Label>
                                                        <Select
                                                            name='position'
                                                            defaultValue={{value: values.position, label: values.position}}
                                                            isSearchable={true}
                                                            options={positions} 
                                                            onChange={(opt) => setFieldValue('position', opt.value)}
                                                        />
                                                        <p className='error-feedback'>
                                                            {errors.position && touched.position && errors.position}
                                                        </p>
                                                    </div>
                                                    <div className='col-md-6 ps-2'></div>
                                                </div>
                                            }
                                            <div className='row g-0 mb-3'>
                                                <div className='col-md-12'>
                                                    <p className='fw-bold mb-0'>Assign Employee</p>
                                                    <hr className='mt-1' />
                                                    <Form.Label>Employee</Form.Label>
                                                    <Select
                                                        name='employee'
                                                        defaultValue={
                                                            values.employee !== '' ? 
                                                            {value: values.employee, label: values.employee} : 
                                                            undefined
                                                        }
                                                        isSearchable={true}
                                                        isClearable={true}
                                                        options={employees} 
                                                        onChange={(opt) => setFieldValue('employee', opt.value)}
                                                    />
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
                                                    <p className='error-feedback'>
                                                        {errors.payRate && touched.payRate && errors.payRate}
                                                    </p>
                                                </div>
                                                <div className='col-md-6 ps-2'>
                                                    <Form.Label>Charge Rate *</Form.Label>
                                                    <Form.Control
                                                        type='number'
                                                        name='chargeRate'
                                                        value={values.chargeRate}
                                                        onChange={handleChange}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.chargeRate && touched.chargeRate && errors.chargeRate}
                                                    </p>
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
                                                    <p className='error-feedback'>
                                                        {errors.extraRate && touched.extraRate && errors.extraRate}
                                                    </p>
                                                </div>
                                                <div className='col-md-6 ps-2'></div>
                                            </div>
                                            <div className='row g-0 mb-3'>
                                                <div className='col-md-12'>
                                                    <p className='fw-bold mb-0'>Site Assets</p>
                                                    <hr className='mt-1' />
                                                    <Table bordered responsive>
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Name</th>
                                                                <th>Type</th>
                                                                <th>Current Location</th>
                                                                <th>Hand Back Location</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                siteAssetsList.map((item, index) => {
                                                                    return(
                                                                        <tr key={item.id}>
                                                                            <td>
                                                                                <Form.Check
                                                                                    type='checkbox'
                                                                                    id={'site-asset-'+item.id}
                                                                                    name={`siteAssets[${index}].id`}
                                                                                    checked={matchAsset(item.id)}
                                                                                />
                                                                            </td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.type}</td>
                                                                            <td>{item.currentLoc}</td>
                                                                            <td>{item.handBackLoc}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant='secondary' disabled={isSubmitting}>Cancel</Button>
                                            <Button type='submit' variant='primary' disabled={isSubmitting}>Save</Button>
                                        </Modal.Footer>
                                </Form>
                            )}
                </Formik>
        </Modal>
    )
}
