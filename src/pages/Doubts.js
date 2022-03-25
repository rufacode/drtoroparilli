import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import Venezuela from "../components/contact/Venezuela";
import Dominicana from "../components/contact/Dominicana";
import Parilli from "../components/aboutUs/Parilli";
import Places from "../components/aboutUs/Places";
import Team from "../components/aboutUs/Team";
import {useDispatch} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import {doubtButton, generalData} from "../utils/mock-data/doubts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionsList from "../components/doubts/QuestionsList";
import QuestionModal from "../components/doubts/QuestionModal";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  paddingBottom: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingBottom: APP_BAR_DESKTOP,
  },
}))





export default function Doubts() {
  const [section, setSection] = useState(generalData)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/dudas.jpg'));
  }, [])


  return (
    <RootStyle title='Articulos'>
      <Container>
        <Typography variant='h2' >
          Tus dudas
        </Typography>
      </Container>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, minHeight: '30rem' }}>
            <Button
              sx={{ fontSize: '.85rem' }}
              fullWidth
              variant={section.view === 'general' && 'contained'}
              onClick={() => setSection(generalData)}
            >
              Dudas generales
            </Button>
            <Grid container>
              {
                doubtButton.map((el, i) => (
                  <Grid item xs={12} sm={6} key={i + 1}>
                    <Button
                      fullWidth
                      sx={{ fontSize: '.85rem', mx: {md: 2}, my: 2 }}
                      variant={section.view === el.view && 'contained'}
                      onClick={() => setSection(el)}
                    >
                      {el.name}
                    </Button>
                  </Grid>
                ))
              }
            </Grid>
            <QuestionModal />
            {/*<Button*/}
            {/*  sx={{ fontSize: '.85rem', my: 2 }}*/}
            {/*  fullWidth*/}
            {/*  variant='contained'*/}
            {/*>*/}
            {/*  ¿NO ACLARAMOS TUS DUDAS? CONSÚLTANOS*/}
            {/*</Button>*/}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h4'>{section.name}</Typography>
          <QuestionsList data={section} />
        </Grid>
      </Grid>


    </RootStyle>
  )
}
