import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function ButtonLoader() {
  return (
    <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className="ms-2"
        />
  )
}
