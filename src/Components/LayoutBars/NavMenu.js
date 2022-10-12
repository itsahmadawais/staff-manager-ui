import React from 'react';
import { BsGridFill } from "react-icons/bs";
import { FaFileAlt, FaRegBuilding, FaMapMarkerAlt, FaFolderOpen, FaUserFriends, 
    FaUserEdit, FaUserCog, FaCalendarAlt, FaCalendarTimes, FaUserTie, FaCog, FaPowerOff } from "react-icons/fa";
import { Navigate, NavLink } from 'react-router-dom';

export default function NavMenu() {
    const navMenu = [
        {
            id: '1',
            link: '/',
            icon: <BsGridFill size={18} />,
            title: 'Dashboard'
        },
        {
            id: '2',
            link: '/reports',
            icon: <FaFileAlt size={18} />,
            title: 'Reports'
        },
        {
            id: '3',
            link: '/departments',
            icon: <FaRegBuilding size={18} />,
            title: 'Departments'
        },
        {
            id: '4',
            link: '/locations',
            icon: <FaMapMarkerAlt size={18} />,
            title: 'Locations'
        },
        {
            id: '5',
            link: '/documents',
            icon: <FaFolderOpen size={18} />,
            title: 'Documents'
        },
        {
            id: '6',
            link: '/employees',
            icon: <FaUserTie size={18} />,
            title: 'Empolyees'
        },
        {
            id: '7',
            link: '/subcontractors',
            icon: <FaUserEdit size={18} />,
            title: 'Subcontractors'
        },
        {
            id: '8',
            link: '/clients',
            icon: <FaUserCog size={18} />,
            title: 'Clients'
        },
        {
            id: '9',
            link: '/schedule',
            icon: <FaCalendarAlt size={18} />,
            title: 'Schedule'
        },
        {
            id: '10',
            link: '/absence',
            icon: <FaCalendarTimes size={18} />,
            title: 'Absence'
        },
        {
            id: '11',
            link: '/users',
            icon: <FaUserFriends size={18} />,
            title: 'Users'
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

    const handleLogout = () => Navigate('/login');

    return (
        <>
            {
                navMenu.map((navitem)=>{
                    if(navitem.onClick!==undefined){
                        return(
                            <div
                                key={navitem.id} 
                                className='menu-item corner-radius py-2 px-3 my-1 d-flex justify-content-between align-items-center' 
                                onClick={()=>navitem.onClick()}
                            >
                                <div>{navitem.icon} {navitem.title}</div>
                            </div>
                        )
                    } else{
                        return(
                            <NavLink 
                                key={navitem.id} 
                                to={navitem.link} 
                                className='menu-item corner-radius py-2 px-3 my-1 d-flex justify-content-between align-items-center'
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
