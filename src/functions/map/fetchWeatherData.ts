import fetcher from '@/utils/fetcher';


const apiKey = '7f2a99cdf1e9e547dfe2cd9193c86148';

export const fetchWeatherData = async (cities:any) => {

    const weatherData = await Promise.all(cities.map(async(city:any) => {
    
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`;
      
      const response = await fetcher(url);
      console.log('response meteoData', response)
      return {
        name: city.name,
        lat: city.lat,
        lon: city.lon,
        weather: response.weather[0].description,
        temperature: response.main.temp,
      };
    }));

    return (weatherData);
  };