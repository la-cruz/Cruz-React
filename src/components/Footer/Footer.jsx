import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Trans } from 'react-i18next'

function Footer() {
    const location = useLocation()

    useEffect(() => {
        if(location.pathname === "/" || location.pathname.includes("/projects/")) {
            document.querySelector(".links-footer").style.boxShadow = 'none';
        } else {
            document.querySelector(".links-footer").style.boxShadow = '0px -13px 20px -27px white';
        }
    }, [location])

    return (
        <footer>
            <div className="cruz-footer">
                <section className="links-footer">
                    <li><a href="https://www.linkedin.com/company/association-la-cruz/" target="_blank" rel="noopener noreferrer" aria-label="Link to our linkedin page"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/LA-CRUZ" target="_blank" rel="noopener noreferrer" aria-label="Link to our github page"><i className="fab fa-github"></i></a></li>
                    <li><a href="mailto:contact@lacruz.org" target="_blank" rel="noopener noreferrer" aria-label="Link to our mail"><i className="fas fa-envelope"></i></a></li>
                </section>
                <section className="copyright">
                    <p><Link to="/legal"><Trans>label.footer.legal</Trans> </Link> - © La Cruz<span><img src={require('../../assets/images/logo_cruz.png')} alt="logo cruz" /></span></p>
                </section>
            </div>
        </footer>
    )
}

export default Footer