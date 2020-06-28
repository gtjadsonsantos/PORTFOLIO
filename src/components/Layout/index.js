import React, {useEffect} from "react";

import "./styles.css";

import Header from "../Header";
import Section from "../Section";
import Services from "../Services";
import About from "../About";
import Notification from "../Notification";
import Themes from "../Themes/index";
import Anuncio from "../Anuncio";

function Layout() {
    useEffect(()=>{
        Themes();
    },[]);
    return (
        <div className="containerLayout">
            <Notification/>
            <Header />
            <Section />
            <Services />
            <About />
            <Anuncio />
        </div>
    );
}

export default Layout;
