import React from 'react';
import { Marker } from 'react-leaflet';
import cityMarker from '@/components/icons/cityMarker';
import TooltipComp from './TooltipComp';
import { CityType } from '@/types/City.type';

type MarkerCompProps = {
  city: CityType;
  key: number;
}

function MarkerComp({ city, key }: MarkerCompProps) {
  return (
    <Marker key={key} position={[city.lat, city.lon]} icon={cityMarker}>
      <TooltipComp city={city} />
    </Marker>
  );
}

export default MarkerComp;