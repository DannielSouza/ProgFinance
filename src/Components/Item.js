import React from 'react'
import style from './styles/Item.module.css'

const Item = ({task}) => {
  const {id, desc, option, value, date} = task

  return (
    <li className={style.container}>
      <div className={style.mainInfo}>
        <p id={style.date}>{date}</p>
        <p>{desc}</p>
      </div>

      <div className={style.value}>
        <p>{option === 'entrada'? <span style={{color: '#239B56', fontWeight: 'bold'}}>R${value}</span>: <span style={{color: '#E74C3C', fontWeight: 'bold'}}>R$-{value}</span>}</p>
      </div>

    </li>
  )
}

export default Item