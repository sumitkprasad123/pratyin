import React from 'react'
import "./task.scss"

const Task = ({time,subject,title,timeDuration}) => {
  return (
    <div className="task_container">
       <div className="task_container_left">
            <span className="task_time">{time}</span>
            <div className="task_details">
                <span className="subject">{subject}</span>
                <span className="content">{title}</span>
            </div>
        </div>
        
        <span className="time_duration">{timeDuration}</span>
    </div>
  )
}

export default Task