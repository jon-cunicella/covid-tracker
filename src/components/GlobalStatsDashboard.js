const GlobalStatsDashboard = () => {
  return (
    <div className='outer'>
      <div className='row'>
        <p className='item'>
          <div className='stat-item'>
            <p>-</p>
            <p>Total Tests</p>
            <p>-</p>
            <p>Per 1 million</p>
          </div>
        </p>
        <p className='item'>
          <div className='stat-item'>
            <p>-</p>
            <p>Total Cases</p>
            <p>-</p>
            <p>Per 1 million</p>
          </div>
        </p>
        <p className='item'>
          <div className='stat-item'>
            <p>-</p>
            <p>Total Tests</p>
            <p>-</p>
            <p>Per 1 million</p>
          </div>
        </p>
      </div>
      <div className='row'>
        <p className='item'>
          <div className='stat-item'>
            <p>-</p>
            <p>tested</p>
          </div>
        </p>
        <p className='item'>
          <div className='stat-item'>
            <p>-</p>
            <p>Critical</p>
          </div>
        </p>
        <p className='item'>
          <div className='stat-item'>
            <p>-</p>
            <p>Recovered</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default GlobalStatsDashboard;
