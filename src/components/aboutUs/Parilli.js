import {updateImg} from "../../redux/slices/backgroundImageSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "../../redux/store";
import {Box, Grid, Typography} from "@mui/material";

export default function Parilli() {
  const dispatch = useDispatch();

  const { sections, isLoading } = useSelector(state => state.language)

  useEffect(() => {
    dispatch(updateImg('/static/img/parilli-about.jpg'));
  }, [])

  return (
    <Box sx={{ mt: 3 }}>
      {
        sections.aboutUs && !isLoading &&
        <div>
          <Typography variant='h4' fontWeight='bold'>
            {sections.aboutUs.options.parilliData.name}
          </Typography>
          <Typography variant='h6' sx={{ mb: 3 }}>
            {sections.aboutUs.options.parilliData.role}
          </Typography>
          <Box sx={{ overflowY: 'auto', maxHeight: '305px' }}>
            {
              sections.aboutUs.options.parilliData.text.map((el, i) => (
                <Typography sx={{ mt: 2 }}>
                  {el.content}
                </Typography>
              ))
            }
            <Grid container spacing={2} sx={{ mt: 3, }}>
              {
                sections.aboutUs.options.parilliData.extras.map((el, i) => (
                  <Grid irem xs={12} md={6} key={i + 1}>
                    <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography fontWeight='bold' variant='caption'>{el.text}</Typography>
                      <img src={el.img} alt=""/>
                    </Box>
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
