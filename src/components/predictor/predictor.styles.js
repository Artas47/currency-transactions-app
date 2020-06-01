import styled from 'styled-components'

export const Predictor = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
  justify-content: center;
`

export const PredictorInput = styled.input`
  text-align: center;
  width: 10rem;
  font-size: 3rem;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
`

export const Arrow = styled.span`
  font-size: 5rem;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
