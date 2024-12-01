import React from 'react';
// import './Button.css';

const Button = ({ text, onClick, type = 'button', disabled = false }) => (
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
        {text}
    </button>
);

export default Button;
