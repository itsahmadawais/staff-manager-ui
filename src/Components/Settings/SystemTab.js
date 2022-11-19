import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { Loader } from '../UI';
import Select from 'react-select';

export default function SystemTab() {
    const dateOpts = [
        {value: 'dd/mm/yyyy', label: 'dd/mm/yyyy'},
        {value: 'mm/dd/yyyy', label: 'mm/dd/yyyy'},
        {value: 'yyyy-mm-dd', label: 'yyyy-mm-dd'},
        {value: 'dd.mm.yyyy', label: 'dd.mm.yyyy'}
    ];
    const currencyOpts = [
        {value: 'USD', label: 'US Dollar ($)'},
        {value: 'GBP', label: 'GBP (£)'}
    ];
    const timeOpts = [
        {value: '12', label: '12 Hours'},
        {value: '24', label: '24 Hours'}
    ];
    const timezoneOpts = [
        {value: 'AFG', label: 'Afghanistan'},
        {value: 'ALB', label: 'Albania'},
        {value: 'US', label: 'United States'},
        {value: 'UK', label: 'United Kindom'}
    ];
    const [systemValues, setSystemValues] = useState({
        dateFormat: dateOpts[0].value,
        currency: currencyOpts[0].value,
        timeFormat: timeOpts[0].value,
        timezone: timezoneOpts[0].value
    });
    const validationSchema = Yup.object().shape({
        dateFormat: Yup.string().required('Required'),
        currency: Yup.string().required('Required'),
        timeFormat: Yup.string().required('Required'),
        timezone: Yup.string().required('Required')
    });
    const [isLoading, setIsLoading] = useState(false);

    const findLabel = (value, type) => {
        let found = {};
        switch (type) {
            case 'date':
                found = dateOpts.find((item) => item.value === value);
                break;
            case 'currency':
                found = currencyOpts.find((item) => item.value === value);
                break;
            case 'time':
                found = timeOpts.find((item) => item.value === value);
                break;
            case 'timezone':
                found = timezoneOpts.find((item) => item.value === value);
                break;
            default:
                break;
        }
        return found.label;
    };

    return (
        <>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <Loader />
                    </div>
                ) : (
                    <Formik
                        initialValues={systemValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setIsLoading(true);
                            setTimeout(() => {
                                setSystemValues(values);
                                setIsLoading(false);
                            }, 1500);
                        }}
                    >
                        {({
                            values,
                            setFieldValue,
                            handleSubmit
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Date Format
                                        </Form.Label>
                                        <Select
                                            options={dateOpts}
                                            defaultValue={
                                                values.dateFormat !== '' ? 
                                                {value: values.dateFormat, label: findLabel(values.dateFormat, 'date')} :
                                                undefined
                                            }
                                            isSearchable={true}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('dateFormat', opt.value)}
                                        />
                                        <ErrorMessage name='dateFormat' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Currency
                                        </Form.Label>
                                        <Select
                                            options={currencyOpts}
                                            defaultValue={
                                                values.currency !== '' ? 
                                                {value: values.currency, label: findLabel(values.currency, 'currency')} :
                                                undefined
                                            }
                                            isSearchable={true}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('currency', opt.value)}
                                        />
                                        <ErrorMessage name='currency' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='row g-0 mb-3'>
                                    <div className='col-md-6 pe-2'>
                                        <Form.Label>
                                            Time Format
                                        </Form.Label>
                                        <Select
                                            options={timeOpts}
                                            defaultValue={
                                                values.timeFormat !== '' ? 
                                                {value: values.timeFormat, label: findLabel(values.timeFormat, 'time')} :
                                                undefined
                                            }
                                            isSearchable={true}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('timeFormat', opt.value)}
                                        />
                                        <ErrorMessage name='timeFormat' className='error-feedback' component='p' />
                                    </div>
                                    <div className='col-md-6 ps-2'>
                                        <Form.Label>
                                            Timezone
                                        </Form.Label>
                                        <Select
                                            options={timezoneOpts}
                                            defaultValue={
                                                values.timezone !== '' ? 
                                                {value: values.timezone, label: findLabel(values.timezone, 'timezone')} :
                                                undefined
                                            }
                                            isSearchable={true}
                                            isClearable={false}
                                            onChange={(opt) => setFieldValue('timezone', opt.value)}
                                        />
                                        <ErrorMessage name='timezone' className='error-feedback' component='p' />
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <Button variant='primary' type='submit'>Save Details</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )
            }
        </>
    )
}
