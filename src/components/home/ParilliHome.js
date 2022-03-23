import {Container, Grid, Typography} from "@mui/material";
import LastArticle from "./LastArticle";

export default function ParilliHome() {


  return (
    <Container sx={{py: {xs: 5}}}>
      <Typography variant='h2' sx={{ mb: 2 }}>Ultimos articulos</Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci tellus, tincidunt non semper vitae,
        posuere vel felis. Vivamus ultrices turpis et enim ullamcorp uere vel felis. Vivamus ultrices turpis et enim
        ullamcorp. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci tellus, tincidunt non semper
        vitae, posuere vel felis. Vivamus ultrices turpis et enim ullamcorp uere vel felis. Vivamus ultrices turpis et
        enim ullamcorp
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2} md={6}>
          <LastArticle />
        </Grid>
        <Grid item xs={2} md={6}>
          <LastArticle />
        </Grid>
      </Grid>
    </Container>
  )
}
 
