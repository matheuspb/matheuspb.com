import React from 'react'
import { AppProps } from 'next/app'

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => (
  <Component {...pageProps} />
)

export default App
