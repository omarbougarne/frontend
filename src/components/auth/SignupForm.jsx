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
            alert('Signup successful! Please log in.');
            navigate('/login');
        } catch (error) {
            alert(error.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            <Button text="Sign Up" type="submit" />
        </form>
    );
};

export default SignupForm;
