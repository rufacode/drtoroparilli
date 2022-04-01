import {useState, useEffect} from 'react';
import {Box, Divider, Grid, IconButton, Typography} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const URL = 'https://www.google.com/maps/place/Santo+Domingo,+Dominican+Republic/@18.4800295,-70.0169206,12z/data=!3m1!4b1!4m5!3m4!1s0x8eaf89f1107ea5ab:0xd6c587b82715c164!8m2!3d18.4860575!4d-69.9312117'

export default function Dominicana() {
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
        [...Array.from('3')].map((el, i) => (
          <Grid item xs={12} md={6} key={i + 1}>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src="/static/icons/logo.png" width={100} alt=""/>
                <IconButton onClick={() => goToMap()}>
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
 
