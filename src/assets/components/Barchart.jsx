import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Barchart = ({ appId }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("/appdata20.json")
      .then((res) => res.json())
      .then((data) => {
        const app = data.find((item) => item.id === appId);
        if (app) {
          // sort descending (5 star first)
          const sorted = [...app.ratings].sort(
            (a, b) => parseInt(b.name) - parseInt(a.name)
          );
          setRatings(sorted);
        }
      });
  }, [appId]);

  return (
    <div className="bg-gray-25 p-4 rounded-lg ">
      <h2 className="text-lg font-semibold mb-4">Ratings</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8C00" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
