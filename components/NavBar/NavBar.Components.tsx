import React, { useRef } from 'react'
import Style from './NavBar.module.scss';
import Image from 'next/image';
import HTICLOGO from '../../assets/Rectangle 7.png';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import { NavBarTheme } from './AppBar.Style';
import { MenuListCom } from './MenuListCom/MenuListCom';
import { MenuListData } from './NavBar.Helper';

export default function NavBar() {
  
  

  return (
    <section className='NavBar'>
      <ThemeProvider theme={ NavBarTheme }>
        <AppBar position='static'>
          <Toolbar>
            <Image 
                src={ HTICLOGO }
                alt='pic'
            />

            <MenuListCom Data={ MenuListData }/>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </section>
  )
}



{/* <AppBar position='static' sx={{background: '#F0F5F9'}}>
        <Toolbar >
          <Image 
            src={ HTICLOGO }
            alt='pic'
          />
          <Typography variant="h6" sx={{color: '#000'}}>
            Laouar mouaad
          </Typography>
        </Toolbar>
      </AppBar> */}