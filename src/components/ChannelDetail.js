import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {VideosFeed, ChannelCard} from './'
import fetchApi from '../utilites/fetchApi'
import {Loading} from './'

const ChannelDetail = () => {
 const [channeldetail, setChanneldetail] = useState([])
 const [videos, setVideos] = useState([])

//  console.log(channeldetail, videos)

   
  const {id} = useParams()

  useEffect(()=>{
     fetchApi(`channels?part="snippet&id=${id}`)
     .then(data => setChanneldetail(data?.items));

     fetchApi(`search?channelId=${id}&part=snippet&order=date`)
     .then(data => setVideos(data.items) )
  },[id])

  if(!channeldetail) return <Loading/>
  if(!videos) return <Loading/>
  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 62%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height:'320px'
            }}/>
            
            <ChannelCard marginTop='-93px' channel={channeldetail[0]}/>
      </Box>
      <Box display='flex' p='2'>
           <Box sx={{mr:{sm:'100px'}}}/>
             <VideosFeed videos={videos}/>
           
      </Box>
    </Box>
  )
}

export default ChannelDetail