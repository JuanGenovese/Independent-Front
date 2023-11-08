import React from 'react';
import style from "./Equipo.module.css";

const Equipo = () => {
  return (
    <div className={style.equipoConteiner}>
      <div className={style.equipoPresentacion}>
        <div className={style.imagen2}></div>
        <div className={style.cartel}>
          <h2>MEET</h2>
          <h2>OUR</h2>
          <h2>EXPERT</h2>
          <h2>TEAM</h2>
          <p>We have the best qualified professionals to capture all your ideas through technology while we customize software tools to help you grow your business.</p>
        </div>
        <div className={style.imagen2}></div>
      </div>
      <div className={style.equipo}>
        <div className={style.teamMember}>
          <div className={style.teamMemberData}>
            <h3 className={style.JuanCruz}> Juan Cruz</h3>
            <p><span>FullStack Dev</span><span>UX/UI Designer</span></p>
          </div>
        </div>
        <div className={style.teamMemberBottom}>
          <div className={style.teamMemberData}>
            <h3 className={style.Ulises}>Ulises</h3>
            <p><span>FullStack Dev</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Equipo