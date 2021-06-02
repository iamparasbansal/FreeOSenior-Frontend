import React, {useState, useEffect} from "react"
import Slider from "react-slick";
import { settings } from "./HomeCarouselSettings";
import HomeCard from "./HomeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import axiosFetch from "../../../../utils/axiosFetch"

const SliderWrap = styled.div`
    .slick-slider {
        .slick-list {
            padding-bottom: 20px;
        }
        .slick-dots li button::before{
          font-size: 12px;
        }
    }
`

const CarouselCards = (props) => {

  const theme = props.theme;
  const [data, getData] = useState([]);

   useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosFetch.get("api/homecard")

        if (res.data) {
          console.log(res.data)
          getData(res.data)
        }
      } catch (error) {
        console.log(error)
        console.log(error.response.data.error)
      }
    }
    fetchdata()
  }, [])

  return (
      <div style={{  width: "90vw", position: "relative"}}>
       <SliderWrap>
        <Slider {...settings}>
            {data.map((dataValue) => (
              <HomeCard 
               key={dataValue._id}
               thumbnail = {dataValue.imglink}
               title = {dataValue.title}
               content = {dataValue.desc} 
               theme = {theme}
               seemore= {dataValue.seemore}
               />
            ))}
            {/* {console.log(data.thumbnail.small)}
          <HomeCard key={data.id} thumbnail={data.thumbnail.small} title={data.title} content={data.content}/> */}
        </Slider>
       </SliderWrap>
      </div>
  );
};

export default CarouselCards;
