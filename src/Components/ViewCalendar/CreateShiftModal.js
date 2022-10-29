import React, { useState, useEffect } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import Select from 'react-select';
import moment from 'moment';
import { ButtonLoader } from '../UI';

export default function CreateShiftModal({date, employee, show, handleClose, handleShiftCreation}) {
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
        { value: '18', label: 'Abdullah' },
        { value: '19', label: 'Aalam Zaib' },
        { value: '20', label: 'Amir Shafique' },
        { value: '21', label: 'Amir Shafique'},
        { value: '22', label: 'Amir Shafique'},
        { value: '23', label: 'Amir Shafique'},
        { value: '24', label: 'Amir Shafique'}
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
            name: 'Buckingham CCEP Set',
            type: 'key',
            currentLoc: 'BLACK TERMINATED FORD RANGER FD18 UAS (Vehicle)',
            handBackLoc: ''
        }
    ];
    const handbackOpts = [
        {
            label: 'Sites',
            options: [
                { value: 'CCEP Uxbridge', label: 'CCEP Uxbridge' },
                { value: 'KGV - Cruise', label: 'KGV - Cruise' },
                { value: 'Hydrasun Gateway Business Park', label: 'Hydrasun Gateway Business Park' }
            ]
        },
        {
            label: 'Vehicles',
            options: [
                { value: 'FD18 UAS (Vehicle)', label: 'FD18 UAS (Vehicle)'}
            ]
        },
        {
            label: 'Users',
            options: [
                { value: '18', label: 'Abdullah'},
                { value: '19', label: 'Aalam Zaib' },
                { value: '20', label: 'Amir Shafique' },
                { value: '21', label: 'Amir Shafique'},
                { value: '22', label: 'Amir Shafique'},
                { value: '23', label: 'Amir Shafique'},
                { value: '24', label: 'Amir Shafique'}
            ]
        }
    ];
    const repeatOpts = [
        { value: 'Daily', label: 'Daily'},
        { value: 'Weekly', label: 'Weekly'},
        { value: 'Monthly', label: 'Monthly'},
        { value: 'Yearly', label: 'Yearly'}
    ];

    const [selectedOpt, setSelectedOpt] = useState(employee !== '' ? {value: employee.id, label: employee.name} : null);
    const [isLoading, setIsLoading] = useState(true);

    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Required'),
        startDate: Yup.date().required('Required'),
        endDate: Yup.date().min(Yup.ref('startDate'), 'End Date must not be earlier than Start Date').required('Required'),
        startTime: Yup.string().required('Required'),
        endTime: Yup.string().required('Required').test(
            'minimumEndTime',
            'End Time must not be earlier than Start Time',
            function (value) {
                const {startDate, endDate, startTime} = this.parent;
                if (startDate.getTime() === endDate.getTime()) {
                    return moment(value, 'HH:mm').isSameOrAfter(moment(startTime, 'HH:mm'));
                } else {
                    return true;
                }
            }
        ),
        client: Yup.string().required('Required'),
        site: Yup.string().required('Required'),
        case: Yup.string().required('Required'),
        position: Yup.string().required('Required'),
        quantity: Yup.number().min(1, 'Quantity must be atleast 1'),
        payRate: Yup.number().required('Required').test(
            'maxDigitsAfterDecimal',
            'Pay Rate must have 2 digits after decimal or less',
            (number) => /^\d+(\.\d{1,2})?$/.test(number)
          ),
        chargeRate: Yup.number().required('Required').test(
            'maxDigitsAfterDecimal',
            'Charge Rate must have 2 digits after decimal or less',
            (number) => /^\d+(\.\d{1,2})?$/.test(number)
          ),
        extraRate: Yup.number().test(
            'maxDigitsAfterDecimal',
            'Extra Rate must have 2 digits after decimal or less',
            (number) => /^\d+(\.\d{1,2})?$/.test(number)
          ),
        repetition: Yup.string().required('Required'),
        every: Yup.number().min(1, 'It should not be less than 1')
    });

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
                <Modal.Title>Create New Shift</Modal.Title>
            </Modal.Header>
            <Formik
                initialValues={{
                    type: 'shift',
                    startDate: date.split("-").reverse().join("-"),
                    endDate: date.split("-").reverse().join("-"),
                    startTime: '',
                    endTime: '',
                    client: '',
                    site: '',
                    subsite: '',
                    case: '',
                    position: '',
                    quantity: '1',
                    employee: employee !== '' ? employee.id : '',
                    payRate: '0',
                    chargeRate: '0',
                    extraRate: '0',
                    siteAssets: [],
                    repetition: 'shift-recurrence',
                    repeat: 'Weekly',
                    every: '1'
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    values.employee = selectedOpt !== null ? selectedOpt.value : '';
                    handleShiftCreation(values);
                    setSubmitting(true);
                    setTimeout(() => {
                        setSubmitting(false);
                        handleClose();
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
                                            <Form.Label>
                                                Select Job Type *
                                            </Form.Label>
                                            <div className='div d-flex mb-3'>
                                                <div className='w-50 pe-2'>
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
                                                <div className='w-50 ps-2'>
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
                                            <div className='div d-flex flex-wrap mb-3'>
                                                <div className='w-50 pe-2'>
                                                    <Form.Label>Start Date *</Form.Label>
                                                    <Form.Control
                                                        type='date'
                                                        name='startDate'
                                                        defaultValue={values.startDate}
                                                        onChange={handleChange}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.startDate && touched.startDate && errors.startDate}
                                                    </p>
                                                </div>
                                                {
                                                    values.type === 'shift' &&
                                                    <div className='w-50 ps-2'>
                                                        <Form.Label>End Date *</Form.Label>
                                                        <Form.Control
                                                            type='date'
                                                            name='endDate'
                                                            defaultValue={values.endDate}
                                                            onChange={handleChange}
                                                        />
                                                        <p className='error-feedback'>
                                                            {errors.endDate && touched.endDate && errors.endDate}
                                                        </p>
                                                    </div>
                                                }
                                                <div className='w-50 pe-2'>
                                                    <Form.Label>Start Time *</Form.Label>
                                                    <Form.Control
                                                        type='time'
                                                        name='startTime'
                                                        onChange={handleChange}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.startTime && touched.startTime && errors.startTime}
                                                    </p>
                                                </div>
                                                {
                                                    values.type === 'shift' &&
                                                    <div className='w-50 ps-2'>
                                                        <Form.Label>End Time *</Form.Label>
                                                        <Form.Control
                                                            type='time'
                                                            name='endTime'
                                                            onChange={handleChange}
                                                        />
                                                        <p className='error-feedback'>
                                                            {errors.endTime && touched.endTime && errors.endTime}
                                                        </p>
                                                    </div>
                                                }
                                            </div>
                                            <div className='div d-flex mb-3'>
                                                <div className='w-50 pe-2'>
                                                    <Form.Label>Client *</Form.Label>
                                                    <Select
                                                        name='client'
                                                        isSearchable={true}
                                                        options={clients} 
                                                        onChange={(opt) => setFieldValue('client', opt.value)}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.client && touched.client && errors.client}
                                                    </p>
                                                </div>
                                                <div className='w-50 ps-2'>
                                                    <Form.Label>Site *</Form.Label>
                                                    <Select
                                                        name='site'
                                                        isSearchable={true}
                                                        options={sites}
                                                        onChange={(opt) => setFieldValue('site', opt.value)} 
                                                        isDisabled={values.client === '' ? true : false}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.site && touched.site && errors.site}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='div d-flex mb-3'>
                                                <div className='w-50 pe-2'>
                                                    <Form.Label>Subsite</Form.Label>
                                                    <Select
                                                        name='subsite'
                                                        isSearchable={true}
                                                        options={subsites} 
                                                        onChange={(opt) => setFieldValue('subsite', opt.value)}
                                                        isDisabled={values.site === '' ? true : false}
                                                    />
                                                </div>
                                                <div className='w-50 ps-2'>
                                                    <Form.Label>Case *</Form.Label>
                                                    <Select
                                                        name='case'
                                                        isSearchable={true}
                                                        options={cases}
                                                        onChange={(opt) => setFieldValue('case', opt.value)} 
                                                        isDisabled={values.site === '' ? true : false}
                                                    />
                                                    <p className='error-feedback'>
                                                        {errors.case && touched.case && errors.case}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='div d-flex mb-3'>
                                                {
                                                    values.type === 'shift' &&
                                                    <div className='w-50 pe-2'>
                                                            <Form.Label>Position *</Form.Label>
                                                            <Select
                                                                name='position'
                                                                isSearchable={true}
                                                                options={positions} 
                                                                onChange={(opt) => setFieldValue('position', opt.value)}
                                                            />
                                                            <p className='error-feedback'>
                                                                {errors.position && touched.position && errors.position}
                                                            </p>
                                                        </div>
                                                }
                                                    <div className={`w-50 ${values.type === 'shift' ? 'ps-2' : 'pe-2'}`}>
                                                        <Form.Label>Quantity *</Form.Label>
                                                        <Form.Control
                                                            type='number'
                                                            name='quantity'
                                                            value={values.quantity}
                                                            onChange={handleChange}
                                                        />
                                                        <p className='error-feedback'>
                                                            {errors.quantity && touched.quantity && errors.quantity}
                                                        </p>
                                                    </div>
                                                </div>
                                            <div className='div mb-3'>
                                                <p className='fw-bold mb-0'>Assign Employee</p>
                                                <hr className='mt-1' />
                                                <Form.Label>Employee</Form.Label>
                                                <Select
                                                    name='employee'
                                                    defaultValue={
                                                        values.employee !== '' ? 
                                                        {value: values.employee, label: employee.name} : 
                                                        undefined
                                                    }
                                                    isSearchable={true}
                                                    isClearable={true}
                                                    options={employees}
                                                    value={selectedOpt} 
                                                    onChange={(opt) => setSelectedOpt(opt)}
                                                />
                                            </div>
                                            <div className='div d-flex mb-3'>
                                                <div className='w-50 pe-2'>
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
                                                <div className='w-50 ps-2'>
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
                                            <div className='div d-flex mb-3'>
                                                <div className='w-50 pe-2'>
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
                                                <div className='w-50 ps-2'></div>
                                            </div>
                                            <div className='div mb-3'>
                                                <p className='fw-bold mb-0'>Site Assets</p>
                                                <hr className='mt-1' />
                                                {
                                                    values.site === '' ? (
                                                        <>
                                                            <div className='d-flex justify-content-center'>
                                                                Please select a site to begin selecting assets.
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ) : (
                                                        siteAssetsList.length !== 0 ? (
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
                                                                                            name={'site-asset-'+item.id}
                                                                                            onChange={(e) => {
                                                                                                let temp = [...values.siteAssets];
                                                                                                if (e.target.checked) {
                                                                                                    temp.push(item);
                                                                                                    setFieldValue('siteAssets', temp);
                                                                                                } else {
                                                                                                    let i = temp.findIndex(obj => obj.id === item.id)
                                                                                                    temp.splice(i, 1);
                                                                                                    setFieldValue('siteAssets', temp);
                                                                                                }
                                                                                            }}
                                                                                        />
                                                                                    </td>
                                                                                    <td>{item.name}</td>
                                                                                    <td>{item.type}</td>
                                                                                    <td>{item.currentLoc}</td>
                                                                                    <td>
                                                                                        {
                                                                                            <Select
                                                                                                name={'handback-loc'+item.id}
                                                                                                isSearchable={true}
                                                                                                options={handbackOpts} 
                                                                                                onChange={(opt) => {
                                                                                                    let temp = [...values.siteAssets];
                                                                                                    temp[index].handBackLoc = opt.label;
                                                                                                    setFieldValue('siteAssets', temp);
                                                                                                }}
                                                                                                isDisabled={!values.siteAssets.find(asset => asset.id === item.id)}
                                                                                            />   
                                                                                        }
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </Table>
                                                        ) : (
                                                            <>
                                                                <div className='d-flex justify-content-center'>
                                                                    No data
                                                                </div>
                                                                <hr />
                                                            </>
                                                        )
                                                    )
                                                }
                                            </div>
                                            <div className='div d-flex mb-3'>
                                                <div className='w-50 pe-2'>
                                                    <label 
                                                        htmlFor='shift-recurrence' 
                                                        className={'job-type-radio p-2 text-center '+ (values.repetition === 'shift-recurrence' ? 'active' : '')} 
                                                    >
                                                        <Field
                                                            name="repetition"
                                                            id="shift-recurrence"
                                                            value="shift-recurrence"
                                                            type="radio"
                                                        />
                                                        Shift Recurrence
                                                    </label>
                                                </div>
                                                <div className='w-50 ps-2'>
                                                    <label 
                                                        htmlFor='extra-dates' 
                                                        className={'job-type-radio p-2 text-center '+ (values.repetition === 'extra-dates' ? 'active' : '')}
                                                    >
                                                        <Field
                                                            name="repetition"
                                                            id="extra-dates"
                                                            value="extra-dates"
                                                            type="radio"
                                                        />
                                                        Extra Dates
                                                    </label>
                                                </div>
                                                <p className='error-feedback'>
                                                    {errors.repetition && touched.repetition && errors.repetition}
                                                </p>
                                            </div>
                                            <div className='div d-flex align-items-center mb-3'>
                                                <p className='fw-bold mb-0 me-3'>Repeat</p>
                                                <Select
                                                    name='repeat'
                                                    defaultValue={
                                                        {value: values.repeat, label: values.repeat}
                                                    }
                                                    isSearchable={false}
                                                    isClearable={false}
                                                    options={repeatOpts}
                                                    onChange={(opt) => setFieldValue('repeat', opt.value)}
                                                />
                                            </div>
                                            <div className='div d-flex align-items-center mb-3'>
                                                <p className='fw-bold mb-0 me-3'>Every</p>
                                                <Form.Control
                                                    type='number'
                                                    name='every'
                                                    value={values.every}
                                                    onChange={handleChange}
                                                />
                                                <p className='fw-bold mb-0 me-3'>week(s)</p>
                                                <p className='error-feedback'>
                                                    {errors.every && touched.every && errors.every}
                                                </p>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant='secondary' disabled={isSubmitting}>
                                                Cancel
                                            </Button>
                                            <Button type='submit' variant='primary' disabled={isSubmitting}>
                                                Save {isSubmitting && <ButtonLoader />}
                                            </Button>
                                        </Modal.Footer>
                                </Form>
                            )}
                </Formik>
        </Modal>
    )
}
