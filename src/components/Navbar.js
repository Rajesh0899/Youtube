import React from 'react'
import { Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'

import {SearchBar} from './'

const Navbar = () => {
  return (
    <Stack direction='row'
     alignItems='center'
     p={2}
    sx={{ position:'sticky', background:'black', top:0, justifyContent: 'space-between'}}
    >
       <Link to='/' style={{display:'flex', alignItems:'center',   }}>
       <img src='https://img.icons8.com/3d-fluency/100/000000/youtube-play.png' alt='Brand Logo' height={60}/>
       <Typography color='white' fontSize={{sm:'20px', md:'30px', lg:'40px'}}>
          Premium
       </Typography>
       </Link>   
      <SearchBar/>
    </Stack>
  )
}

export default Navbar