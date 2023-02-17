import 'tailwindcss/tailwind.css'
import Head from 'next/head'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://snow-city-hipubp10c-usatyo.vercel.app/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AluminumMikan" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={'こんにちは'} />
        <meta property="og:title" content={'snow'} />
        <meta property="og:site_name" content={'snow-globe'} />
        <meta property="og:description" content={'aaa'} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'/ogp.png'} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Snow City</title>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
