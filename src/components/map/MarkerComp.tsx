import React from 'react';
import { Marker } from 'react-leaflet';
import cityMarker from '@/components/icons/cityMarker';
import TooltipComp from './TooltipComp';

function MarkerComp({ city, i }: any) {
  return (
    <Marker key={i} position={[city.lat, city.lon] as any} icon={cityMarker}>
      <TooltipComp city={city} />
    </Marker>
  );
}

export default MarkerComp;