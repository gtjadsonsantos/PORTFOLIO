import React from 'react';
import config from '../../Utils/config'
import './styles.css'

function Services() {
  return (
    <div id="containerServices" className="containerServices">
      {
        config.services.map(service => (
          <section key={Math.random() * 1000}>
            <i className={service.icon}></i>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </section>
        ))
      }
    </div>
  )
}

export default Services;