import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { allCountries } from '@/utils/cities.config';
import Header from '@/components/header/Header';
import { useSession, signIn } from "next-auth/react";
import GlassButton from '@/components/buttons/GlassButton';
import { useEffect } from 'react';
import { useCity } from '@/contexts/useCityContext';
import { handleLoadCountry } from '@/functions/map/handleLoadCountry';
import Footer from '@/components/footer/Footer';
import { CityType } from '@/types/City.type';

// Chargement du composant Map de manière dynamique avec l'option { ssr: false }
const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type HomeProps = {
  citiesWithMetetoData: CityType[];
}

export default function Home({ citiesWithMetetoData: initialCities }: HomeProps) {

  const { setCities } = useCity();

  //Afin que les données initialCities soient chargées uniquement au premier rendu du composant
  useEffect(() => setCities(initialCities, allCountries[0].country), []);

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
    <div>
      <Header />
      <Map />
      <Footer />
    </div>
  )
};

export const getServerSideProps = async () => {

  const citiesWithMetetoData = await handleLoadCountry(allCountries[0].cities);

  return { props: { citiesWithMetetoData } };
};
