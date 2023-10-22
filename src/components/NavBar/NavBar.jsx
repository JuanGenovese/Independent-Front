import React from 'react';
import style from "./NavBar.module.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
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
        <button className={style.contactButton}>contact</button>
      </div>
      
    </div>
  )
}

export default NavBar