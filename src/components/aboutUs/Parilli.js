import {updateImg} from "../../redux/slices/backgroundImageSlice";
import {useEffect} from "react";
import {useDispatch} from "../../redux/store";
import {Box, Grid, Typography} from "@mui/material";
import { parilliData } from '../../utils/mock-data/parilliData'

export default function Parilli() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/parilli-about.jpg'));
  }, [])

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant='h4'>
        {parilliData.name}
      </Typography>
      <Typography variant='h6' sx={{ mb: 3 }}>
        {parilliData.role}
      </Typography>
      <Box sx={{ overflowY: 'auto', maxHeight: '305px' }}>
        {
          parilliData.text.map((el, i) => (
            <Typography sx={{ mt: 2 }}>
              {el.content}
            </Typography>
          ))
        }
        <Grid container spacing={2} sx={{ mt: 3, }}>
          {
            parilliData.extras.map((el, i) => (
              <Grid irem xs={12} md={6}>
                <Box sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography fontWeight='bold' variant='caption'>{el.text}</Typography>
                  <img src={el.img} alt=""/>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}
