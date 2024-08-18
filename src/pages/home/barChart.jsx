import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { barChartData } from "../../data";

const BarChart2 = () => {
  return (
    <div style={{ height: "20rem" }} className="bg-white py-2">
      <h6 className="px-2">مقایسه فروش آنلاین و حضوری</h6>
      <ResponsiveContainer width="100%">
        <BarChart
          data={barChartData}
          height={320}
          margin={{ top: 0, right: 20, left: 30, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickMargin={8}
            className="md:text-[.9rem] text-[.7rem]"
          />
          <YAxis
            tickMargin={-15}
            mirror={true}
            className="md:text-[1rem] text-[.8rem]"
          />
          <Tooltip />
          <Bar dataKey="آنلاین" fill="#8884d8" />
          <Bar dataKey="آفلاین" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart2;
