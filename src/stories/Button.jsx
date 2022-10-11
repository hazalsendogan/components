import React from 'react';
import PropTypes from 'prop-types';
import "./styles/index.scss";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ btnType,color, variant, label, ...props }) => {
  const mode =  color ==="primary" ? 'btn-primary' : color ==="danger" ? 'btn-danger' : color ==="warning" ? 'btn-warning' : color ==="success" ? 'btn-success' : color ==="info" ? 'btn-info' : 'btn-secondary';
  return (
    <button
      type={btnType}
      className={['btn', `btn-${variant}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  color: PropTypes.string,

  variant: PropTypes.string,

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: null,
  variant: "filled",
  onClick: undefined,
};
