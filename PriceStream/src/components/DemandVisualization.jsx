import React from "react";
import { Line } from "react-chartjs-2";

const DemandVisualization = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Demand Trends",
        data: [12, 19, 3, 5, 2],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Demand Visualization</h2>
      <Line data={data} />
    </div>
  );
};

export default DemandVisualization;
