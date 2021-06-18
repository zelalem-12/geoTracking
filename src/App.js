import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ContextAPI from './context/contextWrapper';
import Map from './components/map';
//import Sidebar from './components/sidebar';
import Login from './containers/Login';
import PrivateRoute from './containers/privateRoute';

function App() {
  return (
    <Router>
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      <Switch>
        <PrivateRoute exact path="/">
          <ContextAPI>
            <Map isMarkerShown />
          </ContextAPI>
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>

    // <Login />
    // <ContextAPI className="App">
    //   <Header />
    //   {/* <Sidebar /> */}
    //   <Map isMarkerShown />
    // </ContextAPI>
  );
}

export default App;
