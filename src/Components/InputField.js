import React from 'react'
import style from './styles/InputField.module.css'
import close from '../assets/close.png'

const InputField = ({tasks, setTasks, setIsModalOpen}) => {
  const [desc, setDesc] = React.useState('')
  const [value, setValue] = React.useState('')
  const [select, setSelect] = React.useState('')
  const [outType, setOutType] = React.useState('')
  const [date, setDate] = React.useState('')
  let formatedDate
  let formatedDateUSA

  

  function gerarID(){
    let id = Math.floor(Date.now() * Math.random()).toString(36)
    return id
  }

  function handleSubmit(event){
    event.preventDefault()
    const day = date.substr(8,2)
    const month = date.substr(5,2)
    const year = date.substr(0,4)


    formatedDate = day + "/" + month + "/" + year
    formatedDateUSA = month + "/" + day + "/" + year
    let timeStamp = new Date(formatedDateUSA).getTime()

    
    const task = {
      "id":`${gerarID()}`,
      "desc": `${desc}`,
      "value": `${value}`,
      "option": `${select}`,
      "date": `${formatedDate}`,
      "timeStamp": `${timeStamp}`,
      "outType": `${outType}`
    }
    setTasks(tasks? [...tasks, task] : [task])
    setDesc('')
    setValue('')
    setSelect('')
    setOutType('')
    setDate('')
    setIsModalOpen(false)
  }


  return (
    <section className={style.mainContainer}>
      <form className={style.container} onSubmit={handleSubmit}>

      <img onClick={()=>setIsModalOpen(false)} id={style.closeModal} src={close}  alt='fechar modal'/>

        <input 
        autoComplete='off'
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

        {select === 'saida' && 
          <select 
          className={style.selectOut}
          id='outType'
          value={outType} 
          onChange={({target})=> setOutType(target.value)}
          required
          >
            <option disabled value="">Selecione</option>
            <option value="despesasMensais">Despesas mensais</option>
            <option value="estudos">Estudos</option>
            <option value="saude">Saude</option>
            <option value="entretenimento">Entretenimento</option>
            <option value="alimentacao">Alimentação</option>
            <option value="outros">Outras despesas</option>
          </select>
        }


        <div className={style.dateContainer}>

        <input
        className={style.date}
        id={style.date}
        type='date'
        placeholder='Ex:07/05/2022'
        value={date} 
        onChange={({target})=> setDate(target.value)}
        required
        />

        </div>

        <button className={style.button}>Enviar</button>
      </form>    
    </section>
  )
}

export default InputField