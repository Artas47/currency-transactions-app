import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import * as S from "./modal.styles";

const Modal = props => {
  const renderModalContent = () => {
    return (
      <S.Modal>
        <S.ModalHeader>{props.header}</S.ModalHeader>
        <S.ModalContent>{props.modalContent}</S.ModalContent>
      </S.Modal>
    );
  };

  return ReactDOM.createPortal(
    <S.ModalContainer>{renderModalContent()}</S.ModalContainer>,
    document.querySelector("#modal")
  );
};

export default withRouter(Modal);
