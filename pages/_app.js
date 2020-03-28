import React from 'react'

import { Provider } from 'react-redux'
import { Store } from '../store'

export default function MyApp({ Component, pageProps }) {
  return <Provider store={Store}><Component {...pageProps} /></Provider>
}