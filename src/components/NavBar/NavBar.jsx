import React from 'react';
import style from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={style.NavConteiner}>
      <h1 className={style.title}>IndependenT</h1>
      <div className={style.buttonsMid}>
        <button className={style.buttonMid1}>proyectos</button>
        <button className={style.buttonMid2}>noticias</button>
        <button className={style.buttonMid3}>equipo</button>
      </div>
      <div className={style.contactConteiner}>
        <button className={style.contactButton}>contactanos</button>
      </div>
      
    </div>
  )
}

export default NavBar