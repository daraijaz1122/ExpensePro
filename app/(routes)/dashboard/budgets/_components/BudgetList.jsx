import React from 'react'
import CreateBudget from './CreateBudget'

const BudgetList = () => {
  return (
      <div className='mt-5'>
          <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <CreateBudget />
          </div> 
    </div>
  )
}

export default BudgetList