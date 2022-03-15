import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import ToolTipComponent from './ToolTipComponent';
const CountryMarker = ({
  position,
  countryName,
  confirmedCasesLabel,
  deathsLabel,
  recoveredLabel,
}) => {
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
        countryName={countryName}
        confirmedCasesLabel={confirmedCasesLabel}
        deathsLabel={deathsLabel}
        recoveredLabel={recoveredLabel}
      />
    </Marker>
  );
};

export default CountryMarker;
