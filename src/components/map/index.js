import React, { useContext } from 'react';
import { compose, withProps } from 'recompose';
import { AppContext } from '../../context/context';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDxiDS3-vXKZoxq60vQEsQ4XCC50j55I4Q&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ margin: '0 auto', height: '100vh', width: '100%' }} />
    ),

    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  const locations = useContext(AppContext);
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 8.9891271, lng: 38.7719433 }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: locations.latitude, lng: locations.longitude }}
        />
      )}
    </GoogleMap>
  );
});

export default Map;
