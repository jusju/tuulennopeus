import React, { useEffect, useState } from "react";
import { CartesianGrid, LineChart, Line, YAxis, XAxis } from "recharts";
import { format, parseISO } from "date-fns";
import { assertValidExecutionArguments } from "graphql/execution/execute";
import axios from "axios";
import data from "./winds.json";

export default function WindTracker() {
  const [speeds, setSpeeds] = useState([]);

  const fetchWinds = () => {
    console.log("We are in fetch winds!!");
  };

  useEffect(() => {
    fetchWinds();
  }, []);

  return (
    <div>
      <h1>Tuulen nopeus Perttulassa</h1>
      <LineChart width={1700} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis axisLine={true} tickLine={true} />

        <XAxis dataKey="aika" tickLine={true} axisLine={true} />

        <Line
          type="monotone"
          dataKey="uv"
          strokeWidth="10px"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
}
