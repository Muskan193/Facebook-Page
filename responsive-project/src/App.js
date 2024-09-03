import React, { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import {  Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import Add from './components/Add';

function App() {
  const [mode ,SetMode]=useState("light")
 
  const darkTheme=createTheme({
   palette:{
    mode:mode,
     
   },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      {/*navbar */}
      <Navbar/>
      <Stack direction="row" spacing={2}   justifyContent="space-evenly">
      <Sidebar/>
      
    <Feed />
    <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>

  );
}

export default App;

        