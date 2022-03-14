import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CountryMarker from './CountryMarker';
const Map = () => {
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
      <CountryMarker position={[17.5707, 3.9962]} />
    </MapContainer>
  );
};
export default Map;
