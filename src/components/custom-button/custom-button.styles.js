import styled from 'styled-components'

export const CustomButton = styled.button`
  width: 40%;
  display: block;
  margin-top: 2rem;
  border: 1px solid darkgrey;
  height: 5rem;
  background-color: ${props => (props.primary ? 'lightgreen' : 'lightpink')};
`
