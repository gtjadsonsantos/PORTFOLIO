import React, { useState } from 'react';
import config  from '../../Utils/config'
import Card from '../Card'
import './styles.css'


function Section() {
    const [type, setType] = useState(config.projects.__all.map(item => (item)))
    
    return (
        <>
            <div di="containerSection" className="containerSection">
                <ul id="containerNavigationSection">
                    <li onClick={() => setType(config.projects.__all.map(item => (item)))} > ALL</li>
                    <li onClick={() => setType(config.projects.__web.map(item => (item)))} ><i className="fas fa-window-maximize"></i> WEB</li>
                    <li onClick={() => setType(config.projects.__android.map(item => (item)))} ><i className="fab fa-android"></i> ANDROID</li>
                    <li onClick={() => setType(config.projects.__ios.map(item => (item)))} ><i className="fab fa-apple"></i>IOS</li>
                    <li onClick={() => setType(config.projects.__desktop.map(item => (item)))} ><i className="fas fa-desktop"></i>DESKTOP</li>
                </ul>
                <div id="containerProjects">
                    {
                        type.map(item => ( <Card url={item.url} img={item.img} /> ))
                    }
                </div>
            </div>
        </>
    )
}

export default Section;
