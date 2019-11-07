import React from 'react'
import ReactDOM from 'react-dom'
import * as Styles from './modal.styles'

const Modal = ({header, modalContent}) => {
  return ReactDOM.createPortal(
    <Styles.ModalContainer>
      <Styles.Modal>
        <Styles.ModalHeader>{header}</Styles.ModalHeader>
        <Styles.ModalContent>{modalContent}</Styles.ModalContent>
      </Styles.Modal>
    </Styles.ModalContainer>,
    document.body,
  )
}

export default Modal
