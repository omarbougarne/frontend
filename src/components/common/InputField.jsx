import React from 'react';
// import './InputField.css';

const InputField = ({ label, type, value, onChange, name }) => (
    <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            required
        />
    </div>
);

export default InputField;
