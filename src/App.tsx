import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './App.css'

const App = () => {
  const [readyForSearch, setReadyForSearch] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  useEffect(() => {
    if (readyForSearch) {
      console.log("About to do a search ...");

      const body = JSON.stringify({
        firstName: firstName,
        lastName: lastName
      });

      // Get user details, if the user exists in the PostgreSQL database.
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8787", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
          });

          const data: {role: string, content: string} = await response.json();
          setSummary(data.content);

        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
      setReadyForSearch(false);
    }
  }, [readyForSearch]);

  const handleSetFirstName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFirstName(event.target.value);
  }

  const handleSetLastName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLastName(event.target.value);
  }

  return (
    <Box>
      {/*first and last name search fields */}
      <Typography variant="h6">Search</Typography>
      <Box border='solid' borderColor='darkgrey' mb='10px'>
        <TextField id="first_name" label="First Name" onChange={handleSetFirstName} />
        y<TextField id="last_name" label="Last Name" onChange={handleSetLastName} />
      </Box>
      <Button id="search_button" variant="contained" color="primary" onClick={() => setReadyForSearch(true)}>Search</Button>


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
        <TextField id="summary" label="Summary" disabled multiline rows={10} value={summary}/>
      </Box>
    </Box>
  )
}

export default App
