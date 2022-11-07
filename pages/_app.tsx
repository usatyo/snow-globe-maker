import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Snow City</title>
      </Head>
      <Component {...pageProps} />
    </div>
  ) 
}
