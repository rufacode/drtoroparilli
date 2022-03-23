import React, {useRef} from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// material
import {styled, useTheme} from "@mui/material/styles";
import {Box, Card, CardContent, CardMedia, Divider, Paper, Tooltip, Typography,} from "@mui/material";
// utils
import {CarouselControlsPagingBelow} from "./controls";
// import ImgLabel from "../machines/ImgLabel";
// import moment from 'moment';
import {useNavigate} from "react-router-dom";
// import RedirectButton from "../RedirectButton";
// import CountryFlag from "../CountryFlag";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import mockData from '../../utils/mock-data/general-mock-data';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: "/static/mock-images/feeds/feed_1.jpg",
  description: mockData.text.description(index),
}));

const RootStyle = styled("div")(({theme}) => ({
  overflow: "hidden",
  position: "relative",
  "&:before, &:after": {
    top: 0,
    left: 0,
    zIndex: 8,
    width: 48,
    content: "''",
    height: "100%",
    display: "none",
    position: "absolute",
    [theme.breakpoints.up(480)]: {
      display: "block",
    },
  },
  "&:after": {
    right: 0,
    left: "auto",
    transform: "scaleX(-1)",
  },
  "& .slick-track": {
    display: "inline-flex",
  },
  "& .slick-arrow": {
    display: "none !important",
  },
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({item}) {
  const navigate = useNavigate();

  const goToDetail = (item) => {
    return navigate(`/maquinas/${item._id}`)
  }
  return (
    <Card sx={{
      mx: 2,
      mb: 3,
      position: 'relative'
    }} onClick={() => goToDetail(item)}>
      <Box sx={{position: 'relative'}}>
        <CardMedia
          component="img"
          image={item.Img_Producto}
          sx={{
            maxHeight: 238,
            height: 190,
            maxWidth: {md: 256},
            width: '100%',
            objectFit: {xs: 'cover', md: 'contain'}
          }}
          alt="green iguana"
        />
        {/*<CountryFlag src='/static/dummy/chile-flag.png' />*/}
      </Box>

      {/*{*/}
      {/*  item.Descuento_Producto &&*/}
      {/*  <ImgLabel label={item.Descuento_Producto} />*/}
      {/*}*/}
      {/*{*/}
      {/*  item.Es_Nuevo &&*/}
      {/*  <ImgLabel label='Nuevo' secondLabel/>*/}
      {/*}*/}
      <Divider/>
      <CardContent>
        <Typography variant="caption" color="primary.dark">
          Torfresma
        </Typography>
        <Typography variant="h6">{item.Nombre_Producto}</Typography>
        <Box sx={{minHeight: '106px'}}>
          {
            item.Precio_Producto &&
            <>
              <Typography variant="caption">Venta</Typography>
              <Typography variant="h6" color="primary.dark" sx={{mb: 1}}>
                {item.Precio_Producto}
              </Typography>
            </>
          }

          {
            item.Precio_Arriendo &&
            <>
              <Typography variant="caption">Arriendo</Typography>
              <Typography variant="h6" color="primary.dark" sx={{mb: 1}}>
                {item.Precio_Arriendo}
              </Typography>
            </>
          }
        </Box>

        <Box sx={{my: 2}}>
          <Typography variant='body1'>
            Nota:
          </Typography>
          <Tooltip title={
            <>
              <Typography>Tecnico / Mecanico : 3/3</Typography>
              <Typography>Año: 3/5 </Typography>
              <Typography>Horas de uso: 3/4</Typography>
            </>
          }>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <MilitaryTechIcon color='primary'/>
              <Typography variant='h5'>
                6.7 /
                <span style={{fontSize: '16px', marginLeft: '5px'}}>7</span>
              </Typography>
            </Box>
          </Tooltip>
        </Box>

        {/*<Box display="flex" sx={{justifyContent: 'flex-end'}}>*/}
        {/*  /!*<Box display='flex'>*!/*/}
        {/*  /!*  <Rating name="read-only" value={item.Rating} readOnly/>*!/*/}
        {/*  /!*  <Box sx={{ml: 2}}>{item.Rating}</Box>*!/*/}
        {/*  /!*</Box>*!/*/}
        {/*  <RedirectButton color='primary' text=' ' onClick={() => goToDetail(item)} />*/}
        {/*</Box>*/}
      </CardContent>
    </Card>
  );
}

function CarouselItemTeam({member}) {
  return (
    <Paper elevation={3} sx={{ mx: 2 }}>
      <Box component='img' src={member.img} sx={{objectFit: 'contain'}} width={'100%'} height={200}/>
      <Box sx={{p: 2}}>
        <Typography variant='h6' align='center' fontWeight='bold' sx={{mb: 2}}>{member.name}</Typography>
        <Typography fontSize='0.8rem' align='center' sx={{mb: 2}}>{member.role}</Typography>
        <Typography variant='body1' align='center' sx={{mb: 2}}>
          {member.desc.substring(0, 250).concat('...')}
        </Typography>
      </Box>
    </Paper>
  )
}

function CarouselItemNews({currentNew}) {
  const navigate = useNavigate();

  const formatTitle = (string) => {
    if (string.length > 60) {
      return string.substring(0, 57).concat('...')
    } else {
      return string;
    }
  }

  const goToDetail = (item) => {
    return navigate(`/noticias/${item.Codigo}`)
  }


  return (
    <Card onClick={() => goToDetail(currentNew)} sx={{
      mx: 2,
      mb: 3,
      position: 'relative',
    }}>
      <CardMedia
        component="img"
        image={currentNew.Banner_Desktop}
        alt="green iguana"
      />
      <Divider/>
      <CardContent>
        <Typography variant="h6" sx={{mb: 2}}>{formatTitle(currentNew.Titulo)}</Typography>

        {/*<Typography variant="h6" color="#527701" sx={{mb: 1}}>*/}
        {/*  {moment(currentNew.Fecha_Publicacion, 'YYYYMMDD').fromNow()}*/}
        {/*</Typography>*/}
      </CardContent>
    </Card>
  )

}

export default function CarouselCenterMode({type, arr}) {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    dots: true,
    slidesToShow: 4,
    // centerMode: true,
    // centerPadding: "60px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {slidesToShow: 2},
      },
      {
        breakpoint: 600,
        settings: {slidesToShow: 2},
      },
      {
        breakpoint: 480,
        settings: {slidesToShow: 1.05, centerPadding: "0"},
      },
    ],
    ...CarouselControlsPagingBelow({
      sx: {mt: 3},
    }),
  };

  if (type === 'products') {
    return (
      <RootStyle>
        <Slider ref={carouselRef} {...settings}>
          {arr.map((item) => (
            <CarouselItem key={item._id} item={item}/>
          ))}
        </Slider>
      </RootStyle>
    );
  } else if (type === 'news') {
    return (
      <RootStyle>
        <Slider ref={carouselRef} {...settings}>
          {arr.map((item) => (
            <CarouselItemNews key={item._id} currentNew={item}/>
          ))}
        </Slider>
      </RootStyle>
    );
  } else if (type === 'team') {
    return (
      <RootStyle>
        <Slider ref={carouselRef} {...settings}>
          {arr.map((item) => (
            <CarouselItemTeam key={item.name} member={item}/>
          ))}
        </Slider>
      </RootStyle>
    )
  }
}
