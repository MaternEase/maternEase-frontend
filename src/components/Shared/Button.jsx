import React from 'react';

const Button = ({ children, ...props }) => (
  <button {...props} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
    {children}
  </button>
);

export default Button;
