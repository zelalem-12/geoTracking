import './App.css';
import Header from './components/header';
import Map from './components/map';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1 className="heder">Geo tracking web applications</h1>
      <p>Welcome to the device trackiing up</p> */}
      {/* <Map isMarkerShown /> */}
      <Map isMarkerShown />
    </div>
  );
}

export default App;
