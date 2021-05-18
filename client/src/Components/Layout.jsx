import React from 'react'
import Nav from "./Nav/Navbar";
import Footer from "./Footer/Footer";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}