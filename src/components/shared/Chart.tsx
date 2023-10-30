import { Tooltip } from "react-leaflet";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "@/constants";

const Chart = () => {
  return (
    <section className="flex flex-col gap-4 bg-light-1 p-4 h-80 overflow-auto border">
      <div>
        <h2 className="text-heading2-semibold">Title</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
          perspiciatis.
        </p>
      </div>
      <ResponsiveContainer width="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;
