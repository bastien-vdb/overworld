import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app'
import 'daisyui/dist/full.css';
import { SessionProvider } from "next-auth/react";
import { CityProvider } from '@/contexts/useCityContext';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {


  return (
    <>
      <SessionProvider session={session}>
        <CityProvider>
          <Component {...pageProps} />
        </CityProvider>
      </SessionProvider>
    </>
  )
}
