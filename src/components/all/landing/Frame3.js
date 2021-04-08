import { Button, Grid, Paper, Typography, Hidden } from '@material-ui/core'
import React from 'react'
import Link from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import Tutorial from './TutorialCardSmall'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation])

function Frame3(props) {
  return (
    <Paper elevation={0}
      style={{ padding: "2% 11.1%", margin: '35px auto' }}
    >
      <Grid container
        direction="column"
        alignItems="center"
        justify="space-between"
      >
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h4" style={
            { 
              fontSize: "40px", 
              marginBottom: '20px' 
            }
          }>
            What We Do?
          </Typography>
        </Grid>

        <Hidden smDown>
          <Grid item xs={8}>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              navigation
              watchOverflow
              style={{ padding: '0px 50px' }}
            >

              {props.tutorials.map((tutorial, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "auto" }}
                >
                  <Tutorial item key={index} tutorial={tutorial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Hidden>

      </Grid>
    </Paper >
  )
}

export default Frame3;