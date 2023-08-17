import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { fetchWeatherData } from '@/functions/map/fetchWeatherData';
import { cityList } from '@/utils/cities.config';
import getAllCitiesLatLon from '@/functions/map/getAllCitiesLatLon';

// Chargement du composant Map de manière dynamique avec l'option { ssr: false }
const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home({citiesWithMetetoData}:any) {
  return (
    <>
      <Map citiesWithMetetoData={citiesWithMetetoData}/>
    </>
  )
};

export const getServerSideProps = async () => {

  const cities = await getAllCitiesLatLon(cityList);
  const citiesWithMetetoData =  await fetchWeatherData(cities);

  return { props: { citiesWithMetetoData} };
};
