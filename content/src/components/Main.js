import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { test_titles } from "../titles";
import { blueGrey, red, teal } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledText = styled("p")({
  color: teal[900],
  cursor: "pointer",
  ":hover": { color: red[200] },
});

function Main() {
  return (
    <Grid container pt={4} pb={4} sx={{ gap: "1rem" }} justifyContent="center">
      <Masonry columns={{ xs: 1, sm: 2, md: 4, lg: 4 }} spacing={2}>
        {test_titles.map((test) => (
          <Paper
            key={test?.id}
            elevation={5}
            sx={{ p: "0.5rem", textAlign: "center" }}
          >
            <StyledText>{test?.name}</StyledText>
            <Typography color={blueGrey[300]}>{test?.def}</Typography>
          </Paper>
        ))}
      </Masonry>
    </Grid>
  );
}

export default Main;
