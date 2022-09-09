import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Online Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="components/about-me">About Me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
    export default NavigationBar

/*<nav className="py-3 navbar navbar-expand-lg sticky-top auto-hiding-navbar navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="#">Online Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="index.html">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="resume.html">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" rel="noopener noreferrer"
                       href="https://github.com/0bscurity">Github</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        Projects
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Project 1</a></li>
                        <li><a className="dropdown-item" href="#">Project 2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}*/

