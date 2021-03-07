import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => (
  <>
    <Head>
      <title>Matheus Bittencourt</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
