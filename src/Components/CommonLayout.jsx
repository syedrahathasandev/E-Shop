import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'

const CommonLayout = () => {
    return (
        <>
            <Container>
                <div className=''>Navbar</div>
                <Outlet />
                <div>Footer</div>
            </Container>
        </>

    )
}

export default CommonLayout
