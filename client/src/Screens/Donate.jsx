import React from "react";
import Layout from "../Components/Layout";

export default function Donate() {
  return (
    <Layout>
      <div>
        <h2 className="donate-headline1">
          <span className="headline-donate">
            <b className="color-donate">Haga Una</b>
            Donación
          </span>
        </h2>
        <div className="donate-container">
          <div className="donate-section">
            <div className="donate-row">
              <div className="donate-cell a1">
                <h4 className="howto-donate">Como Hacer Una Donación</h4>
                <p className="donate-p">
                  Organizaciónes que quieran participar en una conferencia
                  gratis sobre el tabaco y sus efectos, ponerse en contacto con
                  la organización Piramide Guia Para Padres. Esperamos de
                  ustedes que puedan contribuir con la compra de 50 libros para
                  distribuir entre sus participantes.
                </p>

                <div className="donate-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.amazon.com/Guia-conocer-tabaco-efectos-Spanish/dp/1546796800"
                  >
                    Doné Aquí!
                  </a>
                </div>

                <h4 className="author-bio"> Biografia De La Autora</h4>

                <p className="about-author1">
                  En el 2001, Juana Díaz empezo en el programa de “Smoking
                  Cesation” hasta 2010 en el Hospital Lincoln, en el Bronx. Ha
                  creado varios brochures y una guía para conocer el tabaco y
                  sus efectos, así como otros materiales educativos. También
                  colaboró junto al VIP del hospital Lincoln en un programa de
                  radio para la comunidad hispana sobre el tema del tabaquismo.
                </p>
                <p className="about-author2">
                  Proveemos consejería para educar los clientes fumadores y convertirlos en
                  agentes multiplicadores para ayudar a otros a dejar de fumar.
                  Fundó la graduación de los que han logrado mantener la
                  abstinencia al tabaco como una manera de reconocimiento y motivación al
                  esfuerzo realizado por los clientes.
                </p>
                <p className="about-author3">
                  Esa experiencia la hizo crear y llevar hasta Santo Domingo la
                  ”Fundación Pirámide” para educar en su país sobre los efectos de fumar, que
                  afecta tanto a su salud como a su economía.
                </p>
              </div>
              <div className="donate-cell a2">
                <img
                  src="https://i.imgur.com/U3B3WtT.png"
                  alt="Book Image"
                  className="donate-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
