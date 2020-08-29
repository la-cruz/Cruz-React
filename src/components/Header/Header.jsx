import React, { useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Trans } from "react-i18next";

function Header() {
    const location = useLocation();

    useEffect( () => {
        if(location.pathname !== "/"){
          const logo = document.querySelector(".cruz-logo > img");
            if(window.innerWidth > 1200) {
              logo.style.width = "5%";
              logo.style.left = "5%";
              logo.style.top = "5%";
              logo.style.opacity = "1";
            } else if(window.innerWidth < 500) {
                var header = document.createElement("div");
                header.className = "header-responsive";
                document.body.appendChild(header);
      
                window.onscroll = function() {
                    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                        header.style.opacity = "1";
                    } else {
                        header.style.opacity = "0";
                    }
                }
            }
        }
      }, [location]);

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
                        <li> <NavLink exact to="/" onClick={handleOnClick}> <Trans>label.menu.home</Trans> </NavLink> </li>
                        <li> <NavLink exact to="team" onClick={handleOnClick}> <Trans>label.menu.team</Trans> </NavLink> </li>
                        <li> <NavLink exact to="contact" onClick={handleOnClick}> <Trans>label.menu.contact</Trans> </NavLink> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header