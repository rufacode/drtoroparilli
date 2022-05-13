import {useDispatch, useSelector} from "../../redux/store";
import {useEffect} from "react";
import {updateImg} from "../../redux/slices/backgroundImageSlice";
import {Box, Grid, Typography} from "@mui/material";
import InfoModal from "../InfoModal";

export default function Places() {
  const dispatch = useDispatch();
  const { sections, isLoading } = useSelector(state => state.language)

  useEffect(() => {
    dispatch(updateImg('/static/img/places.jpg'));
  }, [])

  return (
    <Box sx={{mt: 3}}>
      {
        sections.aboutUs && !isLoading &&
        <div>
          <Typography variant='h4'>
            {sections.aboutUs.options.placesData.title}
          </Typography>
          <Typography variant='body2' sx={{mb: 3}}>
            {sections.aboutUs.options.placesData.description}
          </Typography>
          <Box sx={{overflowY: 'auto', maxHeight: '305px', px: 2}}>
            <Grid container spacing={1}>
              {
                sections.aboutUs.options.placesData.places.map((place, i) => (
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
                    <Typography  variant='body2'>{place.title}</Typography>
                    <Typography  variant='caption'>{place.place}</Typography>
                    <InfoModal data={place} />
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </div>
      }
    </Box>
  )
}
 
