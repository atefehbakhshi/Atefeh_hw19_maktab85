import { useContext } from "react";
import ReactDOM from "react-dom";
import { ExpenseContext } from "../context/Context";
import ModalOverlay from "./ModalOverlay";

const Modal = () => {
  const { list, setList, showModal, setShowModal, setId, id } =
    useContext(ExpenseContext);
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay
          showModal={showModal}
          setShowModal={setShowModal}
          list={list}
          setList={setList}
          id={id}
          setId={setId}
        />,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default Modal;
