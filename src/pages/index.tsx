import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { fetchWeatherData } from '@/functions/map/fetchWeatherData';
import { cityList } from '@/utils/cities.config';
import getAllCitiesLatLon from '@/functions/map/getAllCitiesLatLon';
import Header from '@/components/header/Header';
import { useSession, signIn } from "next-auth/react";
import GlassButton from '@/components/buttons/GlassButton';
import { useState } from 'react';

// Chargement du composant Map de manière dynamique avec l'option { ssr: false }
const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home({ citiesWithMetetoData }: any) {

  const [test, setTest] = useState(0);


  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Chargement...</p>
  }

  if (status !== "authenticated") return (
    <div className='h-screen bg-black flex justify-center items-center'>
      <GlassButton text="Connect to OpenWorld" onClick={() => signIn()} />
    </div>
  )

  return (
    <>
    {test}
    <button onClick={() => setTest(test + 1)}>test</button>
      <Header />
      <Map citiesWithMetetoData={citiesWithMetetoData} />
    </>
  )
};

export const getServerSideProps = async () => {

  const cities = await getAllCitiesLatLon(cityList);
  const citiesWithMetetoData = await fetchWeatherData(cities);
  console.log('y ka bay li again');

  return { props: { citiesWithMetetoData } };
};
