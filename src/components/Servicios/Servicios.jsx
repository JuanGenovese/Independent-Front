import React from 'react';
import style from "./Servicios.module.css";

const Servicios = () => {
  return (
    <div className={style.serviciosConteiner}>
      <div className={style.UXUIConteiner}>
        <div className={style.bg}>
          <p>UX/UI design</p>
        </div>
      </div>
      <div className={style.FrontEndConteiner}>
        <div className={style.bg}>
          <p>Front - End development</p>
        </div>
      </div>
      <div className={style.BackEndConteiner}>
        <div className={style.bg}>
          <p>Back - End development</p>
        </div>
        
      </div>
    </div>
  )
}

export default Servicios