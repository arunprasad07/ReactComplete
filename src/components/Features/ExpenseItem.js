import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const btnClickHandler = () => {
    setTitle("Updated title!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={btnClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
