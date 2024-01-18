import { Button, Container, Paper } from '@mui/material'
import React from 'react'

function Buttons() {
  return (
    <Container maxWidth="xs">
      <Paper sx={{marginTop: 2}} align="center">
        <Button sx={{margin: 2}}>Copy Wrap Up</Button><Button sx={{margin: 2}}>Show Wrap Up</Button>
      </Paper>
    </Container>
  )
}

export default Buttons