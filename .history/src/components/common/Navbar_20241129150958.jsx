import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">MyApp</Link>
            </div>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>
                {token ? (
                    <button onClick={handleLogout} className={styles.logoutButton}>
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login" className={styles.link}>
                            Login
                        </Link>
                        <Link to="/signup" className={styles.link}>
                            Signup
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
