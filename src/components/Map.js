import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountryMarker from './CountryMarker';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalStatsDashboard from './GlobalStatsDashboard';
import '../styles/globalStatsDashboard.css';

const Map = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(
        'https://disease.sh/v2/countries?yesterday&sort'
      );
      const response2 = await axios('https://disease.sh/v2/all?yesterday=');
      setData(response.data);
      setAllData(response2.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <MapContainer
        center={[17.5707, 3.9962]}
        zoom={2}
        style={{ height: '60vh', width: '100wh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
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
      <GlobalStatsDashboard
        totalTests={allData.tests}
        totalTestsPerOneMillion={allData.testsPerOneMillion}
        totalCases={allData.cases}
        totalCasesPerOneMillion={allData.casesPerOneMillion}
        deaths={allData.deaths}
        deathsPerOneMillion={allData.deathsPerOneMillion}
        active={allData.active}
        critical={allData.critical}
        recovered={allData.recovered}
      />
    </div>
  );
};
export default Map;
