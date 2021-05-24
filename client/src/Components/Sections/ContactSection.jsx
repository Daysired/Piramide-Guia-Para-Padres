import React from "react";

export default function ContactSection() {
  return (
    <div>
      <div className="c-container">
        <div className="c-section">
          <div className="c-row">
            <div className="contact-cell c1">
              <h3 className="c-h3">Contacto</h3>
              <div className="icons">
                <i class="fas fa-phone-alt"> (917) 497-9497</i>
              </div>
              <div className="icons">
                <a href="mailto: contacto@piramideguiaparapadres.com">
                  <i class="far fa-envelope">
                    {" "}
                    contacto@piramideguiaparapadres.com
                  </i>
                </a>
              </div>

              <div className="icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100004612068637"
                >
                  <i class="fab fa-facebook-square">
                  {" "}
                    Piramide Guia Para Padres
                  </i>
                </a>
              </div>

              <div className="icons">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_piramide_guia_para_padres/">
                  <i class="fab fa-instagram"> Piramide Guia Para Padres</i>
                </a>
              </div>

              <div className="icons">
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCJBd6qZuiINxUSYWuXqBqnA">
                  <i class="fab fa-youtube"> Piramide Guia Para Padres</i>
                </a>
              </div>
            </div>

            <div className="contact-schedule">
              <h3 className="schedule-headline">Horario De Trabajo</h3>
              <table style={{ width: "30vw" }}>
                <tr>
                  <th>Lunes</th>
                  <td>9:00AM-6:00PM</td>
                </tr>

                <tr>
                  <th rowspan="1">Martes</th>
                  <td>9:00AM-6:00PM</td>
                </tr>

                <tr>
                  <th rowspan="1">Miercoles</th>
                  <td>9:00AM-6:00PM</td>
                </tr>

                <tr>
                  <th rowspan="1">Jueves</th>
                  <td>9:00AM-6:00PM</td>
                </tr>

                <tr>
                  <th rowspan="1">Viernes</th>
                  <td>9:00AM-6:00PM</td>
                </tr>

                <tr>
                  <th rowspan="1">Sabado</th>
                  <td>Cerrado</td>
                </tr>

                <tr>
                  <th rowspan="1">Miercoles</th>
                  <td>Cerrado</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
