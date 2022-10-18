import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function ViewShiftModal({data, show, handleClose}) {
    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            className='view-shift-modal'
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Shift Details ({data.client} + {data.site})</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <p className='field-name mb-0'>Client</p>
                        <p>{data.client}</p>
                        <p className='field-name mb-0'>Start Date</p>
                        <p>{data.startDate}</p>
                        <p className='field-name mb-0'>Start Time</p>
                        <p>{data.startTime}</p>
                        <p className='field-name mb-0'>Cancelled</p>
                        <p>{data.cancelled ? 'Yes' : 'No'}</p>
                    </div>
                    <div className='col-md-6'>
                        <p className='field-name mb-0'>Site</p>
                        <p>{data.site}</p>
                        <p className='field-name mb-0'>End Date</p>
                        <p>{data.endDate}</p>
                        <p className='field-name mb-0'>End Time</p>
                        <p>{data.endTime}</p>
                        <p className='field-name mb-0'>Published</p>
                        <p>{data.published ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    View Shift
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
