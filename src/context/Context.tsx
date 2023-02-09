import { createContext, FC, useReducer, useState } from "react";
import { ExpenseCtx, JsxElement, ModalAction } from "../types/type";
import ExpenseList from "../data/data";

export const ExpenseContext = createContext<ExpenseCtx>({
  list: [],
  showModal: "",
  id: 0,
  budget: 0,
  deleteModal: true,
  searchedList: [],
  setList: () => {},
  setShowModal: () => {},
  setId: () => {},
  setBudget: () => {},
  dispatchFn: () => {},
  setSearchedList: () => {},
});

const reducerFn = (state: boolean, action: ModalAction) => {
  switch (action.type) {
    case "editBudget":
      return false;
    case "deleteItem":
      return true;
    default:
      return state;
  }
};

const ExpenseProvider: FC<JsxElement> = ({ children }) => {
  const [list, setList] = useState(ExpenseList);
  const [showModal, setShowModal] = useState("none");
  const [id, setId] = useState(0);
  const [budget, setBudget] = useState(2000);
  const [deleteModal, dispatchFn] = useReducer(reducerFn, true);

  const [searchedList, setSearchedList] = useState([]);

  return (
    <ExpenseContext.Provider
      value={{
        list,
        showModal,
        id,
        budget,
        deleteModal,
        searchedList,
        setList,
        setShowModal,
        setId,
        setBudget,
        dispatchFn,
        setSearchedList,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
