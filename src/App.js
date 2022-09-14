import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, VideoDetail, ChannelDetail, SearchFeed, Feed } from './components'



export default function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'black' }}>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Feed/>} />
            <Route path='/video/:id' exact element={<VideoDetail/>} />
            <Route path='/channel/:id' exact element={<ChannelDetail/>} />
            <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
        </Routes>
        
    </Box>
    </BrowserRouter>
  )
}
