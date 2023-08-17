import L from 'leaflet';
const cityMarker = new L.Icon({
    iconUrl: '/marker.svg',
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  export default cityMarker;