import { Asset } from "../interface/types";
import DoughnutChart from "./DoughnutChart";

const testData: Asset[] = [
  { label: "LabelA", value: 10 },
  { label: "LabelB", value: 20 },
  { label: "LabelC", value: 30 },
];

const Content = () => {
  return (
    <div>
      <h1>Content</h1>
      <DoughnutChart data={testData} />
    </div>
  );
};

export default Content;
