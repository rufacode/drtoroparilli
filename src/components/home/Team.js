import {Container, Grid, Typography} from "@mui/material";
// import LastArticle from "./LastArticle";
// import TeamMember from "./TeamMember";
import {teamData} from "../../utils/mock-data/teamData";
import {CarouselCenterMode} from "../carousel/index";

export default function Team() {


  return (
    <Container sx={{py: {xs: 5}}}>
      <Typography variant='h2' sx={{ mb: 2 }}>El equipo</Typography>
      <Typography variant='body1' sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci tellus, tincidunt non semper vitae,
        posuere vel felis. Vivamus ultrices turpis et enim ullamcorp uere vel felis. Vivamus ultrices turpis et enim
        ullamcorp. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci tellus, tincidunt non semper
        vitae, posuere vel felis. Vivamus ultrices turpis et enim ullamcorp uere vel felis. Vivamus ultrices turpis et
        enim ullamcorp
      </Typography>
      <CarouselCenterMode type='team' arr={teamData} />
      {/*<Grid container spacing={2}>*/}
      {/*  {*/}
      {/*    teamData.map((el, i) => (*/}
      {/*      <Grid key={i + 1} item xs={12} md={6} lg={3}>*/}
      {/*        <TeamMember member={el} />*/}
      {/*      </Grid>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</Grid>*/}
    </Container>
  )
}
 
