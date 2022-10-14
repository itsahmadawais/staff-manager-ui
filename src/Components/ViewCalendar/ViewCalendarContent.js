import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Table } from 'react-bootstrap';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import EmployeeShift from './EmployeeShift';

export default function ViewCalendarContent() {
    const currentWeek = [
        {
            day: 'Mon',
            date: '10-10-2022'
        },
        {
            day: 'Tue',
            date: '11-10-2022'
        },
        {
            day: 'Wed',
            date: '12-10-2022'
        },
        {
            day: 'Thu',
            date: '13-10-2022'
        },
        {
            day: 'Fri',
            date: '14-10-2022'
        },
        {
            day: 'Sat',
            date: '15-10-2022'
        },
        {
            day: 'Sun',
            date: '16-10-2022'
        }
    ];
    const unassignedShiftDays = [
        {
            id: '1',
            date: '10-10-2022',
            shifts: []
        },
        {
            id: '2',
            date: '11-10-2022',
            shifts: []
        },
        {
            id: '3',
            date: '12-10-2022',
            shifts: [
                {
                    id: '10',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting'
                }
            ]
        },
        {
            id: '4',
            date: '13-10-2022',
            shifts: [
                {
                    id: '11',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting'
                },
                {
                    id: '12',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '07:00',
                    endTime: '19:00',
                    status: 'Awaiting'
                },
                {
                    id: '13',
                    client: 'Profile Security Services Limited',
                    site: 'KGV - Cruise',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '07:00',
                    endTime: '19:00',
                    status: 'Failed to Confirm'
                },
                {
                    id: '14',
                    client: 'Profile Security Services Limited',
                    site: 'Hydrasun Gateway Business Park',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '07:00',
                    endTime: '19:00',
                    status: 'Declined'
                }
            ]
        },
        {
            id: '5',
            date: '14-10-2022',
            shifts: [
                {
                    id: '15',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Confirmed'
                }
            ]
        },
        {
            id: '6',
            date: '15-10-2022',
            shifts: [
                {
                    id: '16',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting'
                }
            ]
        },
        {
            id: '7',
            date: '16-10-2022',
            shifts: [
                {
                    id: '17',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting'
                }
            ]
        }
    ];

    const employeeShifts = [
        {
            id: '1',
            image: '/images/user.jpg',
            name: 'Abdullah',
            shiftsHours: 0,
            shiftDays: []
        },
        {
            id: '2',
            image: '/images/user.jpg',
            name: 'Aalam Zaib',
            shiftsHours: 72,
            shiftDays: [
                {
                    id: '1',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '2',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '3',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '12-10-2022',
                    endDate: '12-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                },
                {
                    id: '4',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '13-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                },
                {
                    id: '5',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '14-10-2022',
                    endDate: '14-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                },
                {
                    id: '6',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '15-10-2022',
                    endDate: '15-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                },
                {
                    id: '7',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    startDate: '16-10-2022',
                    endDate: '16-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                }
            ]
        },
        {
            id: '3',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: []
        },
        {
            id: '4',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: []
        },
        {
            id: '5',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: []
        },
        {
            id: '6',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: []
        },
        {
            id: '7',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: []
        }
    ];

    return (
        <div className='view-calendar'>
            <div className='calendar-head d-flex align-items-center justify-content-between'>
                <div className='current-week d-flex align-items-center'>
                    <div className='dates me-3'>
                        <span className='start-date'>
                            {currentWeek[0].day} {currentWeek[0].date}
                        </span>
                        <span> - </span>
                        <span className='end-date'>
                            {currentWeek[currentWeek.length-1].day} {currentWeek[currentWeek.length-1].date}
                        </span>
                    </div>
                    <div className='actions'>
                        <Button variant='icon' className='px-1 py-0'>
                            <BiChevronLeft size={25} />
                        </Button>
                        <Button variant='icon' className='px-1 py-0'>
                            <BiChevronRight size={25} />
                        </Button>
                    </div>
                </div>
                <Button variant='primary'>Publish Shifts</Button>
            </div>
            <div className='calendar-body mt-4'>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Employees</th>
                            {
                                currentWeek.map((item, index) => {
                                    return <th key={index}>{item.day}, {item.date.substring(0, item.date.indexOf('-'))}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <DragDropContext>
                        <tbody>
                            <tr>
                                <td>Unassigned Shifts</td>
                                {
                                    unassignedShiftDays.map((item) => {
                                        return(
                                            <Droppable key={item.id} droppableId={item.id+item.date}>
                                                {(provided) => (
                                                    <td 
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        {
                                                            item.shifts.length ? (
                                                                item.shifts.map((item, index) => {
                                                                    return(
                                                                        <Draggable 
                                                                            key={item.id} 
                                                                            draggableId={item.id} 
                                                                            index={index}
                                                                        >
                                                                            {(provided) => (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.dragHandleProps}
                                                                                    {...provided.draggableProps}
                                                                                >
                                                                                    <EmployeeShift data={item} />
                                                                                </div>
                                                                            )}
                                                                        </Draggable>
                                                                    )
                                                                })
                                                            ) : (
                                                                ''
                                                            )
                                                        }
                                                    </td>
                                                )}
                                            </Droppable>
                                        )
                                    })
                                }
                            </tr>
                        </tbody>
                    </DragDropContext>
                </Table>
            </div>
        </div>
    )
}
