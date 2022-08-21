import React from "react";
import "./App.css";
import InputField from "./Components/InputField";
import Item from "./Components/Item";
import Resume from "./Components/Resume";


function App() {
  const [tasks, setTasks] = React.useState()

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


  return (
    <>
      <InputField tasks={tasks} setTasks={setTasks}/>
      <Resume tasks={tasks} />

      <ul>
        {tasks && tasks.map((task)=>{
          return <Item key={task.id} task={task} />
        })}
      </ul>
    </>
  );
}

export default App;
