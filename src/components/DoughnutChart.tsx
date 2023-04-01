import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import { Asset, Assets } from "../interface/types";

const DoughnutChart = ({ data }: Assets) => {
  const [assets, setAssets] = useState(data);

  const handleChange =
    (index: number, field: keyof Asset) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newAssets = [...assets];
      newAssets[index] = { ...assets[index], [field]: +event.target.value };
      setAssets(newAssets);
    };

  const handleClick = () => {
    // Do something with updated assets data
    console.log(assets);
  };

  const chartData = {
    datasets: [
      {
        data: assets.map((asset) => asset.value),
        backgroundColor: [
          "#F44336",
          "#2196F3",
          "#FFEB3B",
          "#4CAF50",
          "#9C27B0",
        ],
      },
    ],
    labels: assets.map((asset) => asset.label),
  };

  return (
    <div>
      <Doughnut data={chartData} />
      {/* {assets.map((asset, index) => (
        <div key={index}>
          <TextField
            label="Label"
            value={asset.label}
            onChange={handleChange(index, "label")}
          />
          <TextField
            label="Value"
            type="number"
            value={asset.value}
            onChange={handleChange(index, "value")}
          />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleClick}>
        Save
      </Button> */}
    </div>
  );
};

export default DoughnutChart;
