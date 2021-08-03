import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
   
    const [enterTitle , setEnterTitle] = useState('');
    const [enterAmout, setEnterAmout] = useState('');
    const [enterDate, setEnterDate] = useState('')
  
    const  submitHandler =(e) =>{
        e.preventDefault();

        const expenseData = {
            title:enterTitle,
            amount:enterAmout,
            date:new Date(enterDate),
        }
    
        props.onSaveExpenseData(expenseData);
        setEnterAmout('');
        setEnterDate('');
        setEnterTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enterTitle}
                onChange={(e)=>setEnterTitle(e.target.value)}/>               
                </div>
                <div className="new-expense__control">
                <label>Amout</label>
                <input type="text" min="0.01"  step="0.01" value={enterAmout}
                   onChange={(e)=>setEnterAmout(e.target.value)}/>               
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019/01/01" max="2022/12/31"  value={enterDate}
                   onChange={(e)=>setEnterDate(e.target.value)} />               
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancle}>Cancel</button>
                    <button type="submit" className="">submit</button>
                </div>
            </div>




        </form>
    )
}

export default ExpenseForm
