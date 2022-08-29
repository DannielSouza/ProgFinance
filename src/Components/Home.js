import React from 'react'
import InputField from "../Components/InputField";
import Item from "../Components/Item";
import add from '../assets/add.png'
import graph from '../assets/graph.png'
import { Link } from 'react-router-dom';


const Home = ({tasks, setTasks, isModalOpen, setIsModalOpen}) => {
  return (
    <>
      <button onClick={()=> setIsModalOpen(true) } className='buttonAdd'><img src={add} alt='adcionar item'/></button>
      <Link to='detalhes' className='buttonGraph'><img src={graph} alt='graficos de detalhamentos'/></Link>

        <ul>
          {tasks && tasks.sort((a,b)=>{
            return  Number(b.timeStamp) - Number(a.timeStamp)
          }).map((task)=>{
            return <Item key={task.id} id={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
          })}
        </ul>

      {isModalOpen && <InputField tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen}/>}
    </>
  )
}

export default Home