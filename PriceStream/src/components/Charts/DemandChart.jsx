import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const mockData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Demand Trends",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.1,
    },
  ],
};

function DemandChart() {
  return (
    <div>
      <h2>Demand Trends</h2>
      <Line data={mockData} />
    </div>
  );
}

export default DemandChart;
