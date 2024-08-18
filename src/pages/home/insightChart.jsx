import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../../data";

const InsightChart = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={lineChartData}
          margin={{
            top: 5,
            right: 0,
            left: -15,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickMargin={10} dataKey="name" style={{ fontSize: ".9rem" }} />
          <YAxis tickMargin={40} style={{ fontSize: ".9rem" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="قدیمی"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="جدید" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InsightChart;
