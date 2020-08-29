import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trans } from "react-i18next";


function Header() {

    const handleOnClick = () => {
        document.querySelector("#hamburger-checkbox").checked = false;
    };


    return (
        <>
            <NavLink to="/" className="cruz-logo">
                <img src={ require('../../assets/images/logo_cruz.png') } alt="cruz-logo"/>
            </NavLink>
            <input type="checkbox" id="hamburger-checkbox" className="collapse-checkbox" />
            <label htmlFor="hamburger-checkbox">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <header className="cruz-header">
                <nav className="header-menu">
                    <ul>
                        <li> <NavLink to="home" onClick={handleOnClick}> <Trans>label.menu.home</Trans> </NavLink> </li>
                        <li> <NavLink to="team" onClick={handleOnClick}> <Trans>label.menu.team</Trans> </NavLink> </li>
                        <li> <NavLink to="contact" onClick={handleOnClick}> <Trans>label.menu.contact</Trans> </NavLink> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header