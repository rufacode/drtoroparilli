import {useEffect, useState} from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";

export default function ConsultForm() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Effect code here
    return () => {
      //your cleanup code codes here
    };
  }, [state])

  return (
    <Box sx={{my: {xs: 15, md: 0}, display: {md: 'grid'}, placeItems: {md: 'center'}, height: {md: '80vh'}}}>
      <Paper elevation={3} sx={{p: 3}}>
        <Typography variant='body1' fontWeight='600'>Email</Typography>
        <TextField
          fullWidth
          placeholder='ejemplo@123.com'
        />
        <Button sx={{mt: 2}} variant='contained' fullWidth>Siguiente</Button>
      </Paper>
    </Box>
  )
}
 
