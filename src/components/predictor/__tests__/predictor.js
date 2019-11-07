import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {getByTestId} from '@testing-library/dom'
import {fireEvent} from '@testing-library/react'
import Predictor from '../predictor'
import {renderWithProvider} from '../../../helpers/test'

test('renders initial status of pln rate', () => {
  const {container} = renderWithProvider(<Predictor />)
  expect(getByTestId(container, 'plnRate-value').value).toBe('4.3')
})

test('user click an arrow to increment/decrement pln rate', () => {
  const {container, getByText} = renderWithProvider(<Predictor />)
  const input = getByTestId(container, 'plnRate-value')
  fireEvent.click(getByText('↓'))
  expect(input).toHaveAttribute('value', '4.29')
  fireEvent.click(getByText('↑'))
  expect(input).toHaveAttribute('value', '4.3')
})

test('value of pln rate input can not be a character', () => {
  const {container} = renderWithProvider(<Predictor />)
  const input = getByTestId(container, 'plnRate-value')
  fireEvent.change(input, {target: {value: 'a'}})
  expect(input).toHaveAttribute('value', '')
})
