import React from 'react';
import './Input.styles.scss';

function Input({ className, name, title, placeholder }) {
  return (
    <div className={name}>
      <input
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
      />
      <label className="label" htmlFor={name}>
        {title}
      </label>
    </div>
  );
}

export default Input;
