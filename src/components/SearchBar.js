import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  console.log(searchTerm)
  
 const handleSubmit = (e) => {
  e.preventDefault()
    
    if(searchTerm){
       navigate(`/search/${searchTerm}`)
       setSearchTerm('')
    }
 }
  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
        // width:{xs:'150px', sm:'250px', md:'400px'},
        borderRadius:35,
        border: '1px solid #e3e3e3',
        pl:1,
        boxShadow:'none',
        mr: {sm:5}
    }}
     >
        <input
         
        className='search-bar'
        placeholder='Search ....'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }
        />
        
        <IconButton type='Submit' sx={{p:'10px', color:'red' }} aria-label='search'>
            <Search/> 
        </IconButton>  
    </Paper>
  )
}

export default SearchBar