import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {SideBar, VideosFeed} from './'
import fetchApi from '../utilites/fetchApi'
import {Loading} from './'

const Feed = () => {
    
     const [selectedCategory, setSelectedCategory] = useState('New')
   const [videos, setVideos] = useState([])
  
   

  
   useEffect(()=>{
      
        fetchApi(`search?part=snippet&q=${selectedCategory}`)
        .then(data => setVideos(data.items))
   },[selectedCategory])
   
   if(!videos) return <Loading/>
    
  return (
    <Stack sx={{flexDirection: {sx:'column', md:'row'}}}>
     <Box sx={{height: {sx:'auto', md:'85vh'},
               borderRight:'1px solid #3d3d3d',
                px:{sx:0, md:2},
                width:'auto' }}>
         <SideBar
         
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
         />

         <Typography className='copyright'
                      variant='body2' sx={{mt:1.5, color:'#fff'}}>
            © Copyright 2022, All Rights Reserved || Rajesh
         </Typography>             
 
     </Box>
     <Box p={3} style={{overflowY:'auto', height:'80vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
           {selectedCategory} <span style={{color:'red'}}>Videos</span>
        </Typography>
        
        <VideosFeed videos={videos}/> 
        
     </Box>
    </Stack>
  )
}

export default Feed