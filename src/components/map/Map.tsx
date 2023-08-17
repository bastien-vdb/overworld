import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerComp from '@/components/map/MarkerComp';
import TileLayerComp from './TileLayerComp';

const mapConfig = [48.8566, 2.3522];

function Map({ citiesWithMetetoData }: any) {

  return (
    <MapContainer center={mapConfig} zoom={5} style={{ width: '100%', height: '600px' }}>
      <TileLayerComp />
      {citiesWithMetetoData.map((city: any, i: number) => <MarkerComp key={i} city={city} />)}
    </MapContainer>
  );
}

export default Map;