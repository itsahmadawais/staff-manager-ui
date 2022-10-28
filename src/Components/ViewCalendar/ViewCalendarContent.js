import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Table } from 'react-bootstrap';
import { BiChevronLeft, BiChevronRight, BiPlus } from 'react-icons/bi';
import EmployeeShift from './EmployeeShift';
import { Avatar, Loader } from '../UI';
import moment from 'moment';
import CreateShiftModal from './CreateShiftModal';

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
                    subsite: '',
                    siteAssets: [
                        {
                            id: '101',
                            name: 'Nottingham CCEP Set',
                            type: 'key',
                            currentLoc: 'BLACK TERMINATED FORD RANGER FD18 UAS (Vehicle)',
                            handBackLoc: ''
                        }
                    ],
                    quantity: '1',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [
                        {
                            id: '80',
                            name: 'Alam Zaidi'
                        },
                        {
                            id: '81',
                            name: 'Daniel Smith'
                        }
                    ],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [
                        {
                            id: '82',
                            firstName: 'Ruth',
                            lastName: 'Hunt',
                            email: 'ruthhunt@example.com',
                            shiftCount: '198',
                            smallestDistance: '30.8'
                        },
                        {
                            id: '83',
                            firstName: 'Micheal',
                            lastName: 'Glover',
                            email: 'micheal_glover@example.com',
                            shiftCount: '198',
                            smallestDistance: '30.8'
                        },
                        {
                            id: '84',
                            firstName: 'Alam',
                            lastName: 'Zaib',
                            email: 'alamzaib@example.com',
                            shiftCount: '198',
                            smallestDistance: '30.8'
                        },
                        {
                            id: '85',
                            firstName: 'Ruth',
                            lastName: 'Hunt',
                            email: 'ruthhunt@example.com',
                            shiftCount: '198',
                            smallestDistance: '30.8'
                        }
                    ],
                    cancelled: false,
                    published: false
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
                    subsite: '',
                    siteAssets: [],
                    quantity: '1',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [
                        {
                            id: '86',
                            name: 'Alam Zaidi'
                        },
                        {
                            id: '87',
                            name: 'Daniel Smith'
                        }
                    ],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [],
                    cancelled: false,
                    published: false
                },
                {
                    id: '12',
                    client: 'Coca Cola European Partner',
                    site: 'CCEP Uxbridge',
                    subsite: '',
                    siteAssets: [],
                    quantity: '1',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '07:00',
                    endTime: '19:00',
                    status: 'Awaiting',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [
                        {
                            id: '88',
                            name: 'Alam Zaidi'
                        },
                        {
                            id: '89',
                            name: 'Daniel Smith'
                        }
                    ],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [],
                    cancelled: false,
                    published: false
                },
                {
                    id: '13',
                    client: 'Profile Security Services Limited',
                    site: 'KGV - Cruise',
                    subsite: '',
                    siteAssets: [],
                    quantity: '1',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '07:00',
                    endTime: '19:00',
                    status: 'Failed to Confirm',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [
                        {
                            id: '90',
                            name: 'Alam Zaidi'
                        },
                        {
                            id: '91',
                            name: 'Daniel Smith'
                        }
                    ],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [],
                    cancelled: false,
                    published: false
                },
                {
                    id: '14',
                    client: 'Profile Security Services Limited',
                    site: 'Hydrasun Gateway Business Park',
                    subsite: '',
                    siteAssets: [],
                    quantity: '1',
                    startDate: '13-10-2022',
                    endDate: '14-10-2022',
                    startTime: '07:00',
                    endTime: '19:00',
                    status: 'Declined',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [
                        {
                            id: '92',
                            name: 'Alam Zaidi'
                        },
                        {
                            id: '93',
                            name: 'Daniel Smith'
                        }
                    ],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [],
                    cancelled: false,
                    published: false
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
                    subsite: '',
                    siteAssets: [],
                    quantity: '1',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Confirmed',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [],
                    cancelled: false,
                    published: false
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
                    subsite: '',
                    siteAssets: [],
                    quantity: '1',
                    startDate: '12-10-2022',
                    endDate: '13-10-2022',
                    startTime: '19:00',
                    endTime: '07:00',
                    status: 'Awaiting',
                    position: 'Core Officer',
                    case: 'uxbridge (New) - 00002334',
                    pastEmployees: [],
                    type: 'shift',
                    payRate: '0.00',
                    chargeRate: '0.00',
                    extraRate: '0.00',
                    suggestedEmployees: [],
                    cancelled: false,
                    published: false
                }
            ]
        },
        {
            id: '7',
            date: '16-10-2022',
            shifts: []
        }
    ];

    const employeeShifts = [
        {
            id: '18',
            image: '',
            name: 'Abdullah',
            shiftsHours: '0',
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
            shiftsHours: '72',
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
                            subsite: '',
                            siteAssets: [],
                            quantity: '1',
                            startDate: '12-10-2022',
                            endDate: '12-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                            status: 'Confirmed',
                            position: 'Core Officer',
                            case: 'uxbridge (New) - 00002334',
                            pastEmployees: [
                                {
                                    id: '98',
                                    name: 'Alam Zaidi'
                                },
                                {
                                    id: '99',
                                    name: 'Daniel Smith'
                                }
                            ],
                            type: 'shift',
                            payRate: '0.00',
                            chargeRate: '0.00',
                            extraRate: '0.00',
                            cancelled: false,
                            published: true
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
                            subsite: '',
                            siteAssets: [],
                            quantity: '1',
                            startDate: '13-10-2022',
                            endDate: '13-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                            status: 'Confirmed',
                            position: 'Core Officer',
                            case: 'uxbridge (New) - 00002334',
                            pastEmployees: [],
                            type: 'shift',
                            payRate: '0.00',
                            chargeRate: '0.00',
                            extraRate: '0.00',
                            cancelled: false,
                            published: true
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
                            subsite: '',
                            siteAssets: [],
                            quantity: '1',
                            startDate: '14-10-2022',
                            endDate: '14-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                            status: 'Confirmed',
                            position: 'Core Officer',
                            case: 'uxbridge (New) - 00002334',
                            pastEmployees: [],
                            type: 'shift',
                            payRate: '0.00',
                            chargeRate: '0.00',
                            extraRate: '0.00',
                            cancelled: false,
                            published: true
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
                            subsite: '',
                            siteAssets: [],
                            quantity: '1',
                            startDate: '15-10-2022',
                            endDate: '15-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                            status: 'Confirmed',
                            position: 'Core Officer',
                            case: 'uxbridge (New) - 00002334',
                            pastEmployees: [],
                            type: 'shift',
                            payRate: '0.00',
                            chargeRate: '0.00',
                            extraRate: '0.00',
                            cancelled: false,
                            published: true
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
                            subsite: '',
                            siteAssets: [],
                            quantity: '1',
                            startDate: '16-10-2022',
                            endDate: '16-10-2022',
                            startTime: '19:00',
                            endTime: '07:00',
                            status: 'Confirmed',
                            position: 'Core Officer',
                            case: 'uxbridge (New) - 00002334',
                            pastEmployees: [],
                            type: 'shift',
                            payRate: '0.00',
                            chargeRate: '0.00',
                            extraRate: '0.00',
                            cancelled: false,
                            published: true
                        }
                    ]
                }
            ]
        },
        {
            id: '20',
            image: '/images/user.jpg',
            name: 'Amir Shafique',
            shiftsHours: '0',
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
            shiftsHours: '0',
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
            shiftsHours: '0',
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
            shiftsHours: '0',
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
            shiftsHours: '0',
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
    const [unassigned, setUnassigned] = useState(unassignedShiftDays);
    const [assigned, setAssigned] = useState(employeeShifts);
    const [isLoading, setIsLoading] = useState(true);
    const [createShiftShow, setCreateShiftShow] = useState(false);
    const [createShiftDate, setCreateShiftDate] = useState('');
    const [createShiftEmp, setCreateShiftEmp] = useState('');

    const handleCreateShiftShow = () => setCreateShiftShow(!createShiftShow);

    const handleCreateShiftValues = (date, employee) => {
        setCreateShiftDate(date);
        setCreateShiftEmp(employee);
        handleCreateShiftShow();
    };

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [isLoading]);
    
    
    const handleDragEnd = (result) => {
        const {source, destination} = result;
        if (!destination) {
            return;
        }
        //if employee shifts are moved to unassigned shifts
        if (source.droppableId.indexOf('unassigned') === -1 && destination.droppableId.indexOf('unassigned') !== -1) {
            //window.alert('Cannot move to unassigned shifts');
            let sourceId = source.droppableId.substring(source.droppableId.indexOf(' ') + 1);
            let sourceUserId = source.droppableId.substring(0, source.droppableId.indexOf(' '));
            let sourceUserClone = assigned.find(obj => obj.id === sourceUserId);
            let sourceClone = sourceUserClone.shiftDays.find(obj => obj.date === sourceId);
            let destId = destination.droppableId.substring(destination.droppableId.indexOf(' ') + 1);
            let destClone = unassigned.find(obj => obj.date === destId);
            
            let [removed] = sourceClone.shifts.splice(source.index, 1);
            destClone.shifts.splice(destination.index, 0, removed);

            //manipulate start and end dates
            let newStartDate = destClone.shifts[destination.index].startDate;
            let newEndDate = destClone.shifts[destination.index].endDate;
            let difference = moment(newEndDate, 'DD-MM-YYYY').diff(moment(newStartDate, 'DD-MM-YYYY'), 'days');
            destClone.shifts[destination.index].startDate = destId;
            destClone.shifts[destination.index].endDate = moment(destId, 'DD-MM-YYYY').add(difference, 'days').format('DD-MM-YYYY');

        } else {
            //if unassigned shifts are moved from and to unassigned shifts
            if (source.droppableId.indexOf('unassigned') !== -1 && destination.droppableId.indexOf('unassigned') !== -1) {
                let sourceId = source.droppableId.substring(source.droppableId.indexOf(' ') + 1);
                let sourceClone = unassigned.find(obj => obj.date === sourceId);
                let destId = destination.droppableId.substring(destination.droppableId.indexOf(' ') + 1);
                let destClone = unassigned.find(obj => obj.date === destId);
                
                let [removed] = sourceClone.shifts.splice(source.index, 1);
                destClone.shifts.splice(destination.index, 0, removed);
                
                //manipulate start and end dates
                let newStartDate = destClone.shifts[destination.index].startDate;
                let newEndDate = destClone.shifts[destination.index].endDate;
                let difference = moment(newEndDate, 'DD-MM-YYYY').diff(moment(newStartDate, 'DD-MM-YYYY'), 'days');
                destClone.shifts[destination.index].startDate = destId;
                destClone.shifts[destination.index].endDate = moment(destId, 'DD-MM-YYYY').add(difference, 'days').format('DD-MM-YYYY');
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

                //manipulate start and end dates
                let newStartDate = destClone.shifts[destination.index].startDate;
                let newEndDate = destClone.shifts[destination.index].endDate;
                let difference = moment(newEndDate, 'DD-MM-YYYY').diff(moment(newStartDate, 'DD-MM-YYYY'), 'days');
                destClone.shifts[destination.index].startDate = destId;
                destClone.shifts[destination.index].endDate = moment(destId, 'DD-MM-YYYY').add(difference, 'days').format('DD-MM-YYYY');
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

                //manipulate start and end dates
                let newStartDate = destClone.shifts[destination.index].startDate;
                let newEndDate = destClone.shifts[destination.index].endDate;
                let difference = moment(newEndDate, 'DD-MM-YYYY').diff(moment(newStartDate, 'DD-MM-YYYY'), 'days');
                destClone.shifts[destination.index].startDate = destId;
                destClone.shifts[destination.index].endDate = moment(destId, 'DD-MM-YYYY').add(difference, 'days').format('DD-MM-YYYY');
            }
        }
    };

    const handleShiftEdit = (values, empId, dayIndex, shiftIndex) => {
        //if source is from unassigned shifts list
        if (empId === 'Unassigned') { 
            let unassignedData = [...unassigned];
            let assignedData = [...assigned];
            
            //assign the changed shift values
            changeShiftValues(unassignedData, values, dayIndex, shiftIndex, -1);

            //if no employee is assigned (i.e. destination is also unassigned shifts list)
            if (values.employee === '') {
                let dayDestIndex = unassignedData.findIndex(day => day.date === values.startDate.split("-").reverse().join("-"));
                //if start date is changed
                if (dayIndex !== dayDestIndex) {
                    let tempShift = unassignedData[dayIndex].shifts[shiftIndex];
                    //remove the shift from source
                    unassignedData[dayIndex].shifts.splice(shiftIndex, 1);

                    //add the shift to destination
                    unassignedData[dayDestIndex].shifts.push(tempShift);
                }
                setUnassigned(unassignedData);
            } 
            //if an employee is assigned (i.e. destination is employee shifts list)
            else {
                let empDestIndex = assignedData.findIndex(user => user.id === values.employee);
                let dayDestIndex = assignedData[empDestIndex].shiftDays.findIndex(day => day.date === values.startDate.split("-").reverse().join("-"));

                let tempShift = unassignedData[dayIndex].shifts[shiftIndex];
                //remove the shift from source employee's shifts
                unassignedData[dayIndex].shifts.splice(shiftIndex, 1);

                //add the shift to destination employee's shifts
                assignedData[empDestIndex].shiftDays[dayDestIndex].shifts.push(tempShift);

                setUnassigned(unassignedData);
                setAssigned(assignedData);
            }
        } 
        //if source is from employee shifts list
        else { 
            let unassignedData = [...unassigned];
            let assignedData = [...assigned];

            //if employee is not removed (i.e. destination is employee shifts list)
            if (values.employee !== '') {
                let empIndex = assignedData.findIndex(user => user.id === empId);
                let empDestIndex = assignedData.findIndex(user => user.id === values.employee);
                let dayDestIndex = assignedData[empDestIndex].shiftDays.findIndex(day => day.date === values.startDate.split("-").reverse().join("-"));
                
                //assign the changed shift values
                changeShiftValues(assignedData, values, dayIndex, shiftIndex, empIndex);

                //if empolyee not changed
                if (empIndex === empDestIndex) {
                    //if start date is changed
                    if (dayIndex !== dayDestIndex) {
                        let tempShift = assignedData[empIndex].shiftDays[dayIndex].shifts[shiftIndex];
                        //remove the shift from source employee's shifts
                        assignedData[empIndex].shiftDays[dayIndex].shifts.splice(shiftIndex, 1);

                        //add the shift to destination employee's shifts
                        assignedData[empIndex].shiftDays[dayDestIndex].shifts.push(tempShift);
                    }
                } 
                //if new employee assigned
                else {
                    let tempShift = assignedData[empIndex].shiftDays[dayIndex].shifts[shiftIndex];
                    //remove the shift from source employee's shifts
                    assignedData[empIndex].shiftDays[dayIndex].shifts.splice(shiftIndex, 1);

                    //add the shift to destination employee's shifts
                    assignedData[empDestIndex].shiftDays[dayDestIndex].shifts.push(tempShift);
                }
                setAssigned(assignedData);
            }
            //if employee is removed (i.e. destination is unassigned shifts list)
            else {
                let empIndex = assignedData.findIndex(user => user.id === empId);
                let dayDestIndex = unassignedData.findIndex(day => day.date === values.startDate.split("-").reverse().join("-"));
                
                let tempShift = assignedData[empIndex].shiftDays[dayIndex].shifts[shiftIndex];
                //remove the shift from source employee's shifts
                assignedData[empIndex].shiftDays[dayIndex].shifts.splice(shiftIndex, 1);

                //add the shift to destination unassigned shifts
                unassignedData[dayDestIndex].shifts.push(tempShift);

                setUnassigned(unassignedData);
                setAssigned(assignedData);
            }
        }
    };

    function changeShiftValues(newData, values, dayIndex, shiftIndex, empIndex) {
        //if not unassigned shifts list
        if (empIndex !== -1) { 
            newData[empIndex].shiftDays[dayIndex].shifts[shiftIndex] = {
                ...newData[empIndex].shiftDays[dayIndex].shifts[shiftIndex],
                type: values.type,
                startDate: values.startDate.split("-").reverse().join("-"),
                endDate: values.endDate.split("-").reverse().join("-"),
                startTime: values.startTime,
                endTime: values.endTime,
                client: values.client,
                site: values.site,
                subsite: values.subsite,
                case: values.case,
                position: values.position,
                quantity: values.quantity,
                payRate: values.payRate,
                chargeRate: values.chargeRate,
                extraRate: values.extraRate,
                siteAssets: values.siteAssets
            };
        } 
        //if unassigned shifts list
        else { 
            newData[dayIndex].shifts[shiftIndex] = {
                ...newData[dayIndex].shifts[shiftIndex],
                type: values.type,
                startDate: values.startDate.split("-").reverse().join("-"),
                endDate: values.endDate.split("-").reverse().join("-"),
                startTime: values.startTime,
                endTime: values.endTime,
                client: values.client,
                site: values.site,
                subsite: values.subsite,
                case: values.case,
                position: values.position,
                quantity: values.quantity,
                payRate: values.payRate,
                chargeRate: values.chargeRate,
                extraRate: values.extraRate,
                siteAssets: values.siteAssets
            };
        }
    }

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
                                    return(
                                        <th key={index}>
                                            <div className='d-flex justify-content-between'>
                                                <span>{item.day}, {item.date.substring(0, item.date.indexOf('-'))}</span>
                                                <Button 
                                                    variant='icon' 
                                                    className='px-1 py-0' 
                                                    onClick={() => handleCreateShiftValues(item.date, '')}
                                                >
                                                    <BiPlus size={20} />
                                                </Button>
                                            </div>
                                        </th>
                                    )
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
                                    {
                                        isLoading ? 
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <Loader />
                                            </div>
                                        </td> :
                                        <>
                                            <td>Unassigned Shifts</td>
                                            {
                                                unassigned.map((shiftDay, dayIndex) => {
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
                                                                                            <EmployeeShift 
                                                                                                data={shift} 
                                                                                                employee={''} 
                                                                                                dayIndex={dayIndex}
                                                                                                shiftIndex={index} 
                                                                                                handleShiftEdit={handleShiftEdit} 
                                                                                            />
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
                                        </>
                                    }
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className='assigned-wrap custom-scrollbar'>
                        <Table className='mb-0' bordered responsive>
                            <tbody>
                                {
                                    isLoading ?
                                    <tr>
                                        <td>
                                            <div className='d-flex justify-content-center'>
                                                <Loader />
                                            </div>
                                        </td>
                                    </tr> :
                                    <>
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
                                                            employee.shiftDays.map((shiftDay, dayIndex) => {
                                                                return(
                                                                    <Droppable key={shiftDay.id} droppableId={employee.id+' '+shiftDay.date}>
                                                                        {(provided, snapshot) => (
                                                                            <td 
                                                                                {...provided.droppableProps}
                                                                                ref={provided.innerRef}
                                                                                className={`${snapshot.isDraggingOver ? 'dragging-over ' : undefined}
                                                                                ${shiftDay.date === today ? 'current-day' : undefined}`}
                                                                                onClick={() => handleCreateShiftValues(shiftDay.date, employee)}
                                                                                style={{cursor: 'pointer'}}
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
                                                                                                        <EmployeeShift 
                                                                                                            data={shift} 
                                                                                                            employee={employee} 
                                                                                                            dayIndex={dayIndex}
                                                                                                            shiftIndex={index} 
                                                                                                            handleShiftEdit={handleShiftEdit} 
                                                                                                        />
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
                                    </>
                                }
                            </tbody>
                        </Table>
                    </div>
                </DragDropContext>
            </div>

            {/***** Create Shift Modal *****/}
            <CreateShiftModal 
                date={createShiftDate} 
                employee={createShiftEmp} 
                show={createShiftShow} 
                handleClose={handleCreateShiftShow} 
            />
        </div>
    )
}