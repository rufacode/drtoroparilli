import Slider from "react-slick";
import PropTypes from "prop-types";
import {useRef} from "react";
// material
import {styled, useTheme} from "@mui/material/styles";
import {Box} from "@mui/material";
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

const RootStyle = styled("div")(({theme}) => ({
  position: "relative",
  "& .slick-track": {
    display: "inline-flex",
  },
}));


// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({item}) {
  return (
    <Box
      component='img'
      sx={{width: '100%', height: {xs: '100%', md: '600'}, objectFit: 'contain'}}
      src={item.url}
    />
  );
}

export default function CarouselBasic3({items}) {
  console.log(items);
  const theme = useTheme();
  const carouselRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
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
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {items.map((item, index) => (
          <CarouselItem key={index + 1} item={item}/>
        ))}
      </Slider>
      {/*<CarouselControlsArrowsBasic2*/}
      {/*  onNext={handleNext}*/}
      {/*  onPrevious={handlePrevious}*/}
      {/*/>*/}
    </RootStyle>
  );
}
