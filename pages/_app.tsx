import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './style.css'

const theme = createMuiTheme({
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
