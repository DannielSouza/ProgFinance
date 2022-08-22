import React from 'react'
import Resume from './Resume'
import style from './styles/Header.module.css'


const Header = ({tasks, setTasks, name}) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        {name? <h1>Olá, {name}!</h1> : <h1>Olá!</h1>}

        <div className={style.mainInfo}>
          <Resume tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </header>
  )
}

export default Header