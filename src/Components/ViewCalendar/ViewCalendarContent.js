import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Form, Table } from 'react-bootstrap';
import { BiChevronLeft, BiChevronRight, BiFilterAlt, BiPlus } from 'react-icons/bi';
import EmployeeShift from './EmployeeShift';
import { Avatar, Loader, SearchFilter } from '../UI';
import moment from 'moment';
import CreateShiftModal from './CreateShiftModal';
import { v4 as uuid } from 'uuid';
import Select from 'react-select';

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
                            firstName: 'Aalam',
                            lastName: 'Zaidi'
                        },
                        {
                            id: '81',
                            firstName: 'Daniel',
                            lastName: 'Smith'
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
                            firstName: 'Aalam',
                            lastName: 'Zaidi'
                        },
                        {
                            id: '87',
                            firstName: 'Daniel',
                            lastName: 'Smith'
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
                            firstName: 'Aalam',
                            lastName: 'Zaidi'
                        },
                        {
                            id: '89',
                            firstName: 'Daniel',
                            lastName: 'Smith'
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
                            firstName: 'Aalam',
                            lastName: 'Zaidi'
                        },
                        {
                            id: '91',
                            firstName: 'Daniel',
                            lastName: 'Smith'
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
                            firstName: 'Aalam',
                            lastName: 'Zaidi'
                        },
                        {
                            id: '93',
                            firstName: 'Daniel',
                            lastName: 'Smith'
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
            firstName: 'Abdullah',
            lastName: '',
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
            firstName: 'Aalam',
            lastName: 'Zaib',
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
                                    firstName: 'Alam',
                                    lastName: 'Zaidi'
                                },
                                {
                                    id: '99',
                                    firstName: 'Daniel',
                                    lastName: 'Smith'
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
            firstName: 'Amir',
            lastName: 'Shafique',
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
            firstName: 'Amir',
            lastName: 'Shafique',
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
            firstName: 'Amir',
            lastName: 'Shafique',
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
            firstName: 'Amir',
            lastName: 'Shafique',
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
            firstName: 'Amir',
            lastName: 'Shafique',
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

    const sitesOpts = [
        { value: 'CCEP Uxbridge', label: 'CCEP Uxbridge' },
        { value: 'KGV - Cruise', label: 'KGV - Cruise' },
        { value: 'Hydrasun Gateway Business Park', label: 'Hydrasun Gateway Business Park' }
    ];

    const positionsOpts = [
        { value: 'Core Officer', label: 'Core Officer' }
    ];

    const statusOpts = [
        { value: 'all', label: 'All' },
        { value: 'published', label: 'Published' },
        { value: 'unpublished', label: 'Unpublished' }
    ];

    const sortOpts = [
        { value: 'name-asc', label: 'Name-Ascending' },
        { value: 'name-desc', label: 'Name-Descending' },
        { value: 'hours-asc', label: 'Hours-Ascending' },
        { value: 'hours-desc', label: 'Hours-Descending' },
    ];

    const [empFilterSort, setEmpFilterSort] = useState('name-asc');

    const today = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');
    const [unassigned, setUnassigned] = useState(unassignedShiftDays);
    const [assigned, setAssigned] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [createShiftShow, setCreateShiftShow] = useState(false);
    const [createShiftDate, setCreateShiftDate] = useState('');
    const [createShiftEmp, setCreateShiftEmp] = useState('');
    const [recordsToShow, setRecordsToShow] = useState(2);
    const [showFilters, setShowFilters] = useState(false);
    const [shiftFilterSite, setShiftFilterSite] = useState([]);
    const [shiftFilterPosition, setShiftFilterPosition] = useState([]);
    const [shiftFilterStatus, setShiftFilterStatus] = useState('all');
    const [empFilterFname, setEmpFilterFname] = useState('');
    const [empFilterLname, setEmpFilterLname] = useState('');
    const [empFilterSite, setEmpFilterSite] = useState([]);
    const [empFilterPosition, setEmpFilterPosition] = useState([]);

    const handleCreateShiftShow = () => setCreateShiftShow(!createShiftShow);

    const handleCreateShiftValues = (e, date, employee) => {
        if (e.target == e.currentTarget) {
            e.stopPropagation();
            setCreateShiftDate(date);
            setCreateShiftEmp(employee);
            handleCreateShiftShow();
        }
    };

    const showMoreRecords = () => setRecordsToShow(recordsToShow + 2);
    const showLessRecords = () => setRecordsToShow(recordsToShow - 2);

    const handleShowFilters = () => setShowFilters(!showFilters);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [isLoading]);

    useEffect(() => {
        if (empFilterSort === 'name-asc') {
            setAssigned([...employeeShifts].sort((a, b) => a.firstName > b.firstName ? 1 : -1));
        }
        else if (empFilterSort === 'name-desc') {
            setAssigned([...employeeShifts].sort((a, b) => a.firstName > b.firstName ? -1 : 1));
        }
        else if (empFilterSort === 'hours-asc') {
            setAssigned([...employeeShifts].sort((a, b) => a.shiftsHours - b.shiftsHours));
        }
        else if (empFilterSort === 'hours-desc') {
            setAssigned([...employeeShifts].sort((a, b) => b.shiftsHours - a.shiftsHours));
        }
    }, [empFilterSort]);
    
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
    };

    const handleShiftCreation = (values) => {
        if (values.employee === '') {
            let newData = [...unassigned];
            let dayIndex = newData.findIndex(obj => obj.date === values.startDate.split("-").reverse().join("-"));
            for (let i = 0; i < values.quantity; i++) {
                let newShift = {
                    id: uuid().slice(0,3),
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
                    siteAssets: values.siteAssets,
                    pastEmployees: [],
                    cancelled: false,
                    published: false,
                    status: 'Awaiting'
                }
                newData[dayIndex].shifts.push(newShift);
            }
            setUnassigned(newData);
        } else {
            let newData = [...assigned];
            let empIndex = newData.findIndex(obj => obj.id === values.employee);
            let dayIndex = newData[empIndex].shiftDays.findIndex(obj => obj.date === values.startDate.split("-").reverse().join("-"));
            for (let i = 0; i < values.quantity; i++) {
                let newShift = {
                    id: uuid().slice(0,3),
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
                    siteAssets: values.siteAssets,
                    pastEmployees: [],
                    cancelled: false,
                    published: false,
                    status: "Awaiting"
                }
                newData[empIndex].shiftDays[dayIndex].shifts.push(newShift);
            }
            setAssigned(newData);
        }
    };

    return (
        <div className={'view-calendar'+ (showFilters ? ' filter-active' : '')}>
            <div className='calendar-head d-flex align-items-center justify-content-between'>
                <div className='current-week d-flex align-items-center'>
                    <Button variant='icon' className={'filters-toggler px-2 py-2'+ (showFilters ? ' active' : '')} onClick={handleShowFilters}>
                        <BiFilterAlt size={20} />
                    </Button>
                    <div className='dates ms-3 me-3'>
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
            {
                showFilters &&
                <div className='filters p-3 mt-2'>
                    <div className='row g-0 mb-3'>
                        <div className='col-md-1'>
                            <p className='mb-0'>Shift Filters</p>
                        </div>
                        <div className='col-md-4 pe-3'>
                            <Select
                                name='shift-filter-site'
                                options={sitesOpts}
                                isSearchable={true}
                                isClearable={true}
                                isMulti={true}
                                placeholder='Site'
                                onChange={(opt) => setShiftFilterSite(opt)}
                            />
                        </div>
                        <div className='col-md-4 pe-3'>
                            <Select
                                name='shift-filter-position'
                                options={positionsOpts}
                                isSearchable={true}
                                isClearable={true}
                                isMulti={true}
                                placeholder='Position'
                                onChange={(opt) => setShiftFilterPosition(opt)}
                            />
                        </div>
                        <div className='col-md-3'>
                            <Select
                                name='shift-filter-status'
                                options={statusOpts}
                                isSearchable={false}
                                isClearable={false}
                                defaultValue={statusOpts[0]}
                                onChange={(opt) => setShiftFilterStatus(opt.value)}
                            />
                        </div>
                    </div>
                    <div className='row g-0'>
                        <div className='col-md-1'>
                            <p className='mb-0'>Employee Filters</p>
                        </div>
                        <div className='col-md-2 pe-3'>
                            <SearchFilter
                                placeholder='Search First Name'
                                handleSearch={setEmpFilterFname}
                            />
                        </div>
                        <div className='col-md-2 pe-3'>
                            <SearchFilter
                                placeholder='Search Employee Last Name'
                                handleSearch={setEmpFilterLname}
                            />
                        </div>
                        <div className='col-md-2 pe-3'>
                            <Select
                                name='employee-filter-site'
                                options={sitesOpts}
                                isSearchable={true}
                                isClearable={true}
                                isMulti={true}
                                placeholder='Site'
                                onChange={(opt) => setEmpFilterSite(opt)}
                            />
                        </div>
                        <div className='col-md-2 pe-3'>
                            <Select
                                name='employee-filter-position'
                                options={positionsOpts}
                                isSearchable={true}
                                isClearable={true}
                                isMulti={true}
                                placeholder='Position'
                                onChange={(opt) => setEmpFilterPosition(opt)}
                            />
                        </div>
                        <div className='col-md-3'>
                            <Select
                                name='employee-filter-sort'
                                options={sortOpts}
                                isSearchable={false}
                                isClearable={false}
                                defaultValue={sortOpts[0]}
                                onChange={(opt) => setEmpFilterSort(opt.value)}
                            />
                        </div>
                    </div>
                </div>
            }
            <div className='calendar-body mt-3'>
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
                                                >
                                                    <BiPlus size={20} onClick={(e) => handleCreateShiftValues(e, item.date, '')} />
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
                                                                        shiftDay.shifts?.filter((item) => {
                                                                            if(shiftFilterSite.length === 0) {
                                                                                return item;
                                                                            } else if (shiftFilterSite.filter(opt => opt.value === item.site).length > 0) {
                                                                                return item;
                                                                            }
                                                                        }).filter((item) => {
                                                                            if(shiftFilterPosition.length === 0) {
                                                                                return item;
                                                                            } else if (shiftFilterPosition.filter(opt => opt.value === item.position).length > 0) {
                                                                                return item;
                                                                            }
                                                                        }).filter((item) => {
                                                                            if(shiftFilterStatus === 'all') {
                                                                                return item;
                                                                            } else if (shiftFilterStatus === 'published' && item.published) {
                                                                                return item;
                                                                            } else if (shiftFilterStatus === 'unpublished' && !item.published) {
                                                                                return item;
                                                                            }
                                                                        }).map((shift, index) => {
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
                                            assigned.slice(0, recordsToShow).filter((item) => {
                                                if(empFilterFname === '') {
                                                    return item;
                                                } else if (item.firstName.toLowerCase().includes(empFilterFname.toLocaleLowerCase())) {
                                                    return item;
                                                }
                                            }).filter((item) => {
                                                if(empFilterLname === '') {
                                                    return item;
                                                } else if (item.lastName.toLowerCase().includes(empFilterLname.toLocaleLowerCase())) {
                                                    return item;
                                                }
                                            }).map((employee) => {
                                                return(
                                                    <tr key={employee.id}>
                                                        <td>
                                                            <Avatar image={employee.image} />
                                                            <p className='name mb-0'>{employee.firstName+' '+employee.lastName}</p>
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
                                                                                onClick={(e) => handleCreateShiftValues(e, shiftDay.date, employee)}
                                                                            >
                                                                                {
                                                                                    shiftDay.shifts?.filter((item) => {
                                                                                        if(empFilterSite.length === 0) {
                                                                                            return item;
                                                                                        } else if (empFilterSite.filter(opt => opt.value === item.site).length > 0) {
                                                                                            return item;
                                                                                        }
                                                                                    }).filter((item) => {
                                                                                        if(empFilterPosition.length === 0) {
                                                                                            return item;
                                                                                        } else if (empFilterPosition.filter(opt => opt.value === item.position).length > 0) {
                                                                                            return item;
                                                                                        }
                                                                                    }).map((shift, index) => {
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
                        <div className='records-paginate-wrap'>
                            <p className='text-center mt-3 mb-2'>Showing {recordsToShow} of {assigned.length}</p>
                            <div className='d-flex justify-content-center'>
                                {
                                    recordsToShow > 2 &&
                                    <Button variant='primary' className='mb-3 me-2' onClick={showLessRecords}>Show Less</Button>
                                }
                                {
                                    (assigned.length > 2 && !(recordsToShow >= assigned.length)) &&
                                    <Button variant='primary' className='mb-3' onClick={showMoreRecords}>Show More</Button>
                                }
                            </div>
                        </div>
                    </div>
                </DragDropContext>
            </div>

            {/***** Create Shift Modal *****/}
            <CreateShiftModal 
                date={createShiftDate} 
                employee={createShiftEmp} 
                show={createShiftShow} 
                handleClose={handleCreateShiftShow} 
                handleShiftCreation={handleShiftCreation}
            />
        </div>
    )
}