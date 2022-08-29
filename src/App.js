import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";


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
      <BrowserRouter>
        <Header tasks={tasks} setTasks={setTasks} name={name}/>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>} />
          <Route path="/detalhes" element={<Details tasks={tasks}/>} />


        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
