import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={0.5} />
        <Grid sm={11}>
          <Content />
        </Grid>
        <Grid sm={0.5} />
      </Grid>
    </Grid>
  );
}

export default App;
