import React from 'react';
import './Header.css';

import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {LanguageManager} from "../../managers/LanguageManager";
import {ModalManager} from "../../managers/ModalManager";

class Header extends React.Component {

    constructor(props) {
        super(props);
        LanguageManager.getInstance().subscribeToLang(this)
    }

    switchLang() {
        LanguageManager.getInstance().switchLanguage();
    }

    render() {
        return (
            <div className="Header">
                <Navbar bg="white" expand="sm">
                    <Navbar.Brand href="#home">
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="ejoi2020"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="NavbarContainer">
                        <Nav>
                            <NavDropdown title="EJOI2020" id="tournament-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    {LanguageManager.getInstance().getText('tournament.about')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    {LanguageManager.getInstance().getText('tournament.schedule')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    {LanguageManager.getInstance().getText('tournament.location')}
                                </NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item onClick={ () => ModalManager.getInstance().clickRegister()}>
                                        {LanguageManager.getInstance().getText('common.register')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">
                                {LanguageManager.getInstance().getText('common.about.tbilisi')}
                            </Nav.Link>
                            <Nav.Link onClick={ () => ModalManager.getInstance().clickRegister()}>
                                {LanguageManager.getInstance().getText('common.register')}
                            </Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="#link">
                                <img style={{width: "32px", height: "32px"}}
                                     onClick={() => this.switchLang()}
                                     src={process.env.PUBLIC_URL + LanguageManager.getInstance().icon}/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Header;
