import React from 'react'
import "./timeline.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Timeline = () => {
    
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"10px"}} >
         <div className="t_container">
            <div className="timeline_left">
                <div className="t_left">
                    <span className="t_time_text">Sep22</span>
                </div>
                <div className="middle_content">
                    <h3 className='head'>Mathematic</h3>
                    <div className="bottom" >
                          <DateRangeIcon className='icon'/>
                          <span className='time'>September 5, 2022 |</span>
                          <AccessTimeIcon className='icon'/>
                          <span className='time'>09:00 am - 10:00 am (60 Minutes)</span>
                    </div> 
                    <span className="outer_circle">
                       <span className="inner_circle"></span>
                    </span>          
                </div> 
            </div>
            <button className="btn_right">In Progress</button>
         </div>
         <div className="t_container">
            <div className="timeline_left">
                <div className="t_left">
                    <span className="t_time_text">Sep23</span>
                </div>
                <div className="middle_content">
                    <h3 className='head'>Geography</h3>
                    <div className="bottom" >
                          <DateRangeIcon className='icon'/>
                          <span className='time'>September 5, 2022 |</span>
                          <AccessTimeIcon className='icon'/>
                          <span className='time'>09:00 am - 10:00 am (60 Minutes)</span>
                    </div> 
                    <span className="outer_circle">
                       <span className="inner_circle"></span>
                    </span>          
                </div> 
            </div>
            <button className="btn_right">Completed</button>
         </div>
         <div className="t_container">
            <div className="timeline_left">
                <div className="t_left">
                    <span className="t_time_text">Sep24</span>
                </div>
                <div className="middle_content">
                    <h3 className='head'>Botony</h3>
                    <div className="bottom" >
                          <DateRangeIcon className='icon'/>
                          <span className='time'>September 5, 2022 |</span>
                          <AccessTimeIcon className='icon'/>
                          <span className='time'>09:00 am - 10:00 am (60 Minutes)</span>
                    </div> 
                    <span className="outer_circle">
                       <span className="inner_circle"></span>
                    </span>          
                </div> 
            </div>
            <button className="btn_right">In Progress</button>
         </div>
    </div>
  )
}

export default Timeline