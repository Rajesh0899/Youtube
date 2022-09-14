import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { VideosFeed} from './'
import fetchApi from '../utilites/fetchApi'
import {Loading} from './'

const SearchFeed = () => {
    
  const {searchTerm} = useParams()
   
   const [videos, setVideos] = useState([])
  
   console.log(videos)

   

   useEffect(()=>{
      
        fetchApi(`search?part=snippet&q=${searchTerm}`)
        .then(data => setVideos(data.items))

   },[searchTerm])
   
   if(!videos.length) return <Loading/>
   
   console.log(`search?part=snippet&q=${searchTerm}`)
   

  return (
   <Box p={2} minHeight="95vh">
   <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
    Your Search Results {searchTerm}
   </Typography>
   <Box display="flex">
     <Box sx={{ mr: { sm: '100px' } }}/>
     {<VideosFeed videos={videos} />}
   </Box>
 </Box>
   
  )
}

export default SearchFeed