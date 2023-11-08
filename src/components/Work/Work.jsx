import React from 'react';
import style from "./Work.module.css";
import { Link } from 'react-router-dom';

const Galeria = () => {
  return (
    <div className={style.GaleriaConteiner}>
      <div className={style.proyect}>
        <div className={style.projectName}>
          <p>ElNorteCultiva</p>
        </div>
        <div className={style.projectDetails}>
          <div className={style.workMembers}>
            <p>WM*<i className={`bi bi-arrows ${style.icon}`}></i>1</p>
          </div>
          <div className={style.workAreas}>
            <p>UX/UI design</p>
            <p>Front DEV</p>
            <p>Back DEV</p>
          </div>  
        </div>
      </div>


      <div className={style.proyect}>
        <div className={style.projectName}>
          <p>JobPortalX</p>
        </div>
        <div className={style.projectDetails}>
          <div className={style.workMembers}>
            <p>WM*<i className={`bi bi-arrows ${style.icon}`}></i>1</p>
          </div>
          <div className={style.workAreas}>
            <p>UX/UI design</p>
            <p>Front DEV</p>
          </div>  
        </div>
      </div>


      <div className={style.proyect}>
      <div className={style.projectName}>
          <p>PokemonsApp</p>
        </div>
        <div className={style.projectDetails}>
          <div className={style.workMembers}>
            <p>WM* <i className={`bi bi-arrows ${style.icon}`}></i> 1</p>
          </div>
          <div className={style.workAreas}>
            <p>UX/UI design</p>
            <p>Front DEV</p>
            <p>Back DEV</p>
          </div>  
        </div>
      </div>

      <div className={style.proyect}>
        <Link to="projects" className={style.Link}>
          <p className={style.viewMore}>view all proyects <i className={`bi bi-arrows-angle-expand ${style.iconExpand}`}></i></p>
        </Link>
      </div>
    </div>
  )
}

export default Galeria;