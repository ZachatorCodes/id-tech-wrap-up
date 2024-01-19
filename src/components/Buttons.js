import { Button, Container, Paper } from "@mui/material";
import React from "react";

function Buttons({ showWrapUp, setShowWrapUp }) {
  function handleToggleWrapUp() {
    setShowWrapUp(!showWrapUp);
  }

  function handleCopyButton() {
    const wrapUpText = document.getElementById("wrap-up").textContent;
    navigator.clipboard.writeText(wrapUpText).then(
      () => {
        alert("Text copied successfully :) congratulations!");
      },
      () => {
        alert("Text could not be copied :( please try again later!");
      }
    );
  }

  return (
    <Container
      align="center"
      maxWidth="lg"
      disableGutters
      sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }}
    >
      <Paper className="paper-group" elevation={0}>
        <Button
          variant="contained"
          sx={{ marginRight: 2, marginTop: 1.5, marginBottom: 1.5 }}
          onClick={handleCopyButton}
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
