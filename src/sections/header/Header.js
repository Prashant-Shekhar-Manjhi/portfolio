import React, {useState} from 'react'
import logo from "./../../logo/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Header.css"

export default function Header() {
  const [open, setOpen] = useState(false);
  const navMenuHandler = ()=>{
      setOpen(!open);
  }
  return (
    <header className={open ? "header nav-open" : 'header'}>
      <a href="/">
        <img className="logo" alt="logo" src={logo} />
      </a>

      <nav className="main-nav" onClick={navMenuHandler}>
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

      <button className="btn-mobile-nav"onClick={navMenuHandler} >
        <MenuIcon className="icon-mobile-nav open-nav"/>
        <CloseIcon className="icon-mobile-nav close-nav"/>
      </button>
    </header>
  )
}
