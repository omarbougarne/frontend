import React, { useState } from 'react';
import styles from './EventForm.module.css';

const EventForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        title: initialData.title || '',
        description: initialData.description || '',
        text: initialData.text || '',
        author: initialData.author || '',
        category: initialData.category || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.className}>
            <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />
            <textarea
                name="text"
                placeholder="Text"
                value={formData.text}
                onChange={handleChange}
            />
            <input
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
            />
            <input
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EventForm;
