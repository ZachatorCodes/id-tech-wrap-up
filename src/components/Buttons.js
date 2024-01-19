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
      sx={{ paddingLeft: 2, paddingRight: 2 }}
    >
      <Button
        variant="contained"
        sx={{ marginRight: 2, marginTop: 1, marginBottom: 1 }}
      >
        Copy Wrap Up
      </Button>
      <Button
        variant="contained"
        sx={{ marginLeft: 2, marginTop: 1, marginBottom: 1 }}
        onClick={handleToggleWrapUp}
      >
        {showWrapUp ? "Hide Wrap Up" : "Show Wrap Up"}
      </Button>
    </Container>
  );
}

export default Buttons;
