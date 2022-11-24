import React from 'react'
import { Route } from 'react-router-dom';
import { ForgotPassword, Login, ResetPassword, Dashboard, Schedule, ViewCalendar, Profile, Settings, 
    Users, CreateUser, UserRoles, GroupPermissions, AbsenceReports, Departments, CreateDepartment, EditDepartment,
    Locations, ViewLocation, EditLocation, CreateLocation, Documents, CreateDocument, Absence, CreateAbsence } from './Pages';

export function getRoutes() {
    const routes = [
        {
            path: '/login',
            component: <Login />
        },
        {
            path: '/forgot-password',
            component: <ForgotPassword />
        },
        {
            path: '/reset-password',
            component: <ResetPassword />
        },
        {
            path: '/dashboard',
            component: <Dashboard />
        },
        {
            path: '/schedule',
            component: <Schedule />
        },
        {
            path: '/schedule/view-calendar',
            component: <ViewCalendar />
        },
        {
            path: '/profile',
            component: <Profile />
        },
        {
            path: '/settings',
            component: <Settings />
        },
        {
            path: '/users',
            component: <Users />
        },
        {
            path: '/users/create',
            component: <CreateUser />
        },
        {
            path: '/users/roles',
            component: <UserRoles />
        },
        {
            path: '/users/roles/permissions',
            component: <GroupPermissions />
        },
        {
            path: '/reports',
            component: <AbsenceReports />
        },
        {
            path: '/departments',
            component: <Departments />
        },
        {
            path: '/departments/create',
            component: <CreateDepartment />
        },
        {
            path: '/departments/edit',
            component: <EditDepartment />
        },
        {
            path: '/locations',
            component: <Locations />
        },
        {
            path: '/locations/detail',
            component: <ViewLocation />
        },
        {
            path: '/locations/edit',
            component: <EditLocation />
        },
        {
            path: '/locations/create',
            component: <CreateLocation />
        },
        {
            path: '/documents',
            component: <Documents />
        },
        {
            path: '/documents/create',
            component: <CreateDocument />
        },
        {
            path: '/absence',
            component: <Absence />
        },
        {
            path: '/absence/create',
            component: <CreateAbsence />
        }
    ];

    var appRoutes = routes.map((route, index) => {
        return (
            <Route key={index} exact path={route.path} element={route.component} />
        )
    });

    return (
        <>
            {appRoutes}
        </>    
    )
}
