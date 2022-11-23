import React from 'react';
import { Form } from 'react-bootstrap';

export default function SearchFilter({placeholder, handleSearch}) {
  return (
    <Form.Control
        type='text'
        name='search-input'
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
    />
  )
}
