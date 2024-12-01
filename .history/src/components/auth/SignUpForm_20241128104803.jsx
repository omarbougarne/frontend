import React, { useState } from 'react';
import { signUp } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import InputField from '../Common/InputField';
import Button from '../Common/Button';
import './AuthForm.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp({ ...formData, role: 'user' });
            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <InputField
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <InputField
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <InputField
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <Button text="Sign Up" type="submit" />
        </form>
    );
};

export default SignupForm;
