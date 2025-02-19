import { NavLink } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="theme-btn" to="/">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn" to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn" to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn" to="/hobby">
                            Hobbies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn" to="/contact">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;