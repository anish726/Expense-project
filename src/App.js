
import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewComponent from './components/NewComponent/NewComponent';


const DUMMY_DATA = 
  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]



function App() {
  const [expenses,setExpenses]  = useState(DUMMY_DATA);
    
  const addExpense = (expense) =>{
    setExpenses((pervExpenses) => {
      return [ expense,...pervExpenses]
    })
  }
  
  return (
    <div className="App">
    <h1 style={{textAlign:"center"}}> Expense-Project</h1>
    <div><NewComponent  onAddExpense={addExpense}  /></div>
   
          <Expense expenses={expenses} />
      
   
    </div>
  );
}

export default App;
