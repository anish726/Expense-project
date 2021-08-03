import React from 'react'
import Card from '../ui/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
const ExpenseItem = (props) => {
    return (
       
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
             <div className="expense-item__description">
                 <h2 style={{color:'wheat'}}>{props.title}</h2>
                 <div className="expense-item__price">Rs: {props.amount} </div>
                 
                 </div>            
                 <hr></hr>
        </Card>
    )
}

export default ExpenseItem
