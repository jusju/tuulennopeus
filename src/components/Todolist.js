import React, {useEffect, useState } from 'react';
import { CartesianGrid, LineChart, Line, YAxis, XAxis } from 'recharts';
import { format, parseISO } from "date-fns";
import data from "./windspeeds.json" assert { type: "json" };


function Todolist() {
  const [speeds, setSpeeds] = useState([]);
  const data = [{name: 'Page A', uv: 1, aika: "10:00 02-02", amt: 2400}, 
                {name: 'Page B', uv: 2.2, aika: "10:05 02-02", amt: 2400},
                {name: 'Page C', uv: 1.9, aika: "10:10 02-02", amt: 2400},
                {name: 'Page D', uv: 0.9, aika: "10:15 02-02", amt: 2400},
                {name: 'Page E', uv: 2.5, aika: "10:20 02-02", amt: 2400},
                {name: 'Page F', uv: 1.1, aika: "10:25 02-02", amt: 2400}
               ];




useEffect(() => {
console.log(data);
});


  return(
    <div>
<h1>Tuulen nopeus Perttulassa</h1>
  <LineChart width={1200} height={500} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <YAxis axisLine={true}  tickLine={true} />

 <XAxis dataKey="aika" tickLine={true} axisLine={true}  />


    <Line type="monotone" dataKey="uv" strokeWidth="10px" stroke="#8884d8" />
    
  </LineChart>

    </div>
  );
}

export default Todolist;
