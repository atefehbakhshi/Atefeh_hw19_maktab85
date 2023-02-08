import { createContext, FC, useReducer, useState } from "react";
import ExpenseList from "../data/data";
import { ExpenseCtx, JsxElement } from "../types/type";

export const ExpenseContext = createContext<ExpenseCtx>({
  list: [],
  showModal: "",
  id: 0,
  budget: 0,
  deleteModal: true,
  setList: () => {},
  setShowModal: () => {},
  setId: () => {},
  setBudget: () => {},
  dispatchFn: () => {},
});

const reducerFn = (state, action) => {
  if (action.type === "editBudget") return false;
  if (action.type === "deleteItem") return true;
};

const ExpenseProvider: FC<JsxElement> = ({ children }) => {
  const [list, setList] = useState(ExpenseList);
  const [showModal, setShowModal] = useState("none");
  const [id, setId] = useState(0);
  const [budget, setBudget] = useState(2000);

  const [deleteModal, dispatchFn] = useReducer(reducerFn, true);

  return (
    <ExpenseContext.Provider
      value={{
        list,
        showModal,
        id,
        budget,
        deleteModal,
        setList,
        setShowModal,
        setId,
        setBudget,
        dispatchFn,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
