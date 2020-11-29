import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

export const Btn = styled.button`
  background-color: yellowgreen;
`
const Button = ({
  children,
  color = 'primary',
  onClick,
  type = 'button',
  ...props
}) => (
  <Btn
    className={`btn ${color}`}
    onClick={onClick}
    type={type}
    {...props}>
    {children}
  </Btn>
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
