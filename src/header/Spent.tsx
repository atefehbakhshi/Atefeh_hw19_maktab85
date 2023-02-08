import { FC } from "react";
import HeaderElement from "./HeaderElement";

const Spent: FC<{ spent: number }> = ({ spent }) => {
  return (
    <HeaderElement bgColor={"#cce5ff"}>
      <p>Spent to far: &#163;{spent}</p>
    </HeaderElement>
  );
};

export default Spent;
