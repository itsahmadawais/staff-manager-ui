import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { ForgotPassword, Login, ResetPassword, Dashboard, Schedule, ViewCalendar, Profile, Settings,
    Users, CreateUser, UserRoles, GroupPermissions, AbsenceReports, Departments, CreateDepartment, EditDepartment,
    Locations, ViewLocation, EditLocation, CreateLocation, Documents, CreateDocument, Absence, CreateAbsence,
    Allowances, Employees, ViewEmployee, CreateEmployee, EditEmployee, Subcontractors, CreateSubcontractor,
    ViewSubcontractor, EditSubcontractor, Clients, ViewClient, EditClient, CreateClient } from './Pages';
import { components } from 'react-select';

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
            path: '/',
            component: <Dashboard />
        },
        {
            path: '/dashboard',
            component: <Dashboard />
        },
        {
            path: '/view-calendar',
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
            path: '/users/roles/:id/permissions',
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
            path: '/departments/:id/edit',
            component: <EditDepartment />
        },
        {
            path: '/locations',
            component: <Locations />
        },
        {
            path: '/locations/:id/detail',
            component: <ViewLocation />
        },
        {
            path: '/locations/:id/edit',
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
        },
        {
            path: '/allowances',
            component: <Allowances />
        },
        {
            path: '/employees',
            component: <Employees />
        },
        {
            path: '/employees/:id/detail',
            component: <ViewEmployee />
        },
        {
            path: '/employees/create',
            component: <CreateEmployee />
        },
        {
            path: '/employees/:id/edit',
            component: <EditEmployee />
        },
        {
            path: '/subcontractors',
            component: <Subcontractors />
        },
        {
            path: '/subcontractors/create',
            component: <CreateSubcontractor />
        },
        {
            path: '/subcontractors/:id/detail',
            component: <ViewSubcontractor />
        },
        {
            path: '/subcontractors/:id/edit',
            component: <EditSubcontractor />
        },
        {
            path: '/clients',
            component: <Clients />
        },
        {
            path: '/clients/:id/detail',
            component: <ViewClient />
        },
        {
            path: '/clients/:id/edit',
            component: <EditClient />
        },
        {
            path: '/clients/create',
            component: <CreateClient />
        },{
            path: '*',
            component: <Navigate to="dashboard"/>
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
