import { CircularProgress, Stack, Box } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box minHeight='90vh'>
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" justifyContent='center' alignItems='center'>
    <CircularProgress color="success" />
    
  </Stack>
  </Box>
  )
}

export default Loading