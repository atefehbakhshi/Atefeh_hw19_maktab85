import { useContext, useRef } from "react";
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

const Input = styled.input`
  padding: 0.5rem;
  border: 0.5px solid lightgray;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const EditBudgetModal = () => {
  const { setShowModal, setBudget } = useContext(ExpenseContext);
  const editBudget = useRef(null);

  const editeBtn = () => {
    const newBudget = editBudget.current.value;
    setBudget(newBudget);
    setShowModal("none");
  };

  const cancelBtn = () => {
    setShowModal("none");
  };

  return (
    <Wrapper>
      <p>Edit Budget</p>
      <Input type="number" placeholder="Edit budget..." ref={editBudget} />
      <ButtonContainer>
        <Button onClick={editeBtn}>Yes</Button>
        <Button onClick={cancelBtn}>Cancel</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default EditBudgetModal;
