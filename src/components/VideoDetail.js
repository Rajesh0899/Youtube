import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircleOutlineOutlined as Icon,  } from '@mui/icons-material'
import {VideosFeed} from './'
import fetchApi from '../utilites/fetchApi'
import {Loading} from './'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
       console.log(videoDetail)
    const {id} = useParams()

     useEffect(()=> {
      fetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

      fetchApi(`search?part=snippet&releatedToVideoId=${id}&type=video`)
      .then(data => setVideos(data.items))
     })
      
      if(!videoDetail?.snippet) return <Loading/>
      if(!videos) return <Loading/>
     const {snippet:{title, channelTitle}, statistics : {viewCount, likeCount}} = videoDetail
    

  return (
    <Box minHeight='90vh' direction='flex'>
      <Stack direction={{xs:'column', md:'row'}} overflowy='auto'>
        <Box flex={1}>
           <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
               className='react-player' controls/>
               <Typography color='white' variant='h5' p={2} fontWeight='bold'>
               {title}
               </Typography>
               <Stack direction='row' justifyContent='space-between' sx={{
                color:'white'}} py={1} px={2}>
                 {/* <Link to = {'/channel/${channelId}'} > */}
                  <Typography variant={{sm:'subtitle1', md:'h6'}} color='white'>
                  {channelTitle }
                  <Icon sx={{fontSize:'10px', color:'white'}}/>
                  </Typography>
                 {/* </Link> */}
                 <Stack direction='row' gap='25px' alignItems='center'>
                     <Typography variant='body1' sx={{opacity:0.8}}>
                          {parseInt(viewCount).toLocaleString()} views
                     </Typography>
                     <Typography variant='body1' sx={{opacity:0.8}}>
                          {parseInt(likeCount).toLocaleString()} Likes
                     </Typography>
                 </Stack>
               </Stack>
           </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
        <VideosFeed videos={videos} direction='column' />
        </Box>
      </Stack>
     
    </Box>
  )
}

export default VideoDetail