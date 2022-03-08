import {useState, useEffect} from 'react';
import {Box, Divider, Grid, IconButton, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Venezuela() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Effect code here
    return () => {
      //your cleanup code codes here
    };
  }, [state])

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {
        [...Array.from('123')].map((el, i) => (
          <Grid item xs={12} md={6} key={i + 1}>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src="/static/icons/logo.png" width={100} alt=""/>
                <IconButton>
                  <LocationOnIcon color='primary' />
                </IconButton>
              </Box>
              <Typography variant='body2' fontWeight='bold'>Consultorio Caracas</Typography>
              <Typography variant='body1' >
                Centro comercial San Ignacio, torre Copernico. Piso 7, Oficina 08.
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
          </Grid>
        ))
      }
    </Grid>
  )
}
 
