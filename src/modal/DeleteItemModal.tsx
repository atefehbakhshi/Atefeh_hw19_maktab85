import { useContext } from "react";
import Button from "../components/Button";
import { ExpenseContext } from "../context/Context";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 40%;
  height: 25vh;
  position: absolute;
  background-color: rgb(255 255 255);
  border-radius: 5px;
  top: 25vh;
  left: 30%;
  box-shadow: 5px 5px 5px 5px gray;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const DeleteItemModal = () => {
  const { list, setList, setShowModal, setId, id } = useContext(ExpenseContext);

  const removeItem = () => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setShowModal("none");
  };

  const cancelRemoveItem = () => {
    setShowModal("none");
    setId(0);
  };

  return (
    <Wrapper>
      <p>Are you sure for deleting an item?</p>
      <ButtonContainer>
        <Button onClick={removeItem}>Yes</Button>
        <Button onClick={cancelRemoveItem}>No</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default DeleteItemModal;
