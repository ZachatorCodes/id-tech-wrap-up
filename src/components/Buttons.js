import { Button, Container, Paper } from "@mui/material";
import React from "react";

function Buttons({ showWrapUp, setShowWrapUp }) {
  function handleToggleWrapUp() {
    setShowWrapUp(!showWrapUp);
  }

  return (
    <Container
      align="center"
      maxWidth="xs"
      disableGutters
      sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }}
    >
      <Paper className="paper-group" elevation={0}>
      <Button
        variant="contained"
        sx={{ marginRight: 2, marginTop: 1.5, marginBottom: 1.5 }}
      >
        Copy Wrap Up
      </Button>
      <Button
        variant="contained"
        sx={{ marginLeft: 2, marginTop: 1.5, marginBottom: 1.5 }}
        onClick={handleToggleWrapUp}
      >
        {showWrapUp ? "Hide Wrap Up" : "Show Wrap Up"}
      </Button>
      </Paper>
    </Container>
  );
}

export default Buttons;
