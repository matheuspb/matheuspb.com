import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './style.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4C5157',
    },
    secondary: {
      main: '#95A9A2',
    },
  },
})

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>Matheus Bittencourt</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
