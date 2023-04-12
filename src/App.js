import ExpenseItem from "./components/ExpenseItem";
import "./styles.css";

export default function App() {
  const expenses = [
    {
      title: "Car EMI",
      amount: "10000",
      date: new Date(2022, 11, 17)
    },
    {
      title: "Home EMI",
      amount: "50000",
      date: new Date(2023, 10, 11)
    },
    {
      title: "Grocessery",
      amount: "1500",
      date: new Date()
    },
    {
      title: "Kids Misc",
      amount: "1000",
      date: new Date()
    }
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
