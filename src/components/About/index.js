import React from "react";

import config from "../../Utils/config";

import "./styles.css";

function About() {
  return (
    <div id="containerAbout">
      <div id="myabout">
        <h3><i className="fas fa-user-alt"></i> Sobre mim</h3>
        <p>{config.about.description.text}</p>
      </div>
      <div id="container-work-scholl">
        <div id="work">
          <h3>
            <i className="fa fa-building" />
            Trabalhos
           </h3>
          {
            config.about.works.map(work => (
              <div  key={Math.random() * 1000}  className="works" >
                <h4>{work.role}</h4>
                <p>{work.company}</p>
                <p>{`${work.initYear}-${work.exitYear}`}</p>
              </div>
            ))
          }
        </div>
        <div id="scholl">
          <h3>
            <i className="fa fa-school"></i>
            Escolas
          </h3>
          {
            config.about.scholl.map(scholl => (
              <div  key={Math.random() * 1000}  className="works" >
                <h4>{scholl.course}</h4>
                <p>{scholl.company}</p>
                <p>{`${scholl.initYear}-${scholl.exitYear}`}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default About;