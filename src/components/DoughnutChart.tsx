import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import { asset } from "../interface/types";
import {
  Button,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
} from "@mui/material";
import InputFormField from "./InputFormField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DoughnutChart = (Props: { data: asset[] }) => {
  const [assets, setAssets] = useState(Props.data);

  const handleChange =
    (index: number, field: keyof asset) =>
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

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Doughnut data={chartData} options={options} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Save
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Grid>
      <Grid item>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Grid item container spacing={1}>
            {assets.map((currentValue) => (
              <Grid item>
                <InputFormField data={currentValue} />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  );
};

export default DoughnutChart;
