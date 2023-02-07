import ExpenseAdd from "./ExpenseAdd";
import ExpenseList from "./ExpenseList";
import ExpenseSearch from "./ExpenseSearch";

const ExpenseContainer = () => {
  return (
    <div>
      <ExpenseSearch />
      <ExpenseList />
      <ExpenseAdd />
    </div>
  );
};

export default ExpenseContainer;
