import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { allCities } from '@/utils/cities.config';
import Header from '@/components/header/Header';
import { useSession, signIn } from "next-auth/react";
import GlassButton from '@/components/buttons/GlassButton';
import { useCity } from '@/contexts/useCityContext';
import Footer from '@/components/footer/Footer';
import { CityType } from '@/types/City.type';
import { getCitiesLocalisation } from '@/functions/map/getCitiesLocalisation'
import { getCitiesMetetoData } from '@/functions/map/getCitiesMetetoData';
import { useEffect } from 'react';

// Chargement du composant Map de manière dynamique avec l'option { ssr: false }
const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type HomeProps = {
  citiesMetetoData: CityType[];
}

export default function Home({ citiesMetetoData }: HomeProps) {

  const { setCities } = useCity();

  //Afin que les données initialCities soient chargées uniquement au premier rendu du composant
  useEffect(() => setCities(citiesMetetoData), []);

  const { status } = useSession();

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
      <Header />
      <Map />
      <Footer />
    </>
  )
};

export const getServerSideProps = async () => {

  const citiesLocalisation = await getCitiesLocalisation(allCities['france'], 'france');
  const citiesMetetoData = await getCitiesMetetoData(citiesLocalisation);
  console.log(citiesLocalisation);

  return { props: { citiesMetetoData } };
};
