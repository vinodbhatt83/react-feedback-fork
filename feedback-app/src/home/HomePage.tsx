import React, { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { FeedbackPage, useUserData } from '../feedback'

export const HomePage = () => {
  const theme = createTheme()
  const { isLoading, userData, setIsLoading } : { isLoading: boolean, userData: any, setIsLoading: any } = useUserData()
  console.log("HOMEPAGE userData ", userData)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        {
          <FeedbackPage userData={userData} />
        }
      </Container>
    </ThemeProvider>
  );
}