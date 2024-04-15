import React from 'react'
import './App.css'
import { Box, TextField, Typography } from '@mui/material'

const App = () => {
  return (
    <Box>
      {/*first and last name search fields */}
      <Typography variant="h6">Search</Typography>
      <Box border='solid' borderColor='darkgrey'>
        <TextField id="first_name" label="First Name" />
        <TextField id="last_name" label="Last Name" />
      </Box>


      {/*User's details: 
      First Name, 
      Last Name, 
      DOB, 
      Address, 
      Gender, 
      Date registered with clinic */}
      <Box marginTop='50px' border='solid' borderColor='darkgrey' display='flex' flexDirection='column'>
        <TextField id="first_name" label="First Name" disabled />
        <TextField id="last_name" label="Last Name" disabled />
        <TextField id="dob" label="DOB" disabled />
        <TextField id="address" label="Address" disabled />
        <TextField id="gender" label="Gender" disabled />
        <TextField id="date_registered" label="Date Registered" disabled />
      </Box>

      {/*Summary textfield. */}
      <Box marginTop='50px' border='solid' borderColor='darkgrey' display='flex' flexDirection='column'>
        <TextField id="summary" label="Summary" disabled />
      </Box>
    </Box>
  )
}

export default App
