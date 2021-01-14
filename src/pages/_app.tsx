import 'water.css/out/water.min.css'
import 'highlight.js/styles/night-owl.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  // TODO!
  return (
    <div style={{ maxWidth: 768, margin: '0 auto' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
