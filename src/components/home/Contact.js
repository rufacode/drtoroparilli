import {Box, Container, Grid, Typography} from "@mui/material";
import ContactForm from "../contact/ContactForm";


export default function ContactWidget() {
  return (
    <Container sx={{py: {xs: 5}}}>
      <Typography variant='h2'>Contacto</Typography>
      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          <ContactForm/>
        </Grid>
        <Grid item xs={12} md={6} alignSelf='center' align='center'>
          <Box
            component='img'
            src='/static/img/example-doctor.png'
          />
        </Grid>
      </Grid>
    </Container>

  )
}
