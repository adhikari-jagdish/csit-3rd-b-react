import { Link } from "react-router-dom"


const NavBar = () => {
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
            </nav> 
        </>
    )
}

export default NavBar