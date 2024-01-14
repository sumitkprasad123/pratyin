import React from 'react'
import "./timeline.scss"
import { Chrono } from 'react-chrono'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Timeline = () => {
    const items = [
         {
            title: 'Sep23',
          },
          {
            title: 'Sep23',
          },
          {
            title: 'Sep23',
          },
       

    ]
  return (
    <div style={{ width: '100%', height: '350px' }}>
       <Chrono
          mode="VERTICAL" 
          items={items} 
        //   cardLess={true}
          cardHeight={1}
          contentDetailsHeight={"50px"}
          borderLessCards={true}
          parseDetailsAsHTML={true}
          disableClickOnCircle={true}
          hideControls={true}
          activeItemIndex={false}
          lineWidth={1}
          timelinePointShape="circle"
        //   disableInteraction={true}
        //   disableTimelinePoint={true}
          theme={{
            cardBgColor: 'transparent',
            cardBorderColor: 'transparent',
            cardBoxShadow: 'none',
            nodeDot: {
                borderColor: ' blue', 
                backgroundColor: 'white', 
              }, 
          }}
          style={{ width: '100%', marginLeft: 0, paddingLeft:0}}
       >
         <div className="t_container">
            <div className="top">
                <h1 className='head'>Mathematic</h1>
                <button className="btn">In Progress</button>
            </div> 
            <div className="bottom" >
                  <DateRangeIcon className='icon'/>
                  <span className='time'>September 5, 2022 |</span>
                  <AccessTimeIcon className='icon'/>
                  <span className='time'>09:00 am - 10:00 am (60 Minutes)</span>
            </div>
         </div>
         <div className="t_container">
            <div className="top">
                <h1 className='head'>Mathematic</h1>
                <button className="btn">Completed</button>
            </div> 
            <div className="bottom" >
                  <DateRangeIcon className='icon'/>
                  <span className='time'>September 5, 2022 |</span>
                  <AccessTimeIcon className='icon'/>
                  <span className='time'>09:00 am - 10:00 am (60 Minutes)</span>
            </div>
         </div>
         <div className="t_container">
            <div className="top">
                <h1 className='head'>Mathematic</h1>
                <button className="btn">In Progress</button>
            </div> 
            <div className="bottom" >
                  <DateRangeIcon className='icon'/>
                  <span className='time'>September 5, 2022 |</span>
                  <AccessTimeIcon className='icon'/>
                  <span className='time'>09:00 am - 10:00 am (60 Minutes)</span>
            </div>
         </div>
         
       </Chrono>
    </div>
  )
}

export default Timeline