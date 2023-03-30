import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DoughnutChart from "./DoughnutChart";
import { Asset } from "./types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const testData: Asset[] = [
  { label: "LabelA", value: 10 },
  { label: "LabelB", value: 20 },
  { label: "LabelC", value: 30 },
];
// const [data, setData] = useState(testData);

root.render(
  <React.StrictMode>
    <DoughnutChart data={testData} />
  </React.StrictMode>
);
