import React, { useEffect, useState } from 'react';
import { getEventById, updateEvent } from '../../services/eventsService';
import EventForm from '../../components/events/EventForm';
import { useParams } from 'react-router-dom';

const UpdateEventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const data = await getEventById(id);
            setEvent(data);
        };
        fetchEvent();
    }, [id]);

    const handleUpdate = async (formData) => {
        await updateEvent(id, formData);
        alert('Event updated successfully!');
    };

    return (
        <div>
            <h1>Update Event</h1>
            {event && <EventForm onSubmit={handleUpdate} initialData={event} />}
        </div>
    );
};

export default UpdateEventPage;
