import React from "react";
import Layout from "../Components/Layout";

export default function Services() {
  return (
    <Layout>
      <div>
      <h2 className="services">
          <span className="headline-services">
            <b className="color-services">Nuestros</b>
            Servicios
          </span>
        </h2>

        <div className="service-text">
          <p className="service-p">
            <span className="span-services">
              Piramide Guia Para Padres ofrece ayuda a las familias hispanas atravez de conferencias, talleres y seciones de consejeria. Para aprender mas de nuestros servicios puede ir
            <a
                 target="_blank"
                 rel="noreferrer"
                 href="/contacto"
                className="color-span-services"> aquí.</a>
               Alli podra llenar y enviar un breve formulario para programar una consulta
            gratuita o si tiene alguna pregunta sobre nuestros servicios.
          </span>    
          </p>
        </div>

        <div className="services-column">
          <div className="conferences-s">
            <h4 className="c-column-h4">Conferencias</h4>
            <div className="conference-column-text">
              <p>Piramide Guia Para Padres ofrece conferencias educativas
              a organizaciónes que quieran participar. una hora de conferencia
              equivale $1,000 en costo, por la valiosa ayuda e informacion que
              proveemos.Ofrecemos conferencias virtuales y en persona, dejenos
                saber su preferencia.</p>
              <p className="service-prices">$1,000/1hr</p>
              <div className="buy-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=""
                  >
                    Pague Aqui
                  </a>
                </div>
            </div>
          </div>

          <div className="workshops-s">
            <h4 className="w-column-h4">Talleres</h4>
            <div className="workshop-column-text">
              <p>Piramide Guia Para Padres ofrece telleres educativos
              a organizaciónes que quieran participar. Los talleres son
              divididos en cinco sesiones, ofreciendo dos horas por cada
              sesion que equivale a un costo de $5,000.Ofrecemos los talleres
              virtuales y en persona, dejenos saber su preferencia.</p>
              <p className="service-prices">$5,000/5 sesiones</p>
              <div className="buy-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=""
                  >
                    Pague Aqui
                  </a>
                </div>
            </div>
          </div>

        
          <div className="counseling-s">
            <h4 className="counseling-column-h4">Consejeria</h4>
            <div className="counseling-column-text">
              <p>Piramide Guia Para Padres ofrece conserjeria a padres y
             organizaciónes que quieran participar. El tiempo de consejeria es entre 45 minutos a una hora que
                equivale a $100 en costo. Ofrecemos consejeria virtual y en persona, dejenos saber su preferencia.</p>
              <p className="service-prices">$100/45min-1hr</p>
              <div className="buy-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=""
                  >
                    Pague Aqui
                  </a>
                </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}
