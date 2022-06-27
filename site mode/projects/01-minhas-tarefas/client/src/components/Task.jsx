import React from 'react'
import "./Task.css"
import {CgClose, CgInfo} from 'react-icons/cg'
import {Link} from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div className='task-container' style={task.completed ? { borderLeft: '6px solid purple'} : {}}>
            <div className='title-task-container' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}><CgClose/></button>
                <Link className='info-task-button' to={`/${task.title}`}><CgInfo/></Link>
            </div>
        </div>
    )
}
 
export default Task