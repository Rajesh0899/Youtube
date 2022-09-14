import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'
import {Loading} from './'


const VideosFeed = ({videos, direction}) => {

   if(!videos?.length) return <Loading/>

   
  return (
    <Stack direction={ direction || 'row'} 
           flexWrap='wrap'
           justifyContent='center'
           gap={3} >

        {videos.map((video, index) => (
          <Box key={index}>
           {video.id.videoId && <VideoCard video={video}/>}
           {video.id.channelId && <ChannelCard channel={video}/>}
          </Box>
        ))}    

    </Stack>
  )
}

export default VideosFeed