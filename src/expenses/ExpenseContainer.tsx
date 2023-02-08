import { useContext } from "react";
import { ExpenseContext } from "../context/Context";
import ExpenseAdd from "./ExpenseAdd";
import ExpenseList from "./ExpenseList";
import ExpenseSearch from "./ExpenseSearch";

const ExpenseContainer = () => {
  const { searchedList } = useContext(ExpenseContext);

  return (
    <div>
      <ExpenseSearch />
      <ExpenseList />
      {!(searchedList.length > 0) && <ExpenseAdd />}
    </div>
  );
};

export default ExpenseContainer;
