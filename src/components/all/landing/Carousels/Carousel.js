import React, {useState, useEffect} from "react"
import Slider from "react-slick";
import { settings } from "./HomeCarouselSettings";
import Axios from 'axios';
import HomeCard from "./HomeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

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

  useEffect(()=>{
    CardsData();
   }, [])

  const CardsData = () =>{
    Axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
    .then(res=>{
      getData(res.data);
      console.warn(res.data);
    })
  }

  return (
      <div style={{  width: "90vw", position: "relative"}}>
       <SliderWrap>
        <Slider {...settings}>
            {data.map((dataValue) => (
              <HomeCard 
               key={dataValue.id}
               thumbnail = {dataValue.thumbnail.small}
               title = {dataValue.title}
               content = {dataValue.content} 
               theme = {theme}
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
