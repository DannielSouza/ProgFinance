import React from 'react'
import style from './styles/InputField.module.css'
import close from '../assets/close.png'

const InputField = ({tasks, setTasks, setIsModalOpen}) => {
  const [desc, setDesc] = React.useState('')
  const [value, setValue] = React.useState('')
  const [select, setSelect] = React.useState('')
  const [dateDay, setDateDay] = React.useState('')
  const [dateMonth, setDateMonth] = React.useState('')
  const [dateYear, setDateYear] = React.useState(2022)
  let formatedDate
  let formatedDateUSA

  function gerarID(){
    let id = Math.floor(Date.now() * Math.random()).toString(36)
    return id
  }

  function handleSubmit(event){
    event.preventDefault()
    let newDay
    let newMonth

    if(dateDay < 10 && !(dateDay.slice(0)).startsWith('0') ){ 
      newDay = '0'+ dateDay
    }else{
      newDay = dateDay
    }
    
    if(dateMonth < 10 && !(dateMonth.slice(0)).startsWith('0') ){ 
      newMonth = '0'+ dateMonth
    }else{
      newMonth = dateMonth
    }

    formatedDate = newDay + "/" + newMonth + "/" + dateYear
    formatedDateUSA = newMonth + "/" + newDay + "/" + dateYear
    let timeStamp = new Date(formatedDateUSA).getTime()

    
    const task = {
      "id":`${gerarID()}`,
      "desc": `${desc}`,
      "value": `${value}`,
      "option": `${select}`,
      "date": `${formatedDate}`,
      "timeStamp": `${timeStamp}`
    }
    setTasks(tasks? [...tasks, task] : [task])
    setDesc('')
    setValue('')
    setSelect('')
    setDateDay('')
    setDateMonth('')
    setDateYear(2022)
    setIsModalOpen(false)
  }


  return (
    <section className={style.mainContainer}>
      <form className={style.container} onSubmit={handleSubmit}>

      <img onClick={()=>setIsModalOpen(false)} id={style.closeModal} src={close}  alt='fechar modal'/>

        <input 
        className={style.input}
        id='desc'
        type='text' 
        placeholder='Ex:Salario'
        required
        value={desc} 
        onChange={({target})=> setDesc(target.value)} />
        
        <input 
        className={style.input}
        id='value'
        type='number' 
        placeholder='Ex:R$1200.00'
        required
        max="99000"
        value={value} 
        onChange={({target})=> setValue(target.value)}/>

        <select 
        className={style.select}
        id='type'
        value={select} 
        onChange={({target})=> setSelect(target.value)}
        required
        >
          <option disabled value="">Selecione</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Despesa</option>
        </select>


        <div className={style.dateContainer}>

        <input
        className={style.date}
        id={style.date}
        type='number'
        value={dateDay} 
        placeholder='Dia'
        onChange={({target})=> setDateDay(target.value)}
        required
        min='1'
        max='31'
        />

        <input
        className={style.date}
        id={style.date}
        type='number'
        value={dateMonth} 
        placeholder='Mês'
        onChange={({target})=> setDateMonth(target.value)}
        required
        min='1'
        max='12'
        />

        <input
        className={style.date}
        id={style.date}
        type='number'
        value={dateYear} 
        placeholder='Dia'
        onChange={({target})=> setDateYear(target.value)}
        required
        min='2022'
        max='2022'
        disabled
        />

        </div>

        <button className={style.button}>Enviar</button>
      </form>    
    </section>
  )
}

export default InputField