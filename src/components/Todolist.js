import React, { useState } from 'react';
import { CartesianGrid, LineChart, Line, YAxis, XAxis } from 'recharts';
import { format, parseISO } from "date-fns";


function Todolist() {
  const data = [{name: 'Page A', uv: 1, aika: "10:00 2022-02-02", amt: 2400}, 
                {name: 'Page B', uv: 2.2, aika: "10:05 2022-02-03", amt: 2400},
                {name: 'Page C', uv: 1.9, aika: "10:10 2022-02-04", amt: 2400}
               ];




  return(
    <div>

  <LineChart width={400} height={400} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <YAxis axisLine={true}  tickLine={true} />

 <XAxis dataKey="aika" tickLine={true} axisLine={true}  />


    <Line type="monotone" dataKey="uv" strokeWidth="10px" stroke="#8884d8" />
    
  </LineChart>

    </div>
  );
}

export default Todolist;
