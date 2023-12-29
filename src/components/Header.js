import { Container, Paper, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ background: "#65a765" }}>
        <Typography padding="10px" margin="24px" align="center" variant="h2">
          Time For Wrap Up!
        </Typography>
      </Paper>
    </Container>
  );
}

export default Header;
