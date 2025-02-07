import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import WebLogo from "../../assets/CampusChimePurple.png";
import '../User Setting Page/UserSettingPage.css';

class UserSettingPage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Navbar
                    className="navbar bg-dark border-bottom border-body"
                    data-bs-theme="dark"
                >
                    <Container style={{ marginLeft: "-10px" }}>
                        <Navbar.Brand as={Link} to="/HomePage">
                            <img
                                src={WebLogo}
                                alt="CampusChime Logo"
                                style={{ width: "80px" }}
                            />
                            CampusChime
                        </Navbar.Brand>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/HomePage">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/AboutUsPageLogin">
                                    About Us
                                </Nav.Link>
                                <Nav.Link as={Link} to="/EntrepreneurPage">
                                    Entrepreneur
                                </Nav.Link>
                            </Nav>
                        </div>

                    </Container>
                </Navbar>

                <div style={{width: '60%', position: 'relative', left: '23%'}}>
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default UserSettingPage