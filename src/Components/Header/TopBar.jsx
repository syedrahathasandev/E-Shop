import React from 'react'
import Container from '../Commonlayouts/Container'
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";


const TopBar = () => {
  return (
    <div className="border-b border-[#BFBFBF] border-solid">
      <Container>
        <div className="flex justify-between items-center">
          <div className='flex items-center gap-4 font-["Montserrat"] font-normal text-sm'>
            <Link to="https://maps.app.goo.gl/aVUs29P1iCTwhR2R9" target="_blank" className='flex items-center gap-2'>
              <IoLocationOutline />
              123 Main Street, Anytown USA
            </Link>
            <Link to="tel:0123456789" className='flex items-center gap-2'>
              <FiPhone />
              +1 (555) 123-4567
            </Link>
          </div>

          <div>right</div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar;