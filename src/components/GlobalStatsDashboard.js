const GlobalStatsDashboard = ({
  totalTests,
  totalTestsPerOneMillion,
  totalCases,
  totalCasesPerOneMillion,
  deaths,
  deathsPerOneMillion,
  active,
  critical,
  recovered,
}) => {
  var numeral = require('numeral');

  return (
    <div className='outer'>
      <div className='row'>
        <p className='item'>
          <p>
            {totalTests > 0 ? numeral(totalTests).format('O,O') : '-'} <br />
            Total Tests
          </p>
          <p className='stat-item-secondary'>
            {totalTestsPerOneMillion > 0
              ? numeral(totalTestsPerOneMillion).format('O,O')
              : '-'}{' '}
            <br />
            Per 1 million
          </p>
        </p>
        <p className='item'>
          <p>
            {totalCases > 0 ? numeral(totalCases).format('O,O') : '-'} <br />
            Total Cases
          </p>
          <p className='stat-item-secondary'>
            {totalCasesPerOneMillion > 0
              ? numeral(totalCasesPerOneMillion).format('O,O')
              : '-'}{' '}
            <br />
            Per 1 million
          </p>
        </p>
        <p className='item'>
          <p>
            {deaths > 0 ? numeral(deaths).format('O,O') : '-'} <br />
            Total Deaths
          </p>
          <p className='stat-item-secondary'>
            {deathsPerOneMillion > 0
              ? numeral(deathsPerOneMillion).format('O,O')
              : '-'}{' '}
            <br />
            Per 1 million
          </p>
        </p>
      </div>
      <div className='row'>
        <p className='item'>
          <div className='stat-item'>
            <p>
              {active > 0 ? numeral(active).format('O,O') : '-'} <br /> Active
            </p>
          </div>
        </p>
        <p className='item'>
          <div className='stat-item'>
            <p>
              {critical > 0 ? numeral(critical).format('O,O') : '-'} <br />
              Critical
            </p>
          </div>
        </p>
        <p className='item'>
          <div className='stat-item'>
            <p>
              {recovered > 0 ? numeral(recovered).format('O,O') : '-'} <br />{' '}
              Recovered{' '}
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default GlobalStatsDashboard;
