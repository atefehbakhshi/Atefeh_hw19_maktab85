import { FC, useContext } from "react";
import { ExpenseContext } from "../context/Context";
import { list } from "../types/type";
import styled from "styled-components";

const Wrapper = styled.div`
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

const ListItem:FC<{ item: list }> = ({ item }) => {
  const { setShowModal, setId, dispatchFn } = useContext(ExpenseContext);

  const deleteItem = (id: number) => {
    dispatchFn({ type: "deleteItem" });
    setShowModal("flex");
    setId(id);
  };

  return (
    <Wrapper>
      <p>{item.name}</p>
      <PriceDelete>
        <Price>&#163;{item.cost}</Price>
        <DeleteBtn onClick={() => deleteItem(item.id)}>x</DeleteBtn>
      </PriceDelete>
    </Wrapper>
  );
};

export default ListItem;
