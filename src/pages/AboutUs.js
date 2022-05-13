import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Parilli from "../components/aboutUs/Parilli";
import Places from "../components/aboutUs/Places";
import Team from "../components/aboutUs/Team";
import {useSelector} from "../redux/store";

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

  const { sections, isLoading } = useSelector(state => state.language)

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
      {
        sections.aboutUs && !isLoading &&
        <div>
          <Container>
            <Typography variant='h2' color='#fff' sx={{ pb: 2 }}>
              {sections.aboutUs.options.title}
            </Typography>
          </Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, minHeight: '30rem' }}>
                <ButtonWrapper >
                  {
                    sections.aboutUs.options.switchButtons.map(button => (
                      <Button key={button.id} sx={{ fontSize: '.85rem' }} variant={view === button.value && 'contained'} onClick={() => setView(button.value)}>{button.text}</Button>
                    ))
                  }
                </ButtonWrapper>
                {component}
              </Paper>
            </Grid>
            {/*<Grid item xs={12} md={6}>*/}
            {/*  {view}*/}
            {/*</Grid>*/}
          </Grid>
        </div>
      }
    </RootStyle>
  )
}
