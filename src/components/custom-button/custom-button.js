import React from 'react'
import * as Styles from './custom-button.styles'

const CustomButton = props => {
  return <Styles.CustomButton {...props}>{props.children}</Styles.CustomButton>
}

export default CustomButton
