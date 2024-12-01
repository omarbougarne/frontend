import React from 'react';
import './Button.css';

const Button = ({ text, onClick, type = 'button' }) => {
    return (
        <button className="button" onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;