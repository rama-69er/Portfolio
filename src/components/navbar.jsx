import { NavLink } from "react-router-dom";
import "../css/app.css";

function Navbar() {
    return (
        <>
            <nav className="navbar py-0">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="theme-btn btn" to="/">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn btn" to="/resume">
                            Resume
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn btn" to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn btn" to="/hobby">
                            Hobbies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="theme-btn btn" to="/contact">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;