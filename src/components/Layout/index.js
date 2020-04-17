import React from 'react';

import './styles.css'

import Header from '../Header'
import Section from '../Section'
import Services from '../Services'
import About from '../About'

function Layout() {
    return (
        <div className="containerLayout">
            <Header />
            <Section />
            <Services />
            <About />
        </div>
    )
}

export default Layout;
