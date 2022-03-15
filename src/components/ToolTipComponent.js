import { Tooltip } from 'react-leaflet';
import '../index.css';

const ToolTipComponent = ({
  countryName,
  confirmedCasesLabel,
  deathsLabel,
  recoveredLabel,
  lastUpdateLabel,
}) => {
  return (
    <Tooltip>
      <h1>{countryName}</h1>
      <p>Confirmed: {confirmedCasesLabel}</p>
      <p>Deaths: {deathsLabel}</p>
      <p>Recovered: {recoveredLabel}</p>
      <p>Last Update: {lastUpdateLabel}</p>
    </Tooltip>
  );
};

export default ToolTipComponent;
