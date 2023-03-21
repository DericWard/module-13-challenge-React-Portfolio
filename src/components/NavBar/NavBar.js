import { NavLink } from "react-router-dom";

function NavBar () {
    return (

    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contactForm">Contact</NavLink>
    </nav>

    )
}

export default NavBar;