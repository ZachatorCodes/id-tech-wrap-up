import { Button, Container, Paper } from '@mui/material'
import React from 'react'

function Buttons() {
  return (
    <Container maxWidth="lg" disableGutters sx={{paddingLeft: 2, paddingRight: 2}}>
      <Paper elevation={0} align="center" className='paper-group'>
        <Button sx={{marginRight: 2, marginTop: 1, marginBottom: 1}}>Copy Wrap Up</Button><Button sx={{marginLeft: 2, marginTop: 1, marginBottom: 1}}>Show Wrap Up</Button>
      </Paper>
    </Container>
  )
}

export default Buttons