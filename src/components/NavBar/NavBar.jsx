import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnClickOutSide } from '../../hooks/oseOnClickOutSide';

import Contact from '../../views/Contact/Contact';
import style from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const closeContact = () => {
    setIsOpen(false);
  }

  useOnClickOutSide(contextMenuRef, closeContact);

  return (
    <div className={style.NavConteiner}>

      <h1 className={style.title}>IndependenT</h1>

      <div className={style.buttonsMid}>
        <Link to="#galeria" className={style.Link}>
          <button className={style.buttonMid1}>services</button>
        </Link>
        <Link to="#servicios" className={style.Link}>
          <button className={style.buttonMid2}>works</button>
        </Link>
        <Link to="#equipo" className={style.Link}>
          <button className={style.buttonMid3}>team</button>
        </Link>
      </div>

      <div className={style.contactConteiner}>
        <button className={style.contactButton} onClick={() => setIsOpen(true)}>contact</button>
        {isOpen && <Contact contextMenuRef={contextMenuRef} closeContant={closeContact} />}
      </div>

    </div>
  )
}

export default NavBar