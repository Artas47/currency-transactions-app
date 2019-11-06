import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import * as S from "./modal.styles";

const Modal = ({ header, modalContent }) => {
  const renderModalContent = () => {
    return (
      <S.Modal>
        <S.ModalHeader>{header}</S.ModalHeader>
        <S.ModalContent>{modalContent}</S.ModalContent>
      </S.Modal>
    );
  };

  return ReactDOM.createPortal(
    <S.ModalContainer>{renderModalContent()}</S.ModalContainer>,
    document.querySelector("#modal")
  );
};

export default withRouter(Modal);
