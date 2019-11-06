import styled from "styled-components";

export const AddTransactionButton = styled.button`
  width: 50rem;
  cursor: pointer;
  border: 2px solid darkgrey;
  font-size: 2rem;
  background-color: white;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  height: 6rem;
  @media (max-width: 1500px) {
    width: 40rem;
  }
`;
