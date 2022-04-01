import {useState, useEffect} from 'react';
import {Box, Divider, Grid, IconButton, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const URL = 'https://www.google.com/maps/place/Caracas,+Capital+District,+Venezuela/@10.4683841,-66.9604066,12z/data=!3m1!4b1!4m5!3m4!1s0x8c2a58adcd824807:0x93dd2eae0a998483!8m2!3d10.4805937!4d-66.9036063'

export default function Venezuela() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Effect code here
    return () => {
      //your cleanup code codes here
    };
  }, [state])

  function goToMap() {
    window.open(URL, '_blank')
  }

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {
        [...Array.from('123')].map((el, i) => (
          <Grid item xs={12} md={6} key={i + 1}>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src="/static/icons/logo.png" width={100} alt=""/>
                <IconButton onClick={() => goToMap()}>
                  <LocationOnIcon color='primary' />
                </IconButton>
              </Box>
              <Typography variant='body2' fontWeight='bold'>Consultorio Caracas</Typography>
              <Typography variant='caption' >
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
 
