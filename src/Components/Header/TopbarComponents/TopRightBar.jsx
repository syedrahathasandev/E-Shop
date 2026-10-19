import React from 'react'

const TopRightBar = () => {
  return (
    <div>
      <div className='flex justify-end items-center  gap-[49px]'>
        <div>USD</div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25%] after:top-[50%] after:-translate-y-1/2 '>Country Flag</div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25%] after:top-[50%] after:-translate-y-1/2 '>Social Media</div>
      </div>
    </div>
  )
}

export default TopRightBar
