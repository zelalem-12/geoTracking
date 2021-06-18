import React, { useState, useEffect } from 'react';
import { apiCall } from '../utils';

import { AppContext } from './context';

const ContextAPI = props => {
  const [locations, setLocations] = useState({
    latitude: 8.9891271,
    longitude: 38.7719433,
  });

  const getLocation = async () => {
    let username = '';
    let password = '';
    try {
      username = localStorage.getItem('username');
      password = localStorage.getItem('password');
    } catch (err) {
      console.log('un able to read token', err);
    }
    const url = 'https://demo.traccar.org/api/positions';
    const result = await apiCall('GET', url, { username, password });
    const { latitude, longitude } = result[0];
    console.log({ result });
    setLocations({ latitude, longitude });
  };
  useEffect(() => {
    getLocation();
  }, []);
  console.log(locations);
  return (
    <AppContext.Provider value={locations}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextAPI;
