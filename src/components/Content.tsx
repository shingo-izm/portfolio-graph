import { Asset } from "../interface/types";
import BodyCard from "./BodyCard";
import Grid from "@mui/material/Grid";

const testData: Asset[] = [
  { label: "LabelA", value: 10 },
  { label: "LabelB", value: 20 },
  { label: "LabelC", value: 30 },
  { label: "LabelD", value: 30 },
  { label: "LabelE", value: 30 },
];

const Content = () => {
  return (
    <div>
      <Grid container spacing={1}>
        {testData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BodyCard data={testData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Content;
