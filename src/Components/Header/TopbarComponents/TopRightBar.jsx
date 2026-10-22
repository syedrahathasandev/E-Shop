import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";


const TopRightBar = () => {

  const [selectedCountry, setSelectedCountry] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const countries = [
    { name: 'United States', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' },
    { name: 'Canada', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png' },
    { name: 'United Kingdom', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
    { name: 'Australia', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' },
    { name: 'Germany', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
    { name: 'France', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
  ]

   const handleSelect = (country) => {
        setSelectedCountry(country)
        setIsOpen(false)
   }

  return (
    <div>
      <div className='flex justify-end items-center  gap-[49px]'>
        <div>USD</div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25%] after:top-[50%] after:-translate-y-1/2 '>
          {/* <img src='https://flagcdn.com/16x12/us.png'/> */}
          <select
            name="country"
            className='w-[150px] hidden'
            value={selectedCountry?.value || ''}
            onChange={(e) => {
              const country = countries.find((c) => c.value === e.target.value)
              setSelectedCountry(country)
            }}
          >
            {countries.map((country, index) => (
              <option value={country.value}>{country.name}</option>


            ))}
          </select>

          {/* coustom dropdown */}
          <div 
          className='w-[150px] border  p-2  coursor-pointer flex items-center'
          onClick={() => setIsOpen(!isOpen)}
          >
            {selectedCountry ?

              <>
                <img src={selectedCountry?.flag} alt={selectedCountry?.name} className='w-5 h-4 mr-2' />
                <span>{selectedCountry?.value}</span>
                <FaAngleDown />

              </>

              :
              <span>Select a Country<FaAngleDown />
</span>
            }
          </div>

          {/* Option List */}
          {isOpen && (
            <ul className='absolute w-full border border-gray-300 bg-white shadow-lg z-10'>
              {countries.map((country, index) => (

                <li 
                key={country.value}
                className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'
                onClick={()=> handleSelect(country)}
                
                >

                  <img src={country?.flag} alt={country?.name} className='w-5 h-4 mr-2' />
                  {country.value}

                </li>
              ))}
            </ul>
          )}

        </div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25%] after:top-[50%] after:-translate-y-1/2 '>Social Media</div>
      </div>
    </div>
  )
}

export default TopRightBar
