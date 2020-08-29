import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="cruz-footer">
                <section className="links-footer">
                    <li><a href="https://www.linkedin.com/company/association-la-cruz/" target="_blank" rel="noopener noreferrer" aria-label="Link to our linkedin page"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/LA-CRUZ" target="_blank" rel="noopener noreferrer" aria-label="Link to our github page"><i className="fab fa-github"></i></a></li>
                    <li><a href="mailto:contact@lacruz.org" target="_blank" rel="noopener noreferrer" aria-label="Link to our mail"><i className="fas fa-envelope"></i></a></li>
                </section>
                <section className="copyright">
                    <p><Link to="/mentions">Mentions légales </Link> - © La Cruz<span><img src={require('../../assets/images/logo_cruz.png')} alt="logo cruz" /></span></p>
                </section>
            </div>
        </footer>
    )
}

export default Footer