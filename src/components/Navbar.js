import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar-logo">
                    <h1>Clarusway <span>Web Design</span></h1>
                </div>
                <div className="navbar-btn--container">
                    <ul className="btn-group">
                        <li>Home</li>
                        <li className="btn-active">About</li>
                        <li>Services</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
