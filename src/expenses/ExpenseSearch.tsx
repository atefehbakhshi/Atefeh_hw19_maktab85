import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../context/Context";

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
  const { list, setSearchedList } = useContext(ExpenseContext);

  const searchList = (event) => {
    setSearchedList([]);

    const searchValue = event.target.value.toLowerCase();

    // check for Add Expense
    if (searchValue.length > 0) {
      list.map((item) => {
        const lowerCaseItem = item.name.toLowerCase();

        if (lowerCaseItem.includes(searchValue)) {
          setSearchedList((prevList) => [...prevList, item]);
        }
      });
    }
  };

  return (
    <Wrapper>
      <H3>Expenses</H3>
      <Input
        type="text"
        placeholder="Type to search..."
        onChange={searchList}
      />
    </Wrapper>
  );
};

export default ExpenseSearch;
