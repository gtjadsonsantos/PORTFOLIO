import React from "react";

import "./styles.css";

import Header from "../Header";
import Section from "../Section";
import Services from "../Services";
import About from "../About";
import Notification from "../Notification";

function Layout() {
    return (
        <div className="containerLayout">
            <Notification/>
            <Header />
            <Section />
            <Services />
            <About />
        </div>
    );
}

export default Layout;
