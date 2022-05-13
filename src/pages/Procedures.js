import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Container, Grid, IconButton, Typography} from "@mui/material";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import {useEffect, useState} from 'react';
import ProceduresList from "../components/procedures/ProceduresList";
import {useDispatch, useSelector} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE * 2,
  paddingBottom: APP_BAR_MOBILE * 2,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP * 2,
    paddingBottom: APP_BAR_DESKTOP * 2,
  },
}))



export default function Procedures() {
  const [sex, setSex] = useState('male');

  const { sections, isLoading } = useSelector(state => state.language)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/procedures.jpg'))
  }, [])

  function changeSex(value) {
    setSex(value);
  }

  return (
    <RootStyle title='Articulos'>
      {
        sections.procedures && !isLoading &&
        <div>
          <Container>
            <Typography variant='h2' fontWeight='bold' sx={{ mb: 2 }}>{sections.procedures.options.title}</Typography>
          </Container>
          <Grid container spacing={2} alignItems='center' justifyContent='center'>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconButton  onClick={() => changeSex('female')}>
                <FemaleIcon
                  sx={{
                    color:  sex === 'female' ? theme => theme.palette.secondary.lighter : 'lightgray',
                    fontSize: '10rem',
                    "&:hover": {
                      color: theme => theme.palette.secondary.lighter,
                      cursor: 'pointer'
                    }
                  }}
                />
              </IconButton>

              <IconButton  onClick={() => changeSex('male')}>
                <MaleIcon
                  sx={{
                    color: sex === 'male' ? theme => theme.palette.primary.lighter : 'lightgray'  ,
                    fontSize: '10rem',
                    "&:hover": {
                      color: theme => theme.palette.primary.lighter,
                      cursor: 'pointer'
                    }
                  }}
                />
              </IconButton>
            </Grid>
            <ProceduresList state={sex} />
          </Grid>
        </div>
      }
    </RootStyle>
  )
}
