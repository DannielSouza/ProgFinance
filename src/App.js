import React from "react";
import "./App.css";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Item from "./Components/Item";
import add from './assets/add.png'


function App() {
  const [tasks, setTasks] = React.useState()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [name, setName] = React.useState(null)

  React.useEffect(()=>{
    const local = window.localStorage.getItem('tasks')
    if(local){
      let localJSON = [JSON.parse(local)]
      setTasks(...localJSON)
    }
  },[])


  React.useEffect(()=>{
    if(tasks){
      let tasktString = JSON.stringify(tasks)
      window.localStorage.setItem('tasks', tasktString)
    }
  },[tasks])

  React.useEffect(()=>{
    const local = window.localStorage.getItem('name')
    if(local) setName(local)
    if(!local){
      let nome = prompt("Como gostaria de ser chamado?")
      setName(nome)
      window.localStorage.setItem('name', nome)
    }
  },[])


  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} name={name}/>
      <button onClick={()=> setIsModalOpen(true) } className='buttonAdd'><img src={add} alt='adcionar item'/></button>

      <ul>
        {tasks && tasks.map((task)=>{
          return <Item key={task.id} id={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
        })}
      </ul>

      {isModalOpen && <InputField tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen}/>}

    </>
  );
}

export default App;
