import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {useDispatch} from "../redux/store";
import {useEffect} from "react";
import {Box, Grid, Typography} from "@mui/material";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import {useNavigate} from "react-router-dom";
import {CarouselBasic3} from "../components/carousel/index";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

 const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    height: "80vh",
    paddingTop: APP_BAR_DESKTOP,
  },
}))

 const SpecialGrid = styled(Grid)(({theme}) => ({
    "&.preview" : {
     
    },
  "&:hover" : {
    cursor: 'pointer',
  },
  [theme.breakpoints.up("md")]: {
  },
}))

const arrayImagesCarousel = [

  {url: '/static/img/articles.jpg', id: 123},
  {url: '/static/img/before-after.jpg', id: 145},
  {url: '/static/img/dudas.jpg', id: 167},
  {url: '/static/img/contacto.jpg', id: 1890},

]

const arrayImages = [
  {
    id: 123,
    title: 'Antes y despues',
    link: '/antes-y-despues',
    url: '/static/img/antes-despues-index.jpg',
  },
  {
    id: 145,
    title: 'El equipo',
    link: '/nosotros',
    url: '/static/img/team-preview.jpg',
  },
  {
    url: '/static/img/consulta-preview.jpg',
    id: 167,
    link: '/consulta-online',
    title: 'Consulta Online'
  },
  {
    url: '/static/img/contacto.jpg',
    id: 1890,
    link: '/procedimientos',
    title: 'Procedimientos',
  },
]


export default function LandingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function goTo(route) {
    navigate(route);
  }

  useEffect(() => {
    dispatch(updateImg(''))
  })


  return (
    <RootStyle title="Dr. Toro Parilli" id="move_top">
      <Box sx={{position: "relative", height: '100%'}}>
        <CarouselBasic3 items={arrayImagesCarousel} type='big' />

        {/*<Box*/}
        {/*  component='img'*/}
        {/*  sx={{width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6', position: 'absolute', zIndex: -1}}*/}
        {/*  src='/static/img/before-after.jpg'*/}
        {/*/>*/}
        <Box sx={{  zIndex: 111, position: 'absolute', top: 0, width: '100%' }}>
          <Grid container maxWidth='lg' align='center' justify='center' spacing={2} justifySelf='center'
                sx={{display: 'flex', justifyContent: 'center', mt: 0.2, pt: 10, pb: 10, mx: 'auto', height: {xs: '600px', md: 'auto'}, overflowY: {xs:  'scroll', md: 'hidden'} }}>
            {
              arrayImages.map((el, i) => (
                <SpecialGrid item xs={12} md={3} sx={{ px: 5, pb: 5 }} onClick={() => goTo(el.link)}>
                  <Typography
                    variant='h6'
                    fontWeight='bold'
                    color='primary'
                    sx={{backgroundColor: "rgba(255,255,255, 0.6);", p: 1}}
                  >
                    {el.title}
                  </Typography>
                  <Box sx={{ objectFit: 'contain' }} component='img' width={200} height={200} src={el.url} alt=""/>
                </SpecialGrid>
              ))
            }
          </Grid>
        </Box>

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
