import './App.css';
import Header from './components/header';
import Map from './components/map';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Map isMarkerShown />
    </div>
  );
}

export default App;
