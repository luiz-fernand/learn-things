import React from 'react'
import {useParams, useLinkClickHandler} from 'react-router-dom'

import './TaskDetails.css'
import Button from './Button'

const TaskDetails = () => {
    const params = useParams()

    return (
        <>
            <div className='back-button-container'>
                <Button onCLick={useLinkClickHandler('/')}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Detalhes Detalhes<br/>
                    Bla bla bla
                </p>
            </div>
        </>
    )
}
 
export default TaskDetails