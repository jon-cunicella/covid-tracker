import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import ToolTipComponent from './ToolTipComponent';
const CountryMarker = ({ position }) => {
  return (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      {/* <PopupComponent /> */}
      <ToolTipComponent
        countryName={'USA'}
        confirmedCasesLabel={'Confirmed Cases'}
        deathsLabel={'deaths'}
        recoveredLabel={'recovered'}
        lastUpdateLabel={'last update label'}
      />
    </Marker>
  );
};

export default CountryMarker;
