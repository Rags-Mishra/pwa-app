import React,{useState} from 'react'
import { BottomNavigation,BottomNavigationAction,Grid } from '@mui/material';
import { Restore,Favorite, LocationOn, Home, Mail, Search } from '@mui/icons-material';
const Navigation = () => {
const [value,setValue]=useState('')
  return (
    <Grid container sx={{justifyContent:'center',alignItems:'center'}}>
      <Grid item md={6} xs={12}>
    <BottomNavigation
    showLabels
    value={value}
    
  >
    <BottomNavigationAction label="Home" icon={<Home />} />
    <BottomNavigationAction label="Inbox" icon={<Mail />} />
    <BottomNavigationAction label="Search" icon={<Search/>} />
  </BottomNavigation>
  </Grid>
  </Grid>
  )
}

export default Navigation