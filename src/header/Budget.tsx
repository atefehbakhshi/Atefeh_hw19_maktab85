import { FC, useContext } from "react";
import Button from "../components/Button";
import { ExpenseContext } from "../context/Context";
import HeaderElement from "./HeaderElement";

const Budget: FC<{ budget: number }> = ({ budget }) => {
  const { dispatchFn, setShowModal } = useContext(ExpenseContext);

  const editBudget = () => {
    dispatchFn({ type: "editBudget" });
    setShowModal("flex");
  };

  return (
    <HeaderElement bgColor={"#e2e3e5"}>
      <p>Budget: &#163;{budget}</p>
      <Button onClick={() => editBudget()}>Edit</Button>
    </HeaderElement>
  );
};

export default Budget;
