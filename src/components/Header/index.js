import React, { useEffect } from 'react';
import './styles.css'

import config from '../../Utils/config'


function Header() {
    useEffect(() => {
        document.title = config.person.name + " - Portfolio"
       const favicon =  document.querySelectorAll('link')[0]
       favicon.setAttribute('rel',"icon")
       favicon.setAttribute('href',config.person.icon)

        document.querySelector('head').appendChild(favicon)
    }, [])
    return (
        <header id="containerHeader" className="containerHeader">
            <ul id="menu-navigation-header" >
                <li>
                    <a href="#containerHeader" className="fas fa-home"></a>
                </li>
                <a href="#containerSection">
                    <li>PORTFOLIO</li>
                </a>
                <a href="#containerAbout">
                    <li>ABOUT</li>
                </a>
                <a href="#containerServices">
                    <li>SERVICES</li>
                </a>
            </ul>
            <div id="content-header">
                <img id="picture-profile" src={config.person.img} alt="picture profile" />
                <h1>{config.person.name}</h1>
                <h3>{config.person.role}</h3>
                <hr />
            </div>
            <div id="social">
                <a href={config.social.instagram}>
                    <i className="fab fa-instagram" id="instagram"></i>
                </a>
                <a href={config.social.github}>
                    <i className="fab fa-github" id="github"></i>
                </a>
                <a href={config.social.facebook}>
                    <i className="fab fa-facebook-f" id="facebook"></i>
                </a>
                <a href={config.social.linkegin}>
                    <i className="fab fa-linkedin-in" id="linkedin"></i>
                </a>
            </div>
        </header>
    )
}

export default Header;
