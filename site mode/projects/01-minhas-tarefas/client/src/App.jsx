import React, {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios'

import "./App.css"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import TaskDetails from "./components/TaskDetails"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      completed: false
    },
    {
      id: 2,
      title: "Ler livros",
      completed: true
    }
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("https://jsonplaceholder.cypress.io/todos/1")
      
    }
    fetchTasks()
  }, [])

  const handleTaskClick =  (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          }/>
          <Route path="/:taskTitle" element={
            <TaskDetails/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App