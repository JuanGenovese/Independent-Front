import React from 'react';
import style from "./Galeria.module.css";

const Galeria = () => {
  return (
    <div className={style.GaleriaConteiner}>
      <div className={style.proyectos}>
        <div className={style.proyecto1}> proyectos </div>
        <div className={style.proyecto2}> proyectos </div>
        <div className={style.proyecto3}> proyectos </div>
        <div className={style.proyecto4}> proyectos </div>
      </div>
        
    </div>
  )
}

export default Galeria;