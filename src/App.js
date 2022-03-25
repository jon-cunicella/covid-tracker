import Map from './components/Map';
import GlobalStatsDashboard from './components/GlobalStatsDashboard';
import './styles/globalStatsDashboard.css';
function App() {
  return (
    <div className='App'>
      <div id='map'>
        <Map />
      </div>
      <GlobalStatsDashboard />
    </div>
  );
}

export default App;
