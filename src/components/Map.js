import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountryMarker from './CountryMarker';
import { useEffect, useState } from 'react';

const Map = () => {
  const axios = require('axios').default;
  const [latLongList, setLatLongList] = useState([
    { longitude: '', latitude: '' },
  ]);
  const latLongLists = [];

  const testList = [
    { latitude: 0, longitude: 0 },
    { latitude: 10, longitude: 10 },
  ];
  async function fetchCountryPins() {
    try {
      const response = await axios.get(
        'https://corona.lmao.ninja/v2/countries?yesterday=&sort='
      );
      response.data.map((country) => {
        latLongLists.push({
          latitude: country.countryInfo.lat,
          longitude: country.countryInfo.long,
        });
      });
      setLatLongList(latLongLists);
      console.log(latLongLists);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCountryPins();
  }, []);
  return (
    <MapContainer
      center={[17.5707, 3.9962]}
      zoom={3}
      style={{ height: '100vh', width: '100wh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {latLongList.map((entry) => (
        <CountryMarker position={[entry.latitude, entry.longitude]} />
      ))}
    </MapContainer>
  );
};
export default Map;
