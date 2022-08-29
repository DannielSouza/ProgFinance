import React from 'react'
import MainGraph from './Graphics/MainGraph.js'
import MonthGraph from './Graphics/MonthGraph.js'
import style from './styles/Details.module.css'
import home from '../assets/home.png'
import { Link } from 'react-router-dom';

const Details = ({tasks}) => {

  if(tasks) return (
    <section className={style.container}>
      <h1>Detalhes</h1>

      <div className={style.graphContainer}>
        <div className={style.graphItem}>
          <h3>Visão Geral</h3>
          <MainGraph  tasks={tasks}/>
        </div>

        <div className={style.graphItem}>
          <h3>Gráfico mensal</h3>
          <MonthGraph  tasks={tasks}/>
        </div>
      </div>
      

      <Link to='/' className={style.buttonHome}><img src={home} alt='graficos de detalhamentos'/></Link>
    </section>
  )
  return <div>Carregando...</div>
}

export default Details

