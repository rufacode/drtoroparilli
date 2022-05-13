import {Box, Divider, Grid, IconButton, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useSelector} from "../../redux/store";

export default function Venezuela() {
  const {sections} = useSelector(state => state.language)

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {
        sections.contact.options.locations.places.filter(x => x.value === 'venezuela')[0].options.map((el, i) => (
          <Grid item xs={12} md={6} key={i + 1}>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src={el.img} width={100} alt=""/>
                <IconButton>
                  <LocationOnIcon color='primary' />
                </IconButton>
              </Box>
              <Typography variant='body2' fontWeight='bold'>{el.name}</Typography>
              <Typography variant='body1' >
                {el.direction}
              </Typography>
              <Divider sx={{ my: 2 }} />
            </Box>
          </Grid>
        ))
      }
    </Grid>
  )
}
 
