import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Button from 'react-bootstrap/Button';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";
import { CurrentUser } from "../contexts/CurrentUser";

function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const currentUser = useContext(CurrentUser);

    const handleLogout = () => {
        // Handle logout logic
    };

    return (
        <div>
            <header>
                <nav className="navigation">
                    <h1>Voyager Vault</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/countries">Search Countries</Link></li>
                        <li><Link to="/wishlist">My Wishlist</Link></li>
                        <li><Link to="/destination">Destinations</Link></li>
                    </ul>
                    {currentUser ? (
                        <div>
                            <p>Welcome, {currentUser.firstName}</p>
                            <Button className="formButton" variant="danger" onClick={handleLogout}>Log Out</Button>
                        </div>
                    ) : (
                        <div>
                            <Button className="formButton" variant="secondary" onClick={handleShow}>Register</Button>
                            <Button className="formButton" variant="success" onClick={handleShowLogin}>Log In</Button>
                        </div>
                    )}
                </nav>
            </header>
            <RegForm show={show} handleClose={handleClose} />
            <LoginForm show={showLogin} handleClose={handleCloseLogin} />
        </div>
    );
}

export default NavBar;
