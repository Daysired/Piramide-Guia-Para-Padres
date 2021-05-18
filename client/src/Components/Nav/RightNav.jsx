import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

    li  {
      padding: 25px 18px;
      color: #fff;
      font-weight: bold;
      text-decoration: none;


      a  {
        color: #fff;
        font-weight: bold;
        text-decoration: none;

        &:hover {
          color: 	#FFD700;
        }
      }
     }
    
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background-color: #fff;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      padding-top: 2.5rem;
      transition: transform 0.3s ease-in-out;
      align-items: center;
      justify-content: center;

      li {
        padding: 30px;
        text-decoration: none;
        color: 	#000000;

        a {
          text-decoration: none;
        color: 	#000000;
        }
        &:hover {
          color: #0089FF;
        }
      }
    }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">
          Inicio
        </a>
      </li>

      <li>
        <a href="/nosotros">
          Nosotros
        </a>
      </li>

      <li>
        <a href="/servicios">
          Servicios
        </a>
      </li>
      
      <li>
      <a href="/eventos">
      Eventos
        </a>
      </li>
      
      <li>
      <a href="/donar">
      Donar
        </a>
        </li>
      
      <li>
        <a href="/contacto">
        Contacto
        </a>
         
      </li>
      
      </Ul>
  )
}

export default RightNav
