import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Loader, Pagination, SearchFilter } from '../UI';

export default function DocumentsContent() {
    const documents = [
        {
            id: '1',
            title: 'The Map',
            description: 'A map for the location',
            public: true
        },
        {
            id: '2',
            title: 'The Map',
            description: 'A map for the location',
            public: true
        },
        {
            id: '3',
            title: 'The Map',
            description: 'A map for the location',
            public: true
        }
    ];
    const [currentDocs, setCurrentDocs] = useState(documents);
    const [searchDoc, setSearchDoc] =  useState('');
    const [isLoading, setIsLoading] = useState(true);
    const perPageItems = 10;

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    return (
        <div className='documents-content content-max-height custom-scrollbar'>
            <div className='row g-0 mb-3'>
                <div className='col-md-9'>
                    <h5>Documents</h5>
                </div>
                <div className='col-md-3'>
                    <SearchFilter 
                        placeholder={'Search Document Title'} 
                        handleSearch={setSearchDoc} 
                    />
                </div>
            </div>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center align-items-center'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Visibility</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    documents.length ? (
                                        currentDocs.filter((item) => {
                                            if(searchDoc === '') {
                                                return item;
                                            } else if (item.title.toLowerCase().includes(searchDoc.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.description}</td>
                                                    <td>
                                                        {item.public ? 'Public' : 'Private'}
                                                    </td>
                                                    <td>
                                                        <Button variant='icon' className='me-2'>
                                                            <AiOutlineEye size={20} />
                                                        </Button>
                                                        <Button variant='icon'>
                                                            <AiOutlineEdit size={20} />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={'5'} className='text-center'>No data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        {
                            !isLoading && documents.length > perPageItems &&
                                <div className='d-flex justify-content-end'>
                                    <Pagination 
                                        data={documents}
                                        setCurrentItems={setCurrentDocs}
                                        perPageItems={perPageItems}
                                    />
                                </div>
                        }
                    </>
                )
            }
        </div>
    )
}
