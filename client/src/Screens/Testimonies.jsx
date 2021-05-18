import React from "react";
import Layout from "../Components/Layout";

export default function Testimonies() {
  return (
    <Layout>
      <div>
        <h2 className="testimony-headline">
          <span className="headline4">
            <b className="color4">Nuestros</b>
            Testimonios
          </span>
        </h2>


        <div className="row2">
          <div className="testimony">
            <h4 className="testimony-name">Denise Santos, Consultant</h4>
            <p className="p-testimony">Soy madre de dos niñas, una de 11 y otra de 8 años.
En Septiembre de 2009 en Santo Domingo,Republica Dominicana y 
en Octubre del 2014 en Orlando Florida, participé en el curso para 
padres con Pirámide. Yo siento que la información recibida durante 
el entrenamiento fue de gran ayuda para mi y mi familia. Nuestra 
comunicación familiar es muy buena y se refleja en la escuela de las niñas.
Utilizo muy bien las estrategias aprendidas a la hora de comunicarme
 o disciplinar a mis hijas. Me siento muy orgullosa por la 
preparación que recibí en Pirámide Guía Para Padres.</p>

          </div>
          <div className="testimony-pic">
            <img src="https://piramideguiaparapadres.com/wp-content/uploads/2020/08/Denise-Santos-120x120-1.png" alt="Image of Denise Santos" className="testimony-img"/>
          </div>
        </div>

        <div className="row">
          <div className="testimony">
            <h4 className="testimony-name">Jose Garcia</h4>
            <p className="p-testimony">
              Soy padre de tres hijos, dos varones y una hembra. Mi esposa y yo
              participamos en el taller que ofreció Pirámide Guía Para Padres en
              Orlando, Florida en el año 2014. Esta fue una experiencia
              inolvidable, ahora mi familia y yo estamos comunicándonos mucho
              mejor y hemos planeado juntos una reunion cada semana para hablar
              de cada uno en particular y planificar actividades juntos. Esa
              armonía que se siente en mi casa también se refleja en la escuela
              de mis hijos. Gracias a Pirámide por sus enseñanzas.
            </p>
          </div>
          <div className="testimony-pic">
            <img
              src="https://piramideguiaparapadres.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-06-01-at-11.07.50-120x120-1.jpeg"
              alt="Image of Jose Garcia"
              className="testimony-img"
            />
          </div>
        </div>

        <div className="row3">
          <div className="testimony">
            <h4 className="testimony-name">Jose Tejada
</h4>
            <p className="p-testimony">En el año 2009 en Santo Domingo Republica Dominicana participe del 
taller del Pirámide Guía Para Padres y ese aprendizaje me proporciono 
las técnicas mas modernas para disciplinar a mi nieta sin maltrato.
Hoy puedo recomendar a los padres o abuelos que se den la oportunidad 
de apredender técnicas tan importantes para disciplinar nuestros
 hijos o nietos.</p>

          </div>
          <div className="testimony-pic">
            <img src="https://piramideguiaparapadres.com/wp-content/uploads/2020/08/Jose-Tejada-120x120-1.png" alt="Image of Jose Tejada" className="testimony-img3"/>
          </div>
        </div>

        

      </div>
    </Layout>
  );
}
