import { FormEvent, useContext, useRef } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { ExpenseContext } from "../context/Context";

const Wrapper = styled.div`
  width: 60%;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const InputItem = styled.div`
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

type list = {
  name: string;
  cost: string;
  id: number;
};

const ExpenseAdd = () => {
  const { setList } = useContext(ExpenseContext);

  const inputRefName = useRef();
  const inputCostRef = useRef();

  const addToList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem: list = {
      name: inputRefName.current.value,
      cost: inputCostRef.current.value,
      id: new Date().getTime(),
    };

    setList((prev) => [...prev, newItem]);
    inputRefName.current.value = "";
    inputCostRef.current.value = "";
  };

  return (
    <Wrapper>
      <H3>Add Expense</H3>
      <form onSubmit={addToList}>
        <InputContainer>
          <InputItem>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" ref={inputRefName} />
          </InputItem>
          <InputItem>
            <label htmlFor="cost">Cost</label>
            <Input type="number" id="cost" ref={inputCostRef} />
          </InputItem>
        </InputContainer>
        <Button>Save</Button>
      </form>
    </Wrapper>
  );
};

export default ExpenseAdd;
