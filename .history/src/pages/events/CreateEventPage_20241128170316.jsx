import React from 'react';
import EventForm from '../../components/events/EventForm';
import { createEvent } from '../../services/eventsService';

const CreateEventPage = () => {
    const handleCreate = async (formData) => {
        await createEvent(formData);
        alert('Event created successfully!');
    };

    return (
        <div>
            <h1>Create Event</h1>
            <EventForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreateEventPage;
