import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const Map = withGoogleMap((props) =>{
  return(
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      defaultCenter={{lat: 32.741610, lng: -97.320952}}
      onClick={props.onMapClick}
    >
    {props.markers&&props.markers.map(marker=>(
      <Marker
        {...marker}
      />
    ))}
    </GoogleMap>
  );
});
export default Map;