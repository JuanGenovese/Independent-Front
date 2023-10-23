import React from 'react';
import style from "./Galeria.module.css";

const Galeria = () => {
  return (
    <div className={style.GaleriaConteiner}>
      <div className={style.proyectosFotos}>
        <img className={style.proyecto}/>
        <img className={style.proyecto}/>
        <img className={style.proyecto}/>
        <img className={style.proyecto}/>
      </div>
      
    </div>
  )
}

export default Galeria;