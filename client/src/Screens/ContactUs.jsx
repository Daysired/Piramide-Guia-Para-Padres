import React from "react";
import emailjs from "emailjs-com";
import Layout from "../Components/Layout";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99xi51u",
        "template_on6sslk",
        e.target,
        "R98vhBw2al6STI9Of"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Layout>
      <div>
        <h2 className="contact-us">
          <span className="headline-contact-us">
            <b className="color-contact-us">Contactenos</b>
            Hoy!
          </span>
        </h2>
        <div className="contact-form">
          <div className="contact-img">
            <img
              className="img-banner"
              src="https://i.imgur.com/VTuX6Vk.png"
              alt="Piramide Banner"
            />
          </div>
          <div className="form-container">
            <div className="contact-us-text">
              <p className="contact-p1">
                Envíe este breve formulario para programar una cita gratuita o
                si tiene alguna pregunta sobre nuestros servicios. Su
                correspondencia es confidencial y será respondida dentro de las
                proximas 24 horas.
              </p>
              <p className="contact-p2">Esperamos conectarnos con usted.</p>
            </div>

            <form  onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <p className="p-input1">
                <input
                  className="input1"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                />
              </p>
              <p className="p-input2">
                <input
                  className="input2"
                  type="text"
                  name="email"
                  placeholder="Correo Electronico"
                />
              </p>
              <p className="p-input3">
                <input
                  className="input3"
                  type="text"
                  name="phone"
                  placeholder="Telefono"
                />
              </p>
              <p className="p-input4">
                <textarea
                  className="input4"
                  name="message"
                  placeholder="Mensaje"
                />
              </p>
              <input className="submit-btn" type="submit" value="Enviar" />
            </form>

          </div>
        </div>
      </div>
    </Layout>
  );
}
