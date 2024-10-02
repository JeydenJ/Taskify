import React from 'react';

const ErrorMessage = ({ condition, message, className }) => {
  return condition ? <p className={className}>{message}</p> : null;
};

export default ErrorMessage;
