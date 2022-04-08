import Slider from "react-slick";
import PropTypes from "prop-types";
import {useRef} from "react";
// material
import {styled, useTheme} from "@mui/material/styles";
import {Box, Button, Grid, Typography} from "@mui/material";
// utils
// import mockData from "../../../utils/mock-data";
//
import {CarouselControlsPaging2,} from "./controls";
import {useNavigate} from "react-router-dom";

// ----------------------------------------------------------------------
//
// const MOCK_CAROUSELS = [...Array(4)].map((_, index) => ({
//   id: mockData.id(index),
//   title: mockData.text.title(index),
//   image: mockData.image.feed(index),
//   imageMobile: mockData.image.banner(index),
//   description: mockData.text.description(index),
// }));
//SOLO PARA EL CAROUSEL DE IMAGENES DE LANDING PAGE
const RootStyle = styled("div", {
  shouldForwardProp : (type) => type, })(({theme, type}) => ({
  position: "relative",
  "& .slick-track": {
    display: "inline-flex",
  },
  "& .slick-slide img" : {
    height: type === 'big' ? '100vh' : '100%',
    // [theme.breakpoints.down('md')]: {
    //   height: '50vh',
    // }
  }
}));


// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({item}) {
  const navigate = useNavigate();

  const goTo = (link) => navigate(link)


  return (
    <Box sx={{ position: 'relative', height: '100vh', pointerEvents: 'none' }}>
      <Box
        component='img'
        sx={{width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6', position: 'absolute', zIndex: -1, filter: 'blur(10px)' }}
        src={item.url}
      />
      {/*<Box sx={{ display: 'grid', placeItems: 'center', height: '100%' }}>*/}
      {/*  <Grid container spacing={6} sx={{ px: 10 }}>*/}
      {/*    <Grid item xs={12} md={6}>*/}
      {/*      <Typography variant='h3' sx={{ mb: 2 }}>{item.title}</Typography>*/}
      {/*      <Typography variant='h6' sx={{ mb: 2 }}>{item.text}</Typography>*/}
      {/*      {*/}
      {/*        item.list && item.list.map((el, i) => (*/}
      {/*          <Typography key={i + 1}  variant='body1'>- {el.text}</Typography>*/}
      {/*        ))*/}
      {/*      }*/}
      {/*      <Box display='flex' justifyContent='center'>*/}
      {/*        <Button onClick={() => goTo(item.link)} sx={{ my: 4}} variant='contained'>Ver mas</Button>*/}
      {/*      </Box>*/}
      {/*    </Grid>*/}
      {/*    <Grid item xs={12} md={6}>*/}
      {/*      <Box*/}
      {/*        component='img'*/}
      {/*        width='100%'*/}
      {/*        sx={{  maxHeight: '400px', borderRadius: '15px'}}*/}
      {/*        src={item.previewImg}*/}
      {/*      />*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Box>*/}
    </Box>

  );
}

function CarouselImages({item}) {
  console.log(item);
  return (
    <Box
      component='img'
      sx={{width: '100%', height: '500px', objectFit: 'cover' }}
      src={item.url}
    />
  )
}

export default function CarouselBasic3({items, type}) {
  console.log(items);
  const theme = useTheme();
  const carouselRef = useRef();

  const settings = {
    dots: type === 'small',
    arrows: false,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    ...CarouselControlsPaging2({
      sx: {mt: 3},
    }),
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle type={type}>
      {
        type === 'small' &&
        <Slider ref={carouselRef} {...settings}>
          {items.map((item, index) => (
            <CarouselImages key={index + 1} item={item}/>
          ))}
        </Slider>
      }
      {
        type === 'big' &&
        <Slider ref={carouselRef} {...settings}>
          {items.map((item, index) => (
            <CarouselItem key={index + 1} item={item}/>
          ))}
        </Slider>
      }
      {/*<CarouselControlsArrowsBasic2*/}
      {/*  onNext={handleNext}*/}
      {/*  onPrevious={handlePrevious}*/}
      {/*/>*/}
    </RootStyle>
  );
}
