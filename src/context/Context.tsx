import { createContext, FC, useState } from "react";
import ExpenseList from "../data/data";

type Props = {
  children: JSX.Element | JSX.Element[];
};

// type list={
//     name: string
//     cost: number
//     id: number
// }

export const ExpenseContext = createContext({
  list: [],
  setList: () => {},
});

const ExpenseProvider: FC<Props> = ({ children }) => {
  const [list, setList] = useState(ExpenseList);

  return (
    <ExpenseContext.Provider value={{ list, setList }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
