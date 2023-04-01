import BodyCard from "./BodyCard";
import Grid from "@mui/material/Grid";
import { testData_allAssetsData } from "../data/testdata";

const Content = () => {
  const data = testData_allAssetsData;
  return (
    <div>
      <Grid container spacing={1}>
        {data.totalAssets.map((currentValue) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BodyCard data={currentValue.data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Content;
