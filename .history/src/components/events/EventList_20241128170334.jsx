import React, { useEffect, useState } from 'react';
import { getAllEvents, deleteEvent } from '../../services/eventsService';
import EventCard from './EventCard';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const data = await getAllEvents();
        setEvents(data);
    };

    const handleDelete = async (id) => {
        await deleteEvent(id);
        fetchEvents();
    };

    return (
        <div>
            {events.map((event) => (
                <EventCard key={event._id} event={event} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default EventList;
