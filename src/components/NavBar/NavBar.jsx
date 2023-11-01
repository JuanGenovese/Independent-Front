import React from 'react';
import style from "./NavBar.module.css";
import { Link } from 'react-router-dom';
import Contact from '../../views/Contact/Contact';
import { useOnClickOutSide } from '../../hooks/oseOnClickOutSide';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contextMenuRef = React.useRef(null);
  const closeContant = () => {
    setIsOpen(false);
  };
  useOnClickOutSide(contextMenuRef, closeContant);
  return (
    <div className={style.NavConteiner}>
      <h1 className={style.title}>IndependenT</h1>
      <div className={style.buttonsMid}>
        <Link to="#galeria">
          <button className={style.buttonMid1}>services</button>
        </Link>
        <Link to="#servicios">
          <button className={style.buttonMid2}>galery</button>
        </Link>
        <Link to="#equipo">
          <button className={style.buttonMid3}>team</button>
        </Link>


      </div>
      <div className={style.contactConteiner}>
        <button className={style.contactButton} onClick={() => setIsOpen(true)}>contact</button>
        {isOpen && <Contact contextMenuRef={contextMenuRef} closeContant={closeContant} />}
      </div>
    </div>
  )
}

export default NavBar