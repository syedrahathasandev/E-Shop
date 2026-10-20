import React from 'react'

const TopRightBar = () => {

        const [selectedCountrey, setSelectedCountry] = React.useState(nul)


  const countries =[
    {name: 'United States', value: 'US', flag:'https://flagcdn.com/16x12/us.png'},
    {name: 'Canada', value: 'CA', flag:'https://flagcdn.com/16x12/ca.png'},
    {name: 'United Kingdom', value: 'GB', flag:'https://flagcdn.com/16x12/gb.png'},
    {name: 'Australia', value: 'AU', flag:'https://flagcdn.com/16x12/au.png'},
    {name: 'Germany', value: 'DE', flag:'https://flagcdn.com/16x12/de.png'},
    {name: 'France', value: 'FR', flag:'https://flagcdn.com/16x12/fr.png'},
  ]



  return (
    <div>
      <div className='flex justify-end items-center  gap-[49px]'>
        <div>USD</div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25%] after:top-[50%] after:-translate-y-1/2 '>
              <img src='https://flagcdn.com/16x12/us.png'/>
              <select 
              name="country" 
              value={selectedCountrey?.value}
              onChange={(e)=>{
                  const  country = countries.find((c)=> console.log(c))
              }}  
              >
                <option value=""> <img src='https://flagcdn.com/16x12/us.png'/>asd</option>
                <option value="">dsa</option>
                <option value="">qwe</option>
                <option value="">qwsad</option>
              </select>

        </div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25%] after:top-[50%] after:-translate-y-1/2 '>Social Media</div>
      </div>
    </div>
  )
}

export default TopRightBar
