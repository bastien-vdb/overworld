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

export default function Home({ citiesWithMetetoData:initialCities }: any) {

  const [citiesWithMetetoData, setCitiesWithMetetoData] = useState(initialCities);
  
  const HandleChangeCountry = async () => {
    const cities = await getAllCitiesLatLon(['milan', 'rome']);
    const citiesWithMetetoData = await fetchWeatherData(cities);
    setCitiesWithMetetoData(citiesWithMetetoData);
  };

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
    <button onClick={HandleChangeCountry}>Reset</button>
      <Header />
      <Map citiesWithMetetoData={citiesWithMetetoData} />
    </>
  )
};

export const getServerSideProps = async () => {

  const cities = await getAllCitiesLatLon(cityList);
  const citiesWithMetetoData = await fetchWeatherData(cities);

  return { props: { citiesWithMetetoData } };
};
