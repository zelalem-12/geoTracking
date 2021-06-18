//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ContextAPI from './context/contextWrapper';
import Header from './components/header';
import Map from './components/map';
//import Sidebar from './components/sidebar';
//import Login from './containers/login';

function App() {
  return (
    // <Router>
    //   <div>
    //     {/* <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav> */}
    //     <Switch>
    //       <Route path="/">
    //         <Login />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <ContextAPI className="App">
      <Header />
      {/* <Sidebar /> */}
      <Map isMarkerShown />
    </ContextAPI>
  );
}

export default App;
