import { Button, Container, Paper } from '@mui/material'
import React from 'react'

function Buttons() {
  return (
    <Container maxWidth="lg" disableGutters sx={{paddingLeft: 2, paddingRight: 2}}>
      <Paper elevation={0} align="center" className='paper-group'>
        <Button sx={{margin: 1}}>Copy Wrap Up</Button><Button sx={{margin: 1}}>Show Wrap Up</Button>
      </Paper>
    </Container>
  )
}

export default Buttons