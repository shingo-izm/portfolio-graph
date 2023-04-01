import { Grid, TextField } from "@mui/material";
import { asset } from "../interface/types";
import { useState } from "react";

const InputFormField = (Props: { data: asset }) => {
  const [asset, setAssets] = useState(Props.data);

  // const handleChange =
  //   (index: number, field: keyof asset) =>
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const newAssets = [...assets];
  //     newAssets[index] = { ...assets[index], [field]: +event.target.value };
  //     setAssets(newAssets);
  //   };

  return (
    <Grid container>
      <Grid item container spacing={0.5}>
        <Grid item sm={6}>
          <TextField
            label="Label"
            value={asset.label}
            // onChange={handleChange(index, "label")}
            size="small"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Value"
            type="number"
            value={asset.value}
            // onChange={handleChange(index, "value")}
            size="small"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default InputFormField;
