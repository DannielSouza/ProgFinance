import React from 'react'
import style from './styles/InputField.module.css'

const InputField = ({tasks, setTasks}) => {
  const [desc, setDesc] = React.useState('')
  const [value, setValue] = React.useState('')
  const [select, setSelect] = React.useState('')
  const [date, setDate] = React.useState('')
  let formatedDate

  function gerarID(){
    let id = Math.floor(Date.now() * Math.random()).toString(36)
    return id
  }

  

  React.useEffect(()=>{
    let data = new Date(date)

    const dia = Number(data.getDate())+1

    const mes = Number(data.getMonth())+1
    let newMes
    if(mes < 10){newMes = "0" + mes}

    const ano = Number(data.getFullYear())
    formatedDate =  dia + "/" + newMes + "/" + ano
  },[date])

  function handleSubmit(event){
    event.preventDefault()
    
    const task = {
      "id":`${gerarID()}`,
      "desc": `${desc}`,
      "value": `${value}`,
      "option": `${select}`,
      "date": `${formatedDate}`
    }
    setTasks(tasks? [...tasks, task] : [task])
    setDesc('')
    setValue('')
    setSelect('')
    setDate('')
  }


  return (
    <header className={style.header}>
    <form className={style.container} onSubmit={handleSubmit}>

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

      <input
      className={style.date}
      id={style.date}
      type='date'
      value={date} 
      onChange={({target})=> setDate(target.value)}
      required
      />

      <button className={style.button}>Enviar</button>
    </form>


    
    </header>
  )
}

export default InputField