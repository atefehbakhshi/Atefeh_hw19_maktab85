import styled from "styled-components";

import Button from "../components/Button";

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

const ModalOverlay = ({
  showModal,
  setShowModal,
  setId,
  id,
  list,
  setList,
}) => {
  const OuterWrapper = styled.div`
    display: ${showModal};
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgb(139, 139, 139, 0.7);
  `;

  const removeItem = () => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setShowModal("none");
  };

  const cancelRemoveItem = () => {
    setShowModal("none");
    setId("");
  };

  return (
    <OuterWrapper>
      <Wrapper>
        <p>Are you sure for deleting an item?</p>
        <ButtonContainer>
          <Button onClick={removeItem}>Yes</Button>
          <Button onClick={cancelRemoveItem}>No</Button>
        </ButtonContainer>
      </Wrapper>
    </OuterWrapper>
  );
};

export default ModalOverlay;
