import { useContext } from "react";
import { ExpenseContext } from "../context/Context";
import ListItem from "./ListItem";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  margin-bottom: 1rem;
  & div:last-child {
    border-bottom: none;
  }
`;

const ExpenseList = () => {
  const { list, searchedList } = useContext(ExpenseContext);

  return (
    <Wrapper>
      {searchedList.length > 0
        ? searchedList.map((item) => <ListItem item={item} key={item.id} />)
        : list.map((item) => <ListItem item={item} key={item.id} />)}
    </Wrapper>
  );
};

export default ExpenseList;
