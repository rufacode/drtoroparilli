import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Box, Container, Grid, Typography} from "@mui/material";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import {useDispatch} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import { useEffect } from 'react';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE * 2,
  paddingBottom: APP_BAR_MOBILE * 2,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP * 1.5,
    paddingBottom: APP_BAR_DESKTOP * 2,
  },
}))




export default function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/contacto.jpg'))
  }, [])

  return (
    <RootStyle>
      <Container>
        <Typography variant="h1" fontWeight='bold'  >
          Contacto
        </Typography>
        <Grid container spacing={4} sx={{mt: 2}}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>

    </RootStyle>
  )
}
