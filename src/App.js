import React, { useState } from 'react';
import './App.css';
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  //expenses first item in the array, setExpenses second item in the array which is function.
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main>
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>Total Spending :{}
        <span className="total">
          £ {" "}
          {expenses.reduce((acc, num) => {
            return (acc += num.amount);
          }, 0)}
        </span>
      </h1>

    </>
  );
}

export default App;
