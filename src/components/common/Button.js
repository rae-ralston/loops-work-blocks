import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";

export const Btn = styled.button`
  background-color: "yellowgreen";
`;

const Button = ({ children, onClick, type = "button", ...props }) => (
  <Btn onClick={onClick} type={type} {...props}>
    {children}
  </Btn>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
