import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app'
import 'daisyui/dist/full.css';
import Header from '@/components/header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
