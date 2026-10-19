import React from 'react'
import Container from '../Commonlayouts/Container'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import TopLeftBar from './TopbarComponents/TopLeftBar';
import TopRightBar from './TopbarComponents/TopRightBar';


const TopBar = () => {
    return (
        <div className='border-b border-[#BFBFBF] border-solid py-[22px] '>
            <Container>
                <div className='flex justify-between items-center font-["Montserrat"] font-normal text-sm'>
                    <TopLeftBar />
                     <TopRightBar />
                </div>
            </Container>
        </div>
    )
}


export default TopBar;