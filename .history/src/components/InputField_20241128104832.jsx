import React from 'react';
import './InputField.css';

const InputField = ({ type, label, value, onChange, name }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                required
            />
        </div>
    );
};

export default InputField;
