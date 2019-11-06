import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from './custom-button.styles'

const CustomButton = ({primary, type, onClick, children}) => {
  return (
    <Styles.CustomButton primary={primary} type={type} onClick={onClick}>
      {children}
    </Styles.CustomButton>
  )
}

export default CustomButton

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

CustomButton.defaultProps = {
  primary: null,
  type: '',
  onClick: null,
}
