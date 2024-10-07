import React from "react";
import PropTypes from "prop-types";
import './Button.scss'

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`primary__button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  showArrow: PropTypes.bool,
};


export default Button;