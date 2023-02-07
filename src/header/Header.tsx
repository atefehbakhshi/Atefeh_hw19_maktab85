import styled from "styled-components";

import Budget from "./Budget";
import Remaining from "./Remaining";
import Spent from "./Spent";

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
  return (
    <Wrapper>
      <H1>My Budget Planner</H1>
      <HeaderElementsWrapper>
        <Budget />
        <Remaining />
        <Spent />
      </HeaderElementsWrapper>
    </Wrapper>
  );
};

export default Header;
