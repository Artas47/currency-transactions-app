import styled, {css} from 'styled-components'

export const CustomButton = styled.button`
  width: 40%;
  display: block;
  margin-top: 2rem;
  border: 1px solid darkgrey;
  height: 5rem;
  background-color: ${props => (props.primary ? 'lightgreen' : 'lightpink')};
  ${props =>
    props.add &&
    css`
      width: 60rem;
      cursor: pointer;
      border: 2px solid darkgrey;
      font-size: 2rem;
      background-color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      height: 6rem;
      @media (max-width: 1500px) {
        width: 45rem;
      }
      @media (max-width: 900px) {
        width: 65rem;
      }
      @media (max-width: 500px) {
        width: 50rem;
      }
    `}
`
