import React from 'react';
import style from "./Servicios.module.css";

const Servicios = () => {
  return (
    <div className={style.serviciosConteiner}>
      <div className={style.UXUIConteiner}><p>UX/UI design</p></div>
      <div className={style.FrontEndConteiner}><p>FrontEnd development</p></div>
      <div className={style.BackEndConteiner}><p>BackEnd development</p></div>
    </div>
  )
}

export default Servicios