import React from 'react'
import SideNav from './_components/SideNav'

const layout = ({ children}) => {
  return (
      <div>
          <div className='fixed md:w-64 hidden md:block'>
             <SideNav/> 
          </div>
          <div className='md:ml-64 bg-red-500'>
              {children} 
          </div>
         </div>
  )
}

export default layout