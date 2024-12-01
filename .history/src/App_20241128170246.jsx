import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import EventsPage from './pages/events/EventsPage';
import CreateEventPage from './pages/events/CreateEventPage';
import UpdateEventPage from './pages/events/UpdateEventPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/eve" element={<EventsPage />} />
                <Route path="/create" element={<CreateEventPage />} />
                <Route path="/update/:id" element={<UpdateEventPage />} />
            </Routes>
        </Router>
    );
};

export default App;
