import { React, useState } from 'react';
import '../css/mobile-menu.css';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Mobilemenu() {

    const [close, setClose] = useState(true)

    return (
        <div className="menu">
            <div className="menu-bar">
                <Sidebar style={{ width: "85%", borderRadius: "4rem", }}>
                    <Menu>
                        <SubMenu
                            onClick={() => setClose(!close)}
                            label={<FontAwesomeIcon style={{ fontSize: "2rem" }}
                                icon={close ? faBars : faCircleXmark} />}
                        >
                            <MenuItem component={<NavLink to="/" />}>
                                About
                            </MenuItem>
                            <MenuItem component={<NavLink to="/resume" />}>
                                Resume
                            </MenuItem>
                            <MenuItem component={<NavLink to="/projects" />}>
                                Projects
                            </MenuItem>
                            <MenuItem component={<NavLink to="/hobby" />}>
                                Hobbies
                            </MenuItem>
                            <MenuItem component={<NavLink to="/contact" />}>
                                Contact
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </div>
        </div>
    )
}

export default Mobilemenu;
