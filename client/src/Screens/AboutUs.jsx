import React from "react";
import Layout from "../Components/Layout";

export default function AboutUs() {
  return (
    <Layout>
      <div>
        <h2 className="about-headline">
          <span className="headline3">
            <b className="color3">Quienes</b>
            Somos
          </span>
        </h2>

        <div className="p-text">
          <p className="about-t">
            Somos un programa privado legalmente constituida en la ciudad de
            Nueva York desde el año 2013, conformada por un grupo de
            profesionales voluntarios con 30 años de experiencia. En nuestro programa creemos que una familia
            armónica nos proveerá de una mejor sociedad.
          </p>
          <br />
          <p className="about-t">
            PIRAMIDE es un programa cuya filosofía es enseñar a las familias
            hispanas a entender situaciones en las cuales los padres y los niños
            se comportan en forma inadecuada causando descontento en cada uno de
            los miembro del hogar, convirtiéndolo en un hogar disfuncional.
          </p>
        </div>

        <div className="about-container">
          <div className="about-section">
            <div className="about-row">
              <div className="about-cell a1">
                
                  <h4 className="about-h4">¿Por qué el nombre de Pirámide?</h4>
                  <p className="about-p">
                    Su nombre se debe a que trabajamos con los 3 ángulos del
                    individuo. La persona, su ambiente y la sociedad.
                  </p>
                  <br />

                  <h4 className="about-h4">Misión</h4>
                  <p className="about-p">
                    Tener la mayor cantidad de padres felices, restableciendo
                    sus familias en hogares funcionales dentro y fuera de
                    Estados Unidos.
                  </p>
                  <br />

                  <h4 className="about-h4">Visión</h4>
                  <p className="about-p">
                  Llegar a los padres y producir cambios substanciales para
                  lograr una mejor comunicación entre padres e hijos y crear
                  un mejor ambiente familiar sin maltratos ni violencia.
                  </p>
                <br/>
                
                  <h4 className="about-h4-ob">Objetivos</h4>
                  <p className="about-p">
                  • Los padres deben conocer los pasos que le permitan reconstruir sus hogares.
                  </p>
                <p className="about-p">• Los padres entenderán y aprenderán cómo funciona la relación Hogar -Escuela-Sociedad.</p>

                <p className="about-p">• Los padres conocerán la manera eficaz de los reforzamientos y el uso adecuado para aumentar conductas.</p>
                

              </div>

              <div className="about-cell a2">
              <img
                src="https://i.imgur.com/MiczYRs.png"
                alt="Nosotros"
                className="nosotros-img"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
