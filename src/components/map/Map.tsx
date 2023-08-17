import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerComp from '@/components/map/MarkerComp';
import TileLayerComp from './TileLayerComp';
import { useCity } from '@/contexts/useCityContext';

const mapConfig: [number, number] = [43.7696, 7.49508];


function Map() {

  const { getCities } = useCity();
  const cities = getCities();

  return (
    <div className='w-full flex justify-center'>
      <MapContainer
        zoomControl={false}
        scrollWheelZoom={false}
        center={mapConfig}
        zoom={5}
        className='w-[100%] lg:w-[80%]'
        style={{ height: '600px' }}
      >
        <TileLayerComp />
        {cities.map((city, i: number) => <MarkerComp key={i} city={city} />)}
      </MapContainer>
    </div>
  );
}

export default Map;