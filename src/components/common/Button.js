import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({
  children,
  color = 'primary',
  onClick,
  type = 'button',
  ...props
}) => (
  <button
    className={`btn ${color}`}
    onClick={onClick}
    type={type}
    {...props}>
    {children}
  </button>
)

Button.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
}

//TODO add default props instead of default in argument declaration.

export default Button
