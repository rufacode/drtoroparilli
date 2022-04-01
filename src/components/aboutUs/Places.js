import {useDispatch} from "../../redux/store";
import {useEffect} from "react";
import {updateImg} from "../../redux/slices/backgroundImageSlice";
import {Box, Grid, Typography} from "@mui/material";
import {placesData} from "../../utils/mock-data/places";
import InfoModal from "../InfoModal";

export default function Places() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/places.jpg'));
  }, [])

  return (
    <Box sx={{mt: 3}}>
      <Typography variant='h4' fontWeight='bold'>
        INSTALACIONES
      </Typography>
      <Typography variant='body1' sx={{mb: 3}}>
        Conoce nuestras instalaciones, diseñadas para dar máxima comodidad y la mejor atención médica al paciente.
      </Typography>
      <Box sx={{overflowY: 'auto', maxHeight: '305px', px: 2}}>
        <Grid container spacing={1}>
          {
            placesData.map((place, i) => (
              <Grid key={i + 1} item xs={12} sm={6} md={4} align='center' sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                ":hover" : {
                  backgroundColor: '#003765',
                  color: 'white',
                  cursor: 'pointer'
                }
              }}>
                <Typography  variant='body2' fontWeight='bold'>{place.title}</Typography>
                <Typography  variant='caption'>{place.place}</Typography>
                <InfoModal data={place} />
              </Grid>
            ))
          }

        </Grid>

      </Box>
    </Box>
  )
}
 
