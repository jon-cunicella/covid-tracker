import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountryMarker from './CountryMarker';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Map = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(
        'https://disease.sh/v2/countries?yesterday&sort'
      );
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MapContainer
      center={[17.5707, 3.9962]}
      zoom={2}
      style={{ height: '50vh', width: '100wh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {data.map((singleCountry) => (
        <CountryMarker
          position={[
            singleCountry.countryInfo.lat,
            singleCountry.countryInfo.long,
          ]}
          countryName={singleCountry.country}
          confirmedCasesLabel={singleCountry.cases}
          deathsLabel={singleCountry.deaths}
          recoveredLabel={singleCountry.recovered}
        />
      ))}
    </MapContainer>
  );
};
export default Map;
