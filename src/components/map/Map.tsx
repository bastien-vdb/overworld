import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerComp from '@/components/map/MarkerComp';
import TileLayerComp from './TileLayerComp';
import { useCity } from '@/contexts/useCityContext';

const mapConfig: [number, number] = [43.7696, 7.49508];


function Map() {

  const { getCities }: any = useCity();
  const cities = getCities();

  return (
    <MapContainer
      zoomControl={false}
      scrollWheelZoom={false}
      center={mapConfig}
      zoom={5}
      style={{ width: '100%', height: '600px' }}
      dragging={false}
    >
      <TileLayerComp />
      {cities.map((city: any, i: number) => <MarkerComp key={i} city={city} />)}
    </MapContainer>
  );
}

export default Map;