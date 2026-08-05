import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'

const CommonLayout = () => {
    return (
        <>
            
                <div className=''>Navbar</div>
                <Outlet />
                <div>Footer</div>
            
        </>

    )
}

export default CommonLayout
