import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import ExpenseFilter from './ExpenseFilter'
const Expense = ({expenses}) => {
 
    const [filteredYear, setFilteredYear] = useState('2020')
    
       const filterChangeHandler = selectedYear =>{
           setFilteredYear(selectedYear)
       }
               

     const filterExpense =  expenses.filter(expense => {
         return expense.date.getFullYear().toString() === filteredYear;
         
     })

     console.log(filterExpense,'hey')

    return (
        <div className="expense">
            <ExpenseFilter selectedYear={filteredYear}
            onChangeFilter={filterChangeHandler}/>
         {/* <ExpenseChart expenses={expenses}/> */}
         {filterExpense.length  === 0 ? <p style={{color:'white'}}>No Expense Found</p>
          :   (filterExpense.map((expense,id) =>(
                 <ExpenseItem key={id} title={expense.title}
                    amount = {expense.amount}
                    date={expense.date}/>
                    
                )
       
            ))}
          
          
        </div>
    )
}

export default Expense
