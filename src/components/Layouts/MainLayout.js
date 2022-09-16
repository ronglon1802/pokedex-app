import React from 'react'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='main'>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout