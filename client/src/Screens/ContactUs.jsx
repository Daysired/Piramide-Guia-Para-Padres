import React from "react";
import Layout from "../Components/Layout";

export default function ContactUs() {
  return (
    <Layout>
      <div >
        <h2 className="contact-us">
          <span className="headline-contact-us">
            <b className="color-contact-us">Contactenos</b>
            Hoy!
          </span>
        </h2>
        <div className="contact-form">
          <div className="contact-img">
            <img className="img-banner" src="https://i.imgur.com/VTuX6Vk.png" alt="Piramide Banner"/>
          </div>
          <div className="form-container">
        <div className="contact-us-text">
          <p className="contact-p1">
            Envíe este breve formulario para programar una cita
            gratuita o si tiene alguna pregunta sobre nuestros servicios. Su
            correspondencia es confidencial y será respondida dentro de las
            proximas 24 horas.
          </p>
          <p className="contact-p2">Esperamos conectarnos con usted.</p>
        </div>

          
          <p className="p-input1">
          <input className="input1" placeholder="Nombre" />
          </p>

          <p className="p-input2">
            <input className="input2" placeholder="Correo Electronico" />
          </p>

          <p className="p-input3">
          <input className="input3" placeholder="Telefono" />
          </p>

          <p className="p-input4">
          <textarea className="input4" placeholder="Mensaje" />
          </p>

          <button className="submit-btn">Enviar</button>
            </div>
        </div>
      </div>
    </Layout>
  );
}
