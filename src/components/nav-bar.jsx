import { Link, Outlet } from "react-router-dom"
import './nav-bar.css'
import { useEffect, useState } from "react";


const NavBar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(()=> {
                setCurrentTime(new Date());
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="logo">Movies App</div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
                <div className="clock-container">
                    {currentTime.toLocaleTimeString()}
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar