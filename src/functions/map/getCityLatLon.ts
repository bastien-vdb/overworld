import {limiter} from '@/utils/limiter.config';
import fetcher from '@/utils/fetcher';

const getCityLatLon = async (city: string) => {
    
    const url = `https://geocode.maps.co/search?q=${city}`;
    const response = await limiter.schedule(() => fetcher(url));
    return {
      name: city,
      lat: response[0].lat,
      lon: response[0].lon
    };
  };

  export default getCityLatLon;