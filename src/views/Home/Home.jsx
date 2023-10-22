import React from 'react'
import style from "./Home.module.css"

const Home = () => {
  return (
    <div className={style.homeConteiner}>
      <div className={style.presentacion}>
        <div className={style.ilustracion}>
          Hola, soy la ilustracion
        </div>
        <div className={style.slogan}>
          <h1>Make your business</h1>
        <h1>online</h1>
        </div>
        
      </div>
        
    </div>
  )
}

export default Home;