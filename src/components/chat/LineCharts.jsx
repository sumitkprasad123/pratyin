import React, { useState } from 'react';
import "./lineCharts.scss";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis,Tooltip } from 'recharts';

const data = [
    {
      month: 'Jan',
      Students: 24,
      Teachers:45,
    },
    {
      month: 'Feb',
      Students: 48,
      Teachers:60,
    },
    {
      month: 'Mar',
      Students: 56,
      Teachers:75,
    },
    {
      month: 'Apr',
      Students: 32,
      Teachers:51,
    },
    {
      month: 'May',
      Students: 34,
      Teachers:42,
    },
    {
      month: 'Jun',
      Students: 52,
      Teachers:42,
    },
    {
      month: 'Jul',
      Students: 25,
      Teachers:30,
    }
  ];

const LineCharts = () => {
  const [line1,setLine1] = useState(false);
  const [line2,setLine2] = useState(false);
  return (
  <div className="chart">
        <ResponsiveContainer width={"100%"} height={300}>
          <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
                <CartesianGrid   height={5}/>
                <XAxis dataKey="month"  axisLine={false}  />
                <YAxis type="number" domain={[20, 80]} tickCount={7} axisLine={false}  />
                <Tooltip   /> 
               <Line type="monotone" dataKey="Teachers" stroke="#3d5ee1" activeDot={{ r: 6 }}  strokeWidth="4" dot={false} hide={line1} />
                <Line type="monotone" dataKey="Students" stroke="#82ca9d" activeDot={{ r: 6 }} strokeWidth="4" dot={false} hide={line2} />
            </LineChart>
        </ResponsiveContainer>
        <div className="right">
            <span className="dot1" onClick={()=>setLine1(!line1)} style={{opacity: `${line1?"0.5":"1"}`}}></span>
            <span className="name1" style={{opacity: `${line1?"0.5":"1"}`}}>Teacher</span>
            <span className="dot2" onClick={()=>setLine2(!line2)} style={{opacity: `${line2?"0.5":"1"}`}}></span>
            <span className="name2" style={{opacity: `${line2?"0.5":"1"}`}}>Student</span>
        </div>
    </div>
  )
}

export default LineCharts;