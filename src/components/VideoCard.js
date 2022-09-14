import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utilites/constants';
import {  CheckCircleOutlineOutlined as Icon} from '@mui/icons-material';
import {Loading} from './'

const VideoCard = ({video}) => {
    const {id:{videoId},snippet} = video
    if(!video) return <Loading/>
  return (
    <Card sx={{width:{xs:'100%', sm:'350px', md:'320px'}, boxShadow:'none', borderRadius:3}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url}
                 alt={snippet?.title}
                 sx={{width:{xs:'100%', sm:'350px', md:'320px' }, height:'180px'}}
                   />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height:'100px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
         <Typography variant='subtitle1' fontWeight='bold' color='white'>
          {snippet?.title.slice(0,70) || demoVideoTitle.slice(0, 70)}
         </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
         <Typography variant='subtitle2' fontWeight='bold' color='gray' textAlign='justify'>
          {snippet?.channelTitle || demoChannelTitle}
          <Icon sx={{fontSize:20, color:'gray', ml:'10px',}}/>
         </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard