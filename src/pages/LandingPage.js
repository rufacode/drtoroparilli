import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {useDispatch, useSelector} from "../redux/store";
import {useEffect} from "react";
import {getSomeData} from "../redux/slices/exampleSlice";
import {CarouselBasic3} from "../components/carousel/index";
import {Box, Divider} from "@mui/material";
import ContactWidget from "../components/home/Contact";
import News from "../components/home/News";
import Team from "../components/home/Team";
import ParilliHome from "../components/home/ParilliHome";

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

const arrayImages = [
  {
    url: '/static/img/articles.jpg',
    id: 123,
    title: 'Antes y despues',
    link: '/antes-y-despues',
    list: [
      {text: 'Gluteoplastia'},
      {text: 'Cirugia del abdomen'},
      {text: 'Liposuccion laser'},
      {text: 'Cirugia de nariz'},
      {text: 'Lifting facial'},
      {text: 'Cirugia de parpados'},
      {text: 'Aumento de mamas'},
    ],
    previewImg: '/static/img/antes-despues-index.jpg',
    text: 'Contamos con una diversa galeria de casos de exito que demuestra nuestra experiencia y nivel de trabajo.'
  },
  {url: '/static/img/before-after.jpg', id: 145},
  {url: '/static/img/dudas.jpg', id: 167},
  {url: '/static/img/contacto.jpg', id: 1890},
]



export default function LandingPage() {
  const dispatch = useDispatch();
  const {questions, isLoading} = useSelector(state => state.example)



  // useEffect(() => {
  //   async function getData () {
  //     // some stuff
  //     await dispatch(getSomeData())
  //   }
  // })


  return (
    <RootStyle title="Dr. Toro Parilli" id="move_top">
      <Box sx={{overflow: "hidden", position: "relative"}}>
        <CarouselBasic3 items={arrayImages} type='big' />
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
