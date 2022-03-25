import { Tooltip } from 'react-leaflet';
import '../index.css';

const ToolTipComponent = ({
  countryName,
  confirmedCasesLabel,
  deathsLabel,
  recoveredLabel,
}) => {
  var numeral = require('numeral');

  return (
    <Tooltip>
      <h1>{countryName}</h1>
      <p>Confirmed: {numeral(confirmedCasesLabel).format('Oa')}</p>
      <p>Deaths: {numeral(deathsLabel).format('Oa')}</p>
      <p>Recovered: {numeral(recoveredLabel).format('Oa')}</p>
    </Tooltip>
  );
};

export default ToolTipComponent;
