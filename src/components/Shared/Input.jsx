import React from 'react';

const Input = ({ type, placeholder, name }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    className="w-full p-2 mb-4 border rounded bg-sky-100"
  />
);

export default Input;
