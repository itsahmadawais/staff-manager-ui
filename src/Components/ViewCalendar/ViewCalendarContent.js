import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Table } from 'react-bootstrap';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import EmployeeShift from './EmployeeShift';
import { Avatar } from '../UI';

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
            id: '18',
            image: '',
            name: 'Abdullah',
            shiftsHours: 0,
            shiftDays: [
                {
                    id: '25',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '26',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '27',
                    date: '12-10-2022',
                    shifts: []
                },
                {
                    id: '28',
                    date: '13-10-2022',
                    shifts: []
                },
                {
                    id: '29',
                    date: '14-10-2022',
                    shifts: []
                },
                {
                    id: '30',
                    date: '15-10-2022',
                    shifts: []
                },
                {
                    id: '31',
                    date: '16-10-2022',
                    shifts: []
                },
            ]
        },
        {
            id: '19',
            image: '/images/user.jpg',
            name: 'Aalam Zaib',
            shiftsHours: 72,
            shiftDays: [
                {
                    id: '32',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '33',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '34',
                    date: '12-10-2022',
                    shifts: [
                        {
                            id: '35',
                            client: 'Coca Cola European Partner',
                            site: 'CCEP Uxbridge',
                            startDate: '12-10-2022',
                            endDate: '12-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                        }
                    ]
                },
                {
                    id: '36',
                    date: '13-10-2022',
                    shifts: [
                        {
                            id: '37',
                            client: 'Coca Cola European Partner',
                            site: 'CCEP Uxbridge',
                            startDate: '13-10-2022',
                            endDate: '13-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                        }
                    ]
                },
                {
                    id: '38',
                    date: '14-10-2022',
                    shifts: [
                        {
                            id: '39',
                            client: 'Coca Cola European Partner',
                            site: 'CCEP Uxbridge',
                            startDate: '14-10-2022',
                            endDate: '14-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                        }
                    ]
                },
                {
                    id: '40',
                    date: '15-10-2022',
                    shifts: [
                        {
                            id: '41',
                            client: 'Coca Cola European Partner',
                            site: 'CCEP Uxbridge',
                            startDate: '15-10-2022',
                            endDate: '15-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                        }
                    ]
                },
                {
                    id: '42',
                    date: '16-10-2022',
                    shifts: [
                        {
                            id: '43',
                            client: 'Coca Cola European Partner',
                            site: 'CCEP Uxbridge',
                            startDate: '16-10-2022',
                            endDate: '16-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                        }
                    ]
                }
            ]
        },
        {
            id: '20',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: [
                {
                    id: '43',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '44',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '45',
                    date: '12-10-2022',
                    shifts: []
                },
                {
                    id: '46',
                    date: '13-10-2022',
                    shifts: []
                },
                {
                    id: '47',
                    date: '14-10-2022',
                    shifts: []
                },
                {
                    id: '48',
                    date: '15-10-2022',
                    shifts: []
                },
                {
                    id: '49',
                    date: '16-10-2022',
                    shifts: []
                }
            ]
        },
        {
            id: '21',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: [
                {
                    id: '50',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '51',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '52',
                    date: '12-10-2022',
                    shifts: []
                },
                {
                    id: '53',
                    date: '13-10-2022',
                    shifts: []
                },
                {
                    id: '54',
                    date: '14-10-2022',
                    shifts: []
                },
                {
                    id: '55',
                    date: '15-10-2022',
                    shifts: []
                },
                {
                    id: '56',
                    date: '16-10-2022',
                    shifts: []
                }
            ]
        },
        {
            id: '22',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: [
                {
                    id: '57',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '58',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '59',
                    date: '12-10-2022',
                    shifts: []
                },
                {
                    id: '60',
                    date: '13-10-2022',
                    shifts: []
                },
                {
                    id: '61',
                    date: '14-10-2022',
                    shifts: []
                },
                {
                    id: '62',
                    date: '15-10-2022',
                    shifts: []
                },
                {
                    id: '63',
                    date: '16-10-2022',
                    shifts: []
                }
            ]
        },
        {
            id: '23',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: [
                {
                    id: '64',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '65',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '66',
                    date: '12-10-2022',
                    shifts: []
                },
                {
                    id: '67',
                    date: '13-10-2022',
                    shifts: []
                },
                {
                    id: '68',
                    date: '14-10-2022',
                    shifts: []
                },
                {
                    id: '69',
                    date: '15-10-2022',
                    shifts: []
                },
                {
                    id: '70',
                    date: '16-10-2022',
                    shifts: []
                }
            ]
        },
        {
            id: '24',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: 0,
            shiftDays: [
                {
                    id: '71',
                    date: '10-10-2022',
                    shifts: []
                },
                {
                    id: '72',
                    date: '11-10-2022',
                    shifts: []
                },
                {
                    id: '73',
                    date: '12-10-2022',
                    shifts: []
                },
                {
                    id: '74',
                    date: '13-10-2022',
                    shifts: []
                },
                {
                    id: '75',
                    date: '14-10-2022',
                    shifts: []
                },
                {
                    id: '76',
                    date: '15-10-2022',
                    shifts: []
                },
                {
                    id: '77',
                    date: '16-10-2022',
                    shifts: []
                }
            ]
        }
    ];

    const today = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');
    const [unassigned] = useState(unassignedShiftDays);
    const [assigned] = useState(employeeShifts);
    
    const handleDragEnd = (result) => {
        const {source, destination} = result;
        if (!destination) {
            return;
        }
        //if employee shifts are moved to unassigned shifts
        if (source.droppableId.indexOf('unassigned') === -1 && destination.droppableId.indexOf('unassigned') !== -1) {
            window.alert('Cannot move to unassigned shifts');
        } else {
            //if unassigned shifts are moved from and to unassigned shifts
            if (source.droppableId.indexOf('unassigned') !== -1 && destination.droppableId.indexOf('unassigned') !== -1) {
                let sourceId = source.droppableId.substring(source.droppableId.indexOf(' ') + 1);
                let sourceClone = unassigned.find(obj => obj.date === sourceId);
                let destId = destination.droppableId.substring(destination.droppableId.indexOf(' ') + 1);
                let destClone = unassigned.find(obj => obj.date === destId);
                
                let [removed] = sourceClone.shifts.splice(source.index, 1);
                destClone.shifts.splice(destination.index, 0, removed);
            }
            //if unassigned shifts are moved to employee shifts
            else if (source.droppableId.indexOf('unassigned') !== -1 && destination.droppableId.indexOf('unassigned') === -1) {
                let sourceId = source.droppableId.substring(source.droppableId.indexOf(' ') + 1);
                let sourceClone = unassigned.find(obj => obj.date === sourceId);
                let destUserId = destination.droppableId.substring(0, destination.droppableId.indexOf(' '));
                let destUserClone = assigned.find(obj => obj.id === destUserId);
                let destId = destination.droppableId.substring(destination.droppableId.indexOf(' ') + 1);
                let destClone = destUserClone.shiftDays.find(obj => obj.date === destId);
                
                let [removed] = sourceClone.shifts.splice(source.index, 1);
                destClone.shifts.splice(destination.index, 0, removed);
            }
            //if employee shifts are moved from and to employee shifts
            else if (source.droppableId.indexOf('unassigned') === -1 && destination.droppableId.indexOf('unassigned') === -1) {
                let sourceUserId = source.droppableId.substring(0, source.droppableId.indexOf(' '));
                let sourceUserClone = assigned.find(obj => obj.id === sourceUserId);
                let sourceId = source.droppableId.substring(source.droppableId.indexOf(' ') + 1);
                let sourceClone = sourceUserClone.shiftDays.find(obj => obj.date === sourceId);
                let destUserId = destination.droppableId.substring(0, destination.droppableId.indexOf(' '));
                let destUserClone = assigned.find(obj => obj.id === destUserId);
                let destId = destination.droppableId.substring(destination.droppableId.indexOf(' ') + 1);
                let destClone = destUserClone.shiftDays.find(obj => obj.date === destId);
                
                let [removed] = sourceClone.shifts.splice(source.index, 1);
                destClone.shifts.splice(destination.index, 0, removed);
            }
        }
    };

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
                <Table className='head-table mb-0' bordered responsive>
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
                </Table>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className='unassigned-wrap custom-scrollbar'>
                        <Table className='mb-0' bordered responsive>
                            <tbody>
                                <tr>
                                    <td>Unassigned Shifts</td>
                                    {
                                        unassigned.map((shiftDay) => {
                                            return(
                                                <Droppable key={shiftDay.id} droppableId={'unassigned '+shiftDay.date}>
                                                    {(provided, snapshot) => (
                                                        <td 
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                            className={`${snapshot.isDraggingOver ? 'dragging-over ' : undefined}
                                                            ${shiftDay.date === today ? 'current-day' : undefined}`}
                                                        >
                                                            {
                                                                shiftDay.shifts?.map((shift, index) => {
                                                                    return(
                                                                        <Draggable 
                                                                            key={shift.id} 
                                                                            draggableId={shift.id} 
                                                                            index={index}
                                                                        >
                                                                            {(provided) => (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.dragHandleProps}
                                                                                    {...provided.draggableProps}
                                                                                >
                                                                                    <EmployeeShift data={shift} />
                                                                                </div>
                                                                            )}
                                                                        </Draggable>
                                                                    )
                                                                })
                                                            }
                                                            {provided.placeholder}
                                                        </td>
                                                    )}
                                                </Droppable>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='assigned-wrap custom-scrollbar'>
                        <Table className='mb-0' bordered responsive>
                            <tbody>
                                {
                                    assigned.map((employee) => {
                                        return(
                                            <tr key={employee.id}>
                                                <td>
                                                    <Avatar image={employee.image} />
                                                    <p className='name mb-0'>{employee.name}</p>
                                                    <p className='hours mb-0'>{employee.shiftsHours} hours</p>
                                                </td>
                                                {
                                                    employee.shiftDays.map((shiftDay) => {
                                                        return(
                                                            <Droppable key={shiftDay.id} droppableId={employee.id+' '+shiftDay.date}>
                                                                {(provided, snapshot) => (
                                                                    <td 
                                                                        {...provided.droppableProps}
                                                                        ref={provided.innerRef}
                                                                        className={`${snapshot.isDraggingOver ? 'dragging-over ' : undefined}
                                                                        ${shiftDay.date === today ? 'current-day' : undefined}`}
                                                                    >
                                                                        {
                                                                            shiftDay.shifts?.map((shift, index) => {
                                                                                return(
                                                                                    <Draggable 
                                                                                        key={shift.id} 
                                                                                        draggableId={shift.id} 
                                                                                        index={index}
                                                                                    >
                                                                                        {(provided) => (
                                                                                            <div
                                                                                                ref={provided.innerRef}
                                                                                                {...provided.dragHandleProps}
                                                                                                {...provided.draggableProps}
                                                                                            >
                                                                                                <EmployeeShift data={shift} />
                                                                                            </div>
                                                                                        )}
                                                                                    </Draggable>
                                                                                )
                                                                            })
                                                                        }
                                                                        {provided.placeholder}
                                                                    </td>
                                                                )}
                                                            </Droppable>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </DragDropContext>
            </div>
        </div>
    )
}