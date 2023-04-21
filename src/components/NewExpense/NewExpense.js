import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewClicked, setAddNewClicked] = useState(false);

  const addNewClickHandler = () => {
    setAddNewClicked(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelClickHandler = () => {
    setAddNewClicked(false);
  };
  return (
    <div className="new-expense">
      {!addNewClicked && (
        <button type="submit" onClick={addNewClickHandler}>
          Add Expense
        </button>
      )}
      {addNewClicked && (
        <div id="new-expense-form">
          <ExpenseForm
            onCancelClick={cancelClickHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
