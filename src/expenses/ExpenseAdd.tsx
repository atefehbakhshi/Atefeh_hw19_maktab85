import styled from "styled-components";
import Button from "../components/Button";

const Wrapper = styled.div`
  width: 60%;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Form = styled.div`
  display: flex;
  gap: 2rem;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 0.5px solid lightgray;
  border-radius: 5px;
`;

const ExpenseAdd = () => {
  return (
    <Wrapper>
      <H3>Add Expense</H3>
      <Form>
        <InputContainer>
          <label htmlFor="name">Name</label>
          <Input type="text" id="name" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="cost">Cost</label>
          <Input type="number" id="cost" />
        </InputContainer>
      </Form>
      <Button>Save</Button>
    </Wrapper>
  );
};

export default ExpenseAdd;
