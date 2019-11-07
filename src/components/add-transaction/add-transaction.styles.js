import styled from 'styled-components/macro'

export const AddTransitionModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const AddTransitionModalInput = styled.input`
  width: 80%;
  padding: 2rem;
  font-size: 2.3rem;
  :not(:last-child) {
    margin: 3rem 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
