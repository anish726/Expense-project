import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewComponent = (props) => {

     const [isEditing,setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.round().toString()
        }
        props.onAddExpense(expenseData)
    }


            const startEditingHandler = () =>{
                setIsEditing(true)
            }
 
           const endEditingHandler = () =>{
               setIsEditing(false)
           }

    return (
        <div className="new-expense">
{!isEditing && (
    <button onClick={startEditingHandler}>Add New Expense</button>
)}
     { isEditing && (
           <ExpenseForm  onCancle = {endEditingHandler}
            onSaveExpenseData={saveExpenseDataHandler} />
           ) }
           </div>
   
    )
}

export default NewComponent
