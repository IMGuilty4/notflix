import React from 'react'
import logo from '@assets/images/logo.png';
import './Footer.sass';

function Footer() {
    return (
        <footer>
            <strong>
                <p>All Rights belong to their respective owner &copy;</p>
            </strong>
            <img
              style={{width: "200px"}}
              className="footer__logo"
              src={logo}
              alt="Notflix Logo"
              />
        </footer>
    )
}

export default Footer
