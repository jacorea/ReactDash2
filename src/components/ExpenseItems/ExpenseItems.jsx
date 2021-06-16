import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const ExpenseItems = ({ expenseItems }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const handleFilteredYear = (selectedFilteredYear) => {
    setFilteredYear(selectedFilteredYear);
  };

  const filteredExpenses = expenseItems.filter((expense) => {
    return new Date(expense.date).getFullYear() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <ExpensesFilter
        onFilteredYear={handleFilteredYear}
        selectedfilteredYear={filteredYear}
      />
      <Card>{expensesContent}</Card>
    </div>
  );
};

export default ExpenseItems;
