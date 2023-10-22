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
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit non ut eveniet quas provident accusamus, expedita alias libero odio perferendis neque obcaecati adipisci, itaque sed repellendus suscipit laudantium? Laudantium, totam.</p>
        </div>
        <div className={style.imagen2}></div>
      </div>
      <div className={style.equipo}>
        <div className={style.teamMember}>
          <div className={style.teamMemberData}>
            <h3> Juan Cruz Genovese</h3>
            <p><span>FullStack</span><span>web</span><span>developer</span></p>
          </div>
        </div>
        <div className={style.teamMember}>
          <div className={style.teamMemberData}>
            <h3> Juan Cruz Genovese</h3>
            <p><span>FullStack</span><span>web</span><span>developer</span></p>
          </div>
        </div>
        <div className={style.teamMember}>
          <div className={style.teamMemberData}>
            <h3> Juan Cruz Genovese</h3>
            <p><span>FullStack</span><span>web</span><span>developer</span></p>
          </div>
        </div>
        <div className={style.teamMemberBottom}>
          <div className={style.teamMemberData}>
            <h3> Juan Cruz Genovese</h3>
            <p><span>FullStack</span><span>web</span><span>developer</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Equipo