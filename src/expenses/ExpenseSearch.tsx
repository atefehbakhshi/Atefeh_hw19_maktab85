import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.25rem;
  border: 0.5px solid lightgray;
  border-radius: 5px;
`;

const ExpenseSearch = () => {
  return (
    <Wrapper>
      <H3>Expenses</H3>
      <Input type="text" placeholder="Type to search..." />
    </Wrapper>
  );
};

export default ExpenseSearch;
