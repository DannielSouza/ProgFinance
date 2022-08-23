import React from 'react'
import style from './styles/Item.module.css'
import trash from '../assets/delete.png'

const Item = ({task , tasks, setTasks}) => {
  const {id, desc, option, value, date} = task

  function deleteItem({target}){
    let thisItem

    let question = window.confirm("Deseja excluir o item?")
    if(question){
      tasks.forEach((task)=>{
        if(task.id === target.id){
          thisItem =  tasks.indexOf(task)
        }
      })

      tasks.splice(thisItem, 1)
      if(tasks.length === 0){
        window.localStorage.setItem('tasks', null)
        document.location.reload()
      }
      setTasks(tasks)
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
      document.location.reload()
    }
    else{
      return
    }
  }

  return (
    <li className={style.container}>
      <div className={style.mainInfo}>
        <p id={style.date}>{date}</p>
        <p>{desc}</p>
      </div>

      <div className={style.value}>
        <span>{option === 'entrada'? <span style={{color: '#239B56', fontWeight: 'bold'}}>R${value}</span>: <span style={{color: '#E74C3C', fontWeight: 'bold'}}>R$-{value}</span>}</span>
        <img id={id} onClick={deleteItem} src={trash} alt="delelete item"/>
      </div>

    </li>
  )
}

export default Item