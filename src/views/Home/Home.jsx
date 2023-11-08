import React from 'react'
import { Work, Servicios, Equipo } from '../../components/IndexComponents'
import style from "./Home.module.css"

const Home = () => {
  return (
    <div className={style.homeConteiner}>
      <div className={style.presentacion}>
        <div className={style.ilustracion}>
          <img src="/ilustracion2.png" alt="ilustracion" />
        </div>
        <div className={style.slogan}>
          <h1>Do your <span className={style.span}>business</span></h1>
          <h1>we <span className={style.span}>code</span> it</h1>
        </div>
      </div>
      <Servicios/>
      <Work/>
      <Equipo/>
    </div>
  )
}

export default Home;