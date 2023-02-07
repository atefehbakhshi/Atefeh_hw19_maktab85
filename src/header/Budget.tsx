import Button from "../components/Button";
import HeaderElement from "./HeaderElement";

const Budget = () => {
  return (
    <HeaderElement bgColor={"#e2e3e5"}>
      <p>Budget: &#163;{2000}</p>
      <Button>Edit</Button>
    </HeaderElement>
  );
};

export default Budget;
