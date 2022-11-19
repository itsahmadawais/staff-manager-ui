import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaTimesCircle } from "react-icons/fa";

export default function DeleteUserModal({show, handleClose, deleteUser}) {
  return (
    <Modal
        show={show} 
        onHide={handleClose}
        className='max-modal-height'
        
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='d-flex flex-column align-items-center'>
                <FaTimesCircle size={40} color={'red'} />
                <p className='mt-3'>Are you sure you want to delete the user?</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Cancel</Button>
            <Button variant='primary' onClick={deleteUser}>Delete</Button>
        </Modal.Footer>
    </Modal>
  )
}
