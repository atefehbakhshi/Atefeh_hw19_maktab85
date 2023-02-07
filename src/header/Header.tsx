import styled from "styled-components";

import Button from "../components/Button";
import HeaderElement from "./HeaderElement";

const MainWrapper = styled.header`
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
    <MainWrapper>
      <H1>My Budget Planner</H1>
      <HeaderElementsWrapper>
        <HeaderElement bgColor={"#e2e3e5"}>
          <p>Budget: &#163;{2000}</p>
          <Button>Edit</Button>
        </HeaderElement>
        <HeaderElement bgColor={"#d4edda"}>
          <p>Remaining: &#163;{2000}</p>
        </HeaderElement>
        <HeaderElement bgColor={"#cce5ff"}>
          <p>Spent to far: &#163;{2000}</p>
        </HeaderElement>
      </HeaderElementsWrapper>
    </MainWrapper>
  );
};

export default Header;
