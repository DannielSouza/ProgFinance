import React from 'react'
import style from './styles/Resume.module.css'

const Resume = ({tasks}) => {
  let total = 0

  if(tasks){
  tasks.forEach(element => {
    if(element.option === 'entrada')total = total + Number(element.value)
    if(element.option === 'saida')total = total - Number(element.value)
  })}


  if(tasks) return (
    <div className={style.container}>Seu balanço atual é de <span style={total >= 0 ?{color:'green'} : {color: 'red'}} >R${total}</span></div>
  )
  return <div>R$ ---</div>
}

export default Resume