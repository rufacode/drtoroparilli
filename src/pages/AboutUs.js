import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Venezuela from "../components/contact/Venezuela";
import Dominicana from "../components/contact/Dominicana";
import Parilli from "../components/aboutUs/Parilli";
import Places from "../components/aboutUs/Places";
import Team from "../components/aboutUs/Team";
import {useDispatch} from "../redux/store";
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


const ButtonWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}))



export default function AboutUs() {
  const [view, setView] = useState('parilli');
  const [component, setComponent] = useState(undefined);

  useEffect(() => {
    switch (view) {
      case "parilli":
        setComponent(<Parilli />)
        break;
      case "team":
        setComponent(<Team />)
        break;
      case "places":
        setComponent(<Places />)
        break;
      default:
        break;
    }
  }, [view]);

  return (
    <RootStyle title='Articulos'>
      <Container>
        <Typography variant='h2' color='#fff' sx={{ pb: 2 }}>
          Sobre nosotros
        </Typography>
      </Container>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, minHeight: '30rem' }}>
            <ButtonWrapper >
              <Button sx={{ fontSize: '.85rem' }} variant={view === 'parilli' && 'contained'} onClick={() => setView('parilli')}>Dr. Parilli</Button>
              <Button sx={{ fontSize: '.85rem', mx: {md: 2} }} variant={view === 'team' && 'contained'} onClick={() => setView('team')}>El Equipo</Button>
              <Button sx={{ fontSize: '.85rem' }} variant={view === 'places' && 'contained'} onClick={() => setView('places')}>Instalaciones</Button>
            </ButtonWrapper>
            {component}
          </Paper>
        </Grid>
        {/*<Grid item xs={12} md={6}>*/}
        {/*  {view}*/}
        {/*</Grid>*/}
      </Grid>


    </RootStyle>
  )
}
