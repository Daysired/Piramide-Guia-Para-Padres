import React from "react";

export default function FooterSection() {
  return (
    <section className="footer">
      <div className="footer-icons">
        <p className="footer-text">
          Copyright by Piramide Guía Para Padres 2020. All rights reserved.
        </p>
        <div className="e-mail">
          <a href="mailto: piramideguiaparapadrescontacto@gmail.com">
            <i class="far fa-envelope"></i>
          </a>
        </div>
        <div className="facebook">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100004612068637"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
        <div className="insta">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_piramide_guia_para_padres/">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <div className="tube">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCJBd6qZuiINxUSYWuXqBqnA"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
