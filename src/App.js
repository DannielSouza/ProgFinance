import React from "react";
import "./App.css";
import InputField from "./Components/InputField";
import Resume from "./Components/Resume";


function App() {
  const [tasks, setTasks] = React.useState()

  React.useEffect(()=>{
    const local = window.localStorage.getItem('tasks')
    if(local){
      console.log(local);
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


  return (
    <>
      <InputField tasks={tasks} setTasks={setTasks}/>
      <Resume tasks={tasks} />

      <ul>
        {tasks && tasks.map((task)=>{
          return <li>
            <span>nome: {task.desc}</span>
            <span> | valor: <span style={task.option === 'entrada'? {color: 'green', fontWeight: 'bold'}: {color: 'red', fontWeight: 'bold'}}>R${task.value}</span></span>
            </li>
        })}
      </ul>
    </>
  );
}

export default App;
