import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerComp from '@/components/map/MarkerComp';
import TileLayerComp from './TileLayerComp';
import { useCity } from '@/contexts/useCityContext';

const mapConfig: [number, number] = [48.8566, 2.3522];

function Map({ citiesWithMetetoData }: any) {

  const { getCities }: any = useCity();
  const cities = getCities();

  return (
    <MapContainer center={mapConfig} zoom={5} style={{ width: '100%', height: '600px' }}>
      <TileLayerComp />
      {cities.map((city: any, i: number) => <MarkerComp key={i} city={city} />)}
    </MapContainer>
  );
}

export default Map;