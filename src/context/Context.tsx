import { createContext, FC, useState } from "react";
import ExpenseList from "../data/data";
import { ExpenseCtx, JsxElement } from "../types/type";

export const ExpenseContext = createContext<ExpenseCtx>({
  list: [],
  showModal: "",
  id: 0,
  setList: () => {},
  setShowModal: () => {},
  setId: () => {},
});

const ExpenseProvider: FC<JsxElement> = ({ children }) => {
  const [list, setList] = useState(ExpenseList);
  const [showModal, setShowModal] = useState("none");
  const [id, setId] = useState(0);

  return (
    <ExpenseContext.Provider
      value={{ list, setList, showModal, setShowModal, id, setId }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
