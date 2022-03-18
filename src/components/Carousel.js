import React from "react";
import Slider from "react-slick";

export default function Carousel({images}) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div>
      <h2>Fade</h2>
      <Slider {...settings}>
        {
          images && images.map((img) => (
            <div>
              <img src={img.url}/>
            </div>
          ))
        }
        {/*<div>*/}
        {/*  <img src={baseUrl + "/abstract01.jpg"}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={baseUrl + "/abstract02.jpg"}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={baseUrl + "/abstract03.jpg"}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={baseUrl + "/abstract04.jpg"}/>*/}
        {/*</div>*/}
      </Slider>
    </div>
  );
}
