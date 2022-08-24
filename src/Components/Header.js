import React from 'react'
import Resume from './Resume'
import style from './styles/Header.module.css'


const Header = ({tasks, setTasks, name}) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        {name? <h1>Olá, {name}!</h1> : <h1>Olá!</h1>}

        
        <Resume tasks={tasks} setTasks={setTasks}/>
      </div>
    </header>
  )
}

export default Header