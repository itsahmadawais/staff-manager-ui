import React from 'react';
import { Accordion } from 'react-bootstrap';
import { BsGridFill } from "react-icons/bs";
import { FaFileAlt, FaBuilding, FaMapMarkerAlt, FaFolderOpen, FaUserFriends, 
    FaUserEdit, FaUserCog, FaCalendarAlt, FaCalendarTimes, FaUserTie, FaCog, FaPowerOff, FaCircle } from "react-icons/fa";
import { useNavigate, NavLink, useLocation } from 'react-router-dom';

export default function NavMenu() {
    const navMenu = [
        {
            id: '1',
            link: '/dashboard',
            icon: <BsGridFill size={18} />,
            title: 'Dashboard'
        },
        {
            id: '2',
            icon: <FaFileAlt size={18} />,
            title: 'Reports',
            submenu: [
                {
                    id: '1',
                    link: '/reports',
                    icon: <FaCircle size={14} />,
                    title: 'Absence Reports'
                }
            ]
        },
        {
            id: '3',
            icon: <FaBuilding size={18} />,
            title: 'Departments',
            submenu: [
                {
                    id: '1',
                    link: '/departments',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/departments/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                }
            ]
        },
        {
            id: '4',
            icon: <FaMapMarkerAlt size={18} />,
            title: 'Locations',
            submenu: [
                {
                    id: '1',
                    link: '/locations',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/locations/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                }
            ]
        },
        {
            id: '5',
            icon: <FaFolderOpen size={18} />,
            title: 'Documents',
            submenu: [
                {
                    id: '1',
                    link: '/documents',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/documents/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                }
            ]
        },
        {
            id: '6',
            icon: <FaUserTie size={18} />,
            title: 'Empolyees',
            submenu: [
                {
                    id: '1',
                    link: '/employees',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/employees/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                }
            ]
        },
        {
            id: '7',
            icon: <FaUserEdit size={18} />,
            title: 'Subcontractors',
            submenu: [
                {
                    id: '1',
                    link: '/subcontractors',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/subcontractors/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                }
            ]
        },
        {
            id: '8',
            icon: <FaUserCog size={18} />,
            title: 'Clients',
            submenu: [
                {
                    id: '1',
                    link: '/clients',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/clients/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                }
            ]
        },
        {
            id: '9',
            icon: <FaCalendarAlt size={18} />,
            title: 'Schedule',
            submenu: [
                {
                    id: '1',
                    link: '/view-calendar',
                    icon: <FaCircle size={14} />,
                    title: 'View Calendar'
                }
            ]
        },
        {
            id: '10',
            icon: <FaCalendarTimes size={18} />,
            title: 'Absence',
            submenu: [
                {
                    id: '1',
                    link: '/absence',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/absence/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                },
                {
                    id: '3',
                    link: '/allowances',
                    icon: <FaCircle size={14} />,
                    title: 'Manage Allowances'
                }
            ]
        },
        {
            id: '11',
            icon: <FaUserFriends size={18} />,
            title: 'Users',
            submenu: [
                {
                    id: '1',
                    link: '/users',
                    icon: <FaCircle size={14} />,
                    title: 'View All'
                },
                {
                    id: '2',
                    link: '/users/create',
                    icon: <FaCircle size={14} />,
                    title: 'Add New'
                },
                {
                    id: '3',
                    link: '/users/roles',
                    icon: <FaCircle size={14} />,
                    title: 'Role Permissions'
                }
            ]
        },
        {
            id: '12',
            link: '/settings',
            icon: <FaCog size={18} />,
            title: 'Settings'
        },
        {
            id: '13',
            link: '/logout',
            icon: <FaPowerOff size={18} />,
            title: 'Logout',
            onClick: () => handleLogout()
        }
    ];

    const navigate = useNavigate();
    const currLocation = useLocation();
    const handleLogout = () => navigate('/login');

    return (
        <>
            {
                navMenu.map((navitem)=>{
                    if(navitem.onClick!==undefined){
                        return(
                            <div
                                key={navitem.id} 
                                className='menu-item corner-radius py-2 px-3 my-2 d-flex justify-content-between align-items-center' 
                                onClick={()=>navitem.onClick()}
                                style={{cursor: 'pointer'}}
                            >
                                <div>{navitem.icon} {navitem.title}</div>
                            </div>
                        )
                    } else if(navitem.submenu!==undefined){
                        return(
                            <Accordion key={navitem.id}>
                                <Accordion.Button className={`py-2 px-3 ${currLocation.pathname.includes(navitem.submenu[0].link) ? 'active' : null}`}>
                                    {navitem.icon} {navitem.title}
                                    {console.log(navitem.submenu[0].link)}
                                </Accordion.Button>
                                <Accordion.Body className='p-0'>
                                    {
                                        navitem.submenu.map((subitem) => {
                                            return(
                                                <NavLink 
                                                    key={subitem.id} 
                                                    to={subitem.link} 
                                                    className='menu-item corner-radius py-2 px-3 my-2 d-flex justify-content-between align-items-center'
                                                    end
                                                >
                                                    <div>{subitem.icon} {subitem.title}</div>
                                                </NavLink>
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion>
                        )
                    } else {
                        return(
                            <NavLink 
                                key={navitem.id} 
                                to={navitem.link} 
                                className='menu-item corner-radius py-2 px-3 my-2 d-flex justify-content-between align-items-center'
                            >
                                <div>{navitem.icon} {navitem.title}</div>
                            </NavLink>
                        )
                    }
                })
            }
        </>
    )
}
