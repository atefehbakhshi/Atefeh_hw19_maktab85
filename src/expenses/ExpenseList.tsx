import { useContext } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../context/Context";

const Wrapper = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  margin-bottom: 1rem;
  & div:last-child {
    border-bottom: none;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  padding: 0.75rem;
`;

const PriceDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.p`
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0.125rem 0.25rem;
`;

const DeleteBtn = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: #212529;
  color: #fff;
  border-radius: 50%;
  border: none;
  line-height: 0.75rem;
  cursor: pointer;
`;

const ExpenseList = () => {
  const { list, setShowModal, setId } = useContext(ExpenseContext);

  const deleteItem = (id: number) => {
    setShowModal("flex");
    setId(id);
  };

  return (
    <Wrapper>
      {list.map((item) => {
        return (
          <ListItem key={item.id}>
            <p>{item.name}</p>
            <PriceDelete>
              <Price>&#163;{item.cost}</Price>
              <DeleteBtn onClick={() => deleteItem(item.id)}>x</DeleteBtn>
            </PriceDelete>
          </ListItem>
        );
      })}
    </Wrapper>
  );
};

export default ExpenseList;
