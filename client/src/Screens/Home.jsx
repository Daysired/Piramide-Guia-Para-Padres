import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import ContactSection from "./ContactSection";
import Team from "./Team";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <section className="home-image">
          <span className="headline">
            <b className="color">GUÍA</b>
            PARA PADRES
          </span>
          <div className="subtitle">
            Los padres conocerán la manera eficaz de los reforzamientos y el uso
            adecuado para aumentar conductas apropiadas
          </div>

          <div className="btn-details">
            <Link
              to="/nosotros"
              className="text-details"
            >
              Más Detalles
              <em className="carrot">></em>
            </Link>
          </div>
        </section>

        <section className="boxes">
          <div className="container">
            <div className="box">
              <div className="box-row">
                <div className="box-cell box1">
                  <h3 className="about-box">Quienes Somos</h3>
                  <p className="about-text">
                    Aqui puede conocer nuestra organización
                  </p>
                  <div className="seemore-btn">
                    <Link to="/nosotros" className="seemore-text">
                      Ver Más
                    </Link>
                    <em className="open-carrot">></em>
                  </div>
                </div>

                <div className="box-cell box2">
                  <h3 className="box2-title">Servicios</h3>
                  <p className="box2-text">
                    Ofrecemos servicios en talleres, conferencias, y consejería
                  </p>
                  <div className="see-more-box2">
                    <Link to="servicios" className="text2">
                      Ver Más
                    </Link>
                    <em className="open-carrot2">></em>
                  </div>
                </div>

                <div className="box-cell box3">
                  <h3 className="box3-title">Testimonios</h3>
                  <p className="box3-text">
                    Aquí puede ver algunos testimonios de nuestros clientes
                    satisfechos
                  </p>
                  <div className="see-more-box3">
                    <Link to="/testimonios" className="text3">
                      Ver Más
                    </Link>
                    <em className="open-carrot3">></em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <Team />
    
        <ContactSection />
      </div>
    </Layout>
  );
}
