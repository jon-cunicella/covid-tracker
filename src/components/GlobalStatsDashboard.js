const GlobalStatsDashboard = () => {
  return (
    <div className='outer'>
      <div className='row'>
        <h1 className='item'>Total Tests</h1>
        <h1 className='item'>Total Cases</h1>
        <h1 className='item'>Total Deaths</h1>
      </div>
      <div className='row'>
        <h1 className='item'>Active</h1>
        <h1 className='item'>Critical</h1>
        <h1 className='item'>Recovered</h1>
      </div>
    </div>
  );
};

export default GlobalStatsDashboard;
