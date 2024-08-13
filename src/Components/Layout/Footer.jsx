import {Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
       <Box sx={{textAlign:"center", bgcolor:"#1A1A19", color:"white", p:"3px"}}>
        <Box sx={{m:3, "& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2
        },
        "& svg : Hover":{
            color:"green",
            transform:"translateX(5px)",
            transition:'all 400ms'
        }}}>
            <InstagramIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:'16px'}}}>
            All Rights Reserved &copy; RK
        </Typography>
       </Box>
    </>
  )
}

export default Footer