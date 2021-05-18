import React from "react";

export default function Team() {
  return (
    <div>
      <div className="text-div">
        <h2 className="team-headline">
          <span className="headline2">
            <b className="color2">Nuestro</b>
            Equipo
          </span>
        </h2>
        <p className="team-text">
          Los miembros de Pirámide Guia para Padres, se dedican a brindar
          asesoría con gran profesionalismo. Los padres Hispanos son el primer
          enfoque de nuestra organización.
        </p>
      </div>
      <div className="pic-container">
        <div className="pics">
          <div className="pics-row">
            <div className="pic-cell-pic1">
              <img
                src="https://i.imgur.com/hKxhEuq.png"
                alt="Juana Diaz"
                className="img1"
              />
              <div className="jd-bio">
                <h3 className="h3-bio1">Juana Díaz</h3>
                <h4 className="h4-bio1">
                  PRESIDENTE Y FUNDADORA 
                </h4>
                <p className="p-bio1">
                  Psicóloga clínica, educadora de salud pública, educadora de
                  padres
                </p>
              </div>
            </div>

            <div className="pic-cell pic2">
              <img
                src="https://i.imgur.com/BmkvUlD.png"
                alt="Rosa Flores de Baez"
                className="img2"
              />
              <div className="rf-bio">
                <h3 className="h3-bio2">Rosa Florez de Baez</h3>
                <h4 className="h4-bio2">VOLUNTARIA</h4>
                <p className="p-bio2">
                  Psicóloga clínica, master en clínica infantil, diplomado en
                  abuso infantil, trabajo social.
                </p>
              </div>
            </div>

            <div className="pic-cell pic3">
              <img
                src="https://i.imgur.com/SQYEfCl.png"
                alt="Marcelo Villagran"
                className="img3"
              />
              <div className="mv-bio">
                <h3 className="h3-bio3">Marcelo Villagran</h3>
                <h4 className="h4-bio3">VOLUNTARIO</h4>
                <p className="p-bio3">BA Biología de salud Pública</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
