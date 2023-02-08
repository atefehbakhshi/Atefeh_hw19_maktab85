import { FC } from "react";
import HeaderElement from "./HeaderElement";

const Remaining: FC<{ remaining: number }> = ({ remaining }) => {
  return (
    <HeaderElement bgColor={"#d4edda"}>
      <p>Remaining: &#163;{remaining}</p>
    </HeaderElement>
  );
};

export default Remaining;
