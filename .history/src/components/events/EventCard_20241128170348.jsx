import React from 'react';

const EventCard = ({ event, onDelete }) => (
    <div className="event-card">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <button onClick={() => onDelete(event._id)}>Delete</button>
    </div>
);

export default EventCard;
