import React from 'react'

export default function FooterSection() {
  return (
    
      <section className="footer">
      <div className="footer-icons">
        <div className="e-mail">
          <a href="mailto: contacto@piramideguiaparapadres.com">
          <i class="far fa-envelope"></i>
          </a>
        </div>
        <div className="facebook">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100004612068637">
          <i class="fab fa-facebook-square"></i>
          </a>
        </div>
        <div className="insta">
          <a
            target="_blank"
            rel="noreferrer"
            href="">
          <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
