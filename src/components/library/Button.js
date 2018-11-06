import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.css'

const Button = ({
  children,
  color = 'primary',
  onClick,
  text,
  type = 'button',
}) => (
  <button 
    className={`btn ${color}`} 
    onClick={onClick}
    type={type}
  >
    {text ? text : children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
}

export default Button
