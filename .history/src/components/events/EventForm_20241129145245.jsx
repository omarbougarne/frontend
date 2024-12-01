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
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                onFocus={() => handleFocus('title')}
                onBlur={() => handleBlur('title')}
                className={classNames(styles.input, { [styles.focused]: isFocused.title })}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                onFocus={() => handleFocus('description')}
                onBlur={() => handleBlur('description')}
                className={classNames(styles.textarea, { [styles.focused]: isFocused.description })}
            />
            <textarea
                name="text"
                placeholder="Text"
                value={formData.text}
                onChange={handleChange}
                onFocus={() => handleFocus('text')}
                onBlur={() => handleBlur('text')}
                className={classNames(styles.textarea, { [styles.focused]: isFocused.text })}
            />
            <input
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                onFocus={() => handleFocus('author')}
                onBlur={() => handleBlur('author')}
                className={classNames(styles.input, { [styles.focused]: isFocused.author })}
            />
            <input
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                onFocus={() => handleFocus('category')}
                onBlur={() => handleBlur('category')}
                className={classNames(styles.input, { [styles.focused]: isFocused.category })}
            />
            <button type="submit" className={styles.button}>
                Submit
            </button>
        </form>
    );
};

export default EventForm;
