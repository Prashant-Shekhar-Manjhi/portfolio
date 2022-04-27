import React from 'react'
import logo from "./../../logo/logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" alt="logo" src={logo} />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#hero">Home</a></li>
          <li><a className="main-nav-link" href="#about">About</a></li>
          <li>
            <a className="main-nav-link" href="#resume">Resume</a>
          </li>
          <li><a className="main-nav-link" href="#project">Projects</a></li>
          {/* <li><a class="main-nav-link" href="#blog">Blog</a></li> */}
          <li><a className="main-nav-link" href="#contact">Contact</a></li>
          <li><a className="main-nav-link nav-cta" href="#cta">Hire me</a></li>
        </ul>
      </nav>

      {/* <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button> */}
    </header>
  )
}
