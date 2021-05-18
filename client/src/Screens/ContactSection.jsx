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
                <i class="far fa-envelope">
                  {" "}
                  contacto@piramideguiaparapadres.com
                </i>
              </div>

              <div className="icons">
                <i class="fab fa-facebook-square"> Piramide Guia Para Padres</i>
              </div>

              <div className="icons">
                <i class="fab fa-instagram"> Piramide Guia Para Padres</i>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
