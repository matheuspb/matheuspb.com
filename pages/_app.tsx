import React from 'react'
import { AppProps } from 'next/app'

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps
}: AppProps) => (
  <Component {...pageProps} />
)

export default App
