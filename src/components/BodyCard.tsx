import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DoughnutChart from "./DoughnutChart";
import { totalAssets } from "../class/totalAssets";
import { Typography } from "@mui/material";

const BodyCard = (totalAssets: { data: totalAssets }) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}年${month}月${day}日`;
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography>
            {formatDate(totalAssets.data.registrationDate)}
          </Typography>
          <DoughnutChart data={totalAssets.data} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default BodyCard;
