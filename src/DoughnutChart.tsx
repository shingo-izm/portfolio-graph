import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Stocks", "Bonds", "Commodities", "Real Estate"],
  datasets: [
    {
      data: [3000, 2000, 1000, 4000],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#2ecc71"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#2ecc71"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
