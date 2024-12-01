import React from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ event, onDelete }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.description}>{event.description}</p>
            <button className={styles.deleteButton} onClick={() => onDelete(event._id)}>
                Delete
            </button>
        </div>
    );
};

export default EventCard;
