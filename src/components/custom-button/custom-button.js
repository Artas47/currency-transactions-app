/* eslint-disable react/destructuring-assignment */
import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from './custom-button.styles'

const CustomButton = props => {
  return <Styles.CustomButton {...props}>{props.children}</Styles.CustomButton>
}

export default CustomButton

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
}
