import React from 'react'
import style from './styles/Resume.module.css'

const Resume = ({tasks}) => {
  let total = 0
  let entradas = 0
  let saidas = 0

  if(tasks){
  tasks.forEach(element => {
    if(element.option === 'entrada')total = total + Number(element.value)
    if(element.option === 'saida')total = total - Number(element.value)
  })}

  if(tasks){
    tasks.forEach((element)=>{
      if(element.option === 'entrada'){
        entradas = entradas + Number(element.value)
      }
    })
  }

  if(tasks){
    tasks.forEach((element)=>{
      if(element.option === 'saida'){
        saidas = saidas + Number(element.value)
      }
    })
  }


  if(tasks) return (
    <section className={style.container}>
      <div className={style.item}>Entradas <span style={{color: '#239B56'}} >R${entradas.toFixed(2)}</span></div>
      <div className={style.item}>Saidas <span style={{color: '#E74C3C'}} >R$-{saidas.toFixed(2)}</span></div>
      <div className={style.item}>Total<span style={total >= 0 ?{color:'#239B56'} : {color: '#E74C3C'}} >R${total.toFixed(2)}</span></div>
    </section>
  ) 
  return (
    <section className={style.container}>
      <div className={style.item}>Entradas <span style={{color: '#239B56'}} >R$---</span></div>
      <div className={style.item}>Saidas <span style={{color: '#E74C3C'}} >R$---</span></div>
      <div className={style.item}>Total<span style={total >= 0 ?{color:'#239B56'} : {color: '#E74C3C'}} >R$---</span></div>
    </section>
  ) 
}

export default Resume