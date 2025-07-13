import { BanknoteIcon, LayoutGrid, ReceiptIcon, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {
    const menuList = [
        {
            id: 1,
            name: "Dashoard",
            icon: LayoutGrid
        },
        {
            id: 2,
            name: "Budgets",
            icon: BanknoteIcon
        },{
            id: 3,
            name: "Expenses",
            icon: ReceiptIcon
        },{
            id: 4,
            name: "Upgrade",
            icon: ShieldCheck
        }
    ]
  return (
      <div className='h-screen p-5 mx-auto border shadow-sm'>
          <Image
              width={160}
              height={100}
              alt='logo'
              src={'/logo.png'} />
          
          <div className='mt-5'>
              {
                  menuList.map((menu, index) => (
                      <h2 className='flex gap-2 items-center text-gray-600 text-md p-4 cursor-pointer rounded-md hover:text-indigo-600 hover:bg-blue-100'
                          key={index}>
                          <menu.icon/>
                          {menu.name}
                      </h2>
                  ))
              }
          </div>
    </div>
  )
}

export default SideNav