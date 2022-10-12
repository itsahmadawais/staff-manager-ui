import React from 'react'
import { Route } from 'react-router-dom';
import { ForgotPassword, Login, ResetPassword, Dashboard } from './Pages';

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