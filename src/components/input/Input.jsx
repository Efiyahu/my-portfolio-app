import React from 'react';
import './Input.styles.scss';

function Input({ className, name, title, placeholder, onChange, value }) {
  return (
    <div className={name}>
      <input
        onChange={onChange}
        value={value}
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
