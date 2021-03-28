import React, { useEffect } from 'react'
import Header from '../navigation/header'
import * as layoutStyles from './layout.module.scss'
import { StylesProvider } from '@material-ui/core/styles';
import AOS from "aos";
import "aos/dist/aos.css";


const Layout = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: -20
    });
  }, []);

  return (
    <StylesProvider injectFirst>
      <div>
        <Header />
        <div className={layoutStyles.container}>
          {props.children}
        </div>
      </div>
    </StylesProvider>
  )
}

export default Layout