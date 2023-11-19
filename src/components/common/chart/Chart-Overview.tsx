import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useQuery } from "@/hooks/use-query";
import { useDummySocket } from "@/hooks/use-dummy-socket";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  showData: any;
}

const ChartOverview: React.FC<Props> = ({ showData }) => {
  const queryKey = `dummy`;
  const addKey = `addDummy`;

  const { data, status } = useQuery({
    queryKey,
    apiUrl: "api/dummy",
  });

  return (
    <section className="flex flex-col gap-4 bg-light-1 p-4 min-h-[300px] overflow-auto border">
      {status == "loading" ? (
        <>
          <div className="flex flex-col gap-2 ">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-5 w-40" />
          </div>
          <Skeleton className="h-full w-full" />
        </>
      ) : status == "success" ? (
        <>
          <div>
            <h2 className="text-heading2-semibold">{showData.title}</h2>
            <p>{showData.description}</p>
          </div>
          <ResponsiveContainer width="100%">
            <AreaChart
              width={730}
              height={250}
              data={data?.pages[0]}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              {/* <defs>
          <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#E4508F" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#E4508F" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F9D923" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F9D923" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#36AE7C" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#36AE7C" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="color4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4D96FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4D96FF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs> */}
              <Legend />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />

              <Area
                type="natural"
                dataKey={showData.show[0]}
                stroke="#E4508F"
                fillOpacity={0}
              />
              <Area
                type="natural"
                dataKey={showData.show[1]}
                stroke="#F9D923"
                fillOpacity={0}
              />
              <Area
                type="natural"
                dataKey={showData.show[2]}
                stroke="#36AE7C"
                fillOpacity={0}
              />
              <Area
                type="natural"
                dataKey={showData.show[3]}
                stroke="#4D96FF"
                fillOpacity={0}
              />
              <Area
                type="natural"
                dataKey={showData.show[4]}
                stroke="#82ca9d"
                fillOpacity={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      ) : status == "error" ? (
        <p>Error</p>
      ) : (
        <p>Erorr</p>
      )}
    </section>
  );
};

export default ChartOverview;
