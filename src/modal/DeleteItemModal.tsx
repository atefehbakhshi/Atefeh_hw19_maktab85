import { useContext } from "react";
import Button from "../components/Button";
import { ExpenseContext } from "../context/Context";
import styled from "@emotion/styled";

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
  const {
    list,
    setList,
    searchedList,
    setSearchedList,
    setShowModal,
    setId,
    id,
  } = useContext(ExpenseContext);

  const removeItem = () => {
    // set main list
    const newList = list.filter((item) => item.id !== id);
    setList(newList);

    // set searched list
    const newSearchedList = searchedList.filter((item) => item.id !== id);
    setSearchedList(newSearchedList);

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
