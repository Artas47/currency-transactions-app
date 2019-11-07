import styled from 'styled-components/macro'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(24, 2, 2, 0.623);
  z-index: 999;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  line-height: 2;
`

export const Modal = styled.div`
  position: absolute;
  transition: all 1s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  min-height: 50rem;
  min-width: 50rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalHeader = styled.h1`
  font-size: 3rem;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
