import React from 'react'
import { Box, CardMedia, CardContent, Typography } from '@mui/material'
import { CheckCircleOutlineOutlined as Icon } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utilites/constants'
import {Loading} from './'

const ChannelCard = ({channel, marginTop}) => {
  
  
if(!channel?.snippet?.thumbnails?.high?.url) return <Loading/>



  return (
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width: {xs:'356px', md:'320px'},
      height:'326px',
      margin:'auto',
      marginTop
    }}>
       <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'white'}} >
         <CardMedia 
         image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
         alt={channel?.snippet?.title}
         sx={{borderRadius:'50%', height:'200px', width:'200px', mb:2, border:'3px solid blue'}}
         />
         <Typography variant='h5'>
           {channel?.snippet?.title}
           <Icon sx={{fontSize:15, color:'gray', ml:'10px',}}/>
         </Typography>
         {channel?.statistics?.subsciberCount && (
           <Typography >
             {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
           </Typography>
         )}
         
        </CardContent>
       </Link>
    </Box>
  )
}

export default ChannelCard