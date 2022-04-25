import React from 'react'
import logo from "./../../logo/logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header class="header">
      <a href="/">
        <img class="logo" alt="Omnifood logo" src={logo} />
      </a>

      <nav class="main-nav">
        <ul class="main-nav-list">
          <li><a class="main-nav-link" href="#hero">Home</a></li>
          <li><a class="main-nav-link" href="#about">About</a></li>
          <li>
            <a class="main-nav-link" href="#resume">Resume</a>
          </li>
          <li><a class="main-nav-link" href="#project">Projects</a></li>
          <li><a class="main-nav-link" href="#contact">Contact</a></li>
          <li><a class="main-nav-link nav-cta" href="#cta">Hire me</a></li>
        </ul>
      </nav>

      {/* <button class="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button> */}
    </header>
  )
}
