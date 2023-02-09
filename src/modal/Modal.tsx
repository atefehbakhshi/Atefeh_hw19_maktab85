import { useContext } from "react";
import ReactDOM from "react-dom";
import { ExpenseContext } from "../context/Context";
import DeleteItemModal from "./DeleteItemModal";
import EditBudgetModal from "./EditBudgetModal";
import styled from "@emotion/styled";

const OuterWrapper = styled.div`
  display: ${(props) => props.showModal};
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgb(139, 139, 139, 0.7);
`;

const Modal = () => {
  const { deleteModal, showModal } = useContext(ExpenseContext);

  const Portal = (
    <OuterWrapper showModal={showModal}>
      {deleteModal ? <DeleteItemModal /> : <EditBudgetModal />}
    </OuterWrapper>
  );

  return (
    <div>
      {ReactDOM.createPortal(
        Portal,
        document.getElementById("modal-root") as HTMLDivElement
      )}
    </div>
  );
};

export default Modal;
