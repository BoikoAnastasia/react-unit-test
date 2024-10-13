import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/" data-testid="main-link">
                MainPage
            </Link>
            <Link to="/about" data-testid="about-link">
                AboutPage
            </Link>
            <Link to="/users" data-testid="users-link">
                UsersPage
            </Link>
        </div>
    );
}
