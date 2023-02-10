import { useContext } from "react";
import { ExpenseContext } from "../context/Context";
import styled from "styled-components";

import Budget from "./Budget";
import Remaining from "./Remaining";
import Spent from "./Spent";
import { list } from "../types/type";

const Wrapper = styled.header`
  margin-bottom: 1rem;
`;

const H1 = styled.h1`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const HeaderElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const { list, budget } = useContext(ExpenseContext);

  const calculate = (acc: number, cur: list): number => {
    if (cur.cost) {
      return cur.cost + acc;
    } else {
      return 0;
    }
  };

  const spent = list.reduce(
    (accumulator, currentValue) => calculate(accumulator, currentValue),
    0
  );

  const remaining = budget - spent;
  return (
    <Wrapper>
      <H1>My Budget Planner</H1>
      <HeaderElementsWrapper>
        <Budget budget={budget} />
        <Remaining remaining={remaining} />
        <Spent spent={spent} />
      </HeaderElementsWrapper>
    </Wrapper>
  );
};

export default Header;
