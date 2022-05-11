import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {useDispatch, useSelector} from "../redux/store";
import {useEffect} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import {useNavigate} from "react-router-dom";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}))

export const SpecialGrid = styled(Grid)(({theme}) => ({
  "&:hover" : {
    cursor: 'pointer',
    ".preview" : {
      opacity: 0.5,
      backgroundColor: 'black',
    }
  },
  [theme.breakpoints.up("md")]: {
  },
}))

export default function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { sections, isLoading } = useSelector(state => state.language);

  function goTo(route) {
    navigate(route);
  }

  useEffect(() => {
    dispatch(updateImg(''))
  })


  return (
    <RootStyle title="Dr. Toro Parilli" id="move_top">
      <Box sx={{position: "relative", minHeight: '100vh', maxHeight: '100%'}}>
        {/*<CarouselBasic3 items={arrayImages} type='big' />*/}

        <Box
          component='img'
          sx={{width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6', position: 'absolute', zIndex: -1}}
          src='/static/img/before-after.jpg'
        />
        <Grid container maxWidth='lg' align='center' justify='center' spacing={2} justifySelf='center'
              sx={{display: 'flex', justifyContent: 'center', mt: 0.2, pt: 10, pb: 10, mx: 'auto'}}>
          {
            sections.home && !isLoading && sections.home.options.cards.map((el) => (
              <SpecialGrid key={el.id} item xs={12} md={4} sx={{ px: 5, pb: 5 }} onClick={() => goTo(el.href)}>
                <Typography
                  variant='h6'
                  fontWeight='bold'
                  color='primary'
                  sx={{backgroundColor: "rgba(255,255,255, 0.6);", p: 1}}
                >
                  {el.title}
                </Typography>
                <Box classsName='preview' component='img' width='100%' height={200} src={el.img} alt=""/>
              </SpecialGrid>
            ))
          }
        </Grid>
      </Box>


      {/*<ParilliHome />*/}
      {/*<Divider sx={{ my: 2 }} />*/}
      {/*<Team />*/}
      {/*<Divider sx={{ my: 2 }} />*/}
      {/*<News />*/}
      {/*<Divider sx={{ my: 2 }} />*/}
      {/*<ContactWidget />*/}
    </RootStyle>
  )
}
