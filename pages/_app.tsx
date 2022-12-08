import 'tailwindcss/tailwind.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Snow City</title>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
